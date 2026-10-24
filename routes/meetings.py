import uuid
from datetime import datetime, timezone
from flask import Blueprint, request, jsonify, session
from models import db, User, Team, Meeting
from utils.auth_decorators import login_required, role_required

meetings_bp = Blueprint("meetings", __name__)

@meetings_bp.get("")
@meetings_bp.get("/")
@login_required
def list_meetings():
    """
    List scheduled and active meetings.
    - Admins see all company meetings.
    - Employees see meetings addressed to their team or company-wide.
    """
    user_id = session.get("user_id")
    user = db.session.get(User, user_id)
    if not user:
        return jsonify(error="Authentication required."), 401

    if user.role == "Admin" or user.is_admin:
        meetings = Meeting.query.order_by(Meeting.scheduled_time.asc()).all()
    else:
        meetings = Meeting.query.filter(
            db.or_(
                Meeting.team_id.is_(None),
                Meeting.team_id == user.team_id
            )
        ).order_by(Meeting.scheduled_time.asc()).all()

    return jsonify(meetings=[m.to_dict() for m in meetings]), 200

@meetings_bp.post("")
@meetings_bp.post("/")
@login_required
def create_meeting():
    """
    Admin Meeting Creation endpoint.
    Admin (or Team Lead) schedules a new meeting.
    """
    user_id = session.get("user_id")
    user = db.session.get(User, user_id)
    if not user:
        return jsonify(error="Authentication required."), 401

    is_lead_or_admin = user.role in ("Admin", "Lead") or user.is_admin
    if not is_lead_or_admin:
        return jsonify(error="Forbidden. Admin or Team Lead privileges required to schedule meetings."), 403

    data = request.get_json(silent=True) or {}
    title = (data.get("title") or "").strip()
    if not title:
        return jsonify(error="Meeting title is required."), 400

    description = (data.get("description") or "").strip()
    team_id_raw = data.get("team_id")
    team_id = int(team_id_raw) if team_id_raw and str(team_id_raw) not in ("null", "undefined", "", "0") else None

    duration = int(data.get("duration_minutes") or 30)
    scheduled_time_str = data.get("scheduled_time")

    if scheduled_time_str:
        try:
            # Parse ISO or YYYY-MM-DDTHH:MM
            clean_time_str = scheduled_time_str.replace("Z", "+00:00")
            sched_time = datetime.fromisoformat(clean_time_str)
            if sched_time.tzinfo is not None:
                sched_time = sched_time.astimezone(timezone.utc).replace(tzinfo=None)
        except Exception:
            sched_time = datetime.now(timezone.utc).replace(tzinfo=None)
    else:
        sched_time = datetime.now(timezone.utc).replace(tzinfo=None)

    room_id = f"tf-{uuid.uuid4().hex[:8]}"
    meeting_link = f"https://meet.jit.si/Taskflow-{room_id}"

    meeting = Meeting(
        title=title[:255],
        description=description,
        team_id=team_id,
        host_id=user.id,
        scheduled_time=sched_time,
        duration_minutes=duration,
        status="Scheduled",
        room_id=room_id,
        meeting_link=meeting_link
    )
    db.session.add(meeting)
    db.session.commit()

    return jsonify(meeting=meeting.to_dict(), message="Meeting scheduled successfully."), 201

@meetings_bp.post("/<int:meeting_id>/join")
@login_required
def join_meeting(meeting_id):
    """
    Employee Meeting Joining endpoint.
    Allows employees to join scheduled or active meetings.
    """
    user_id = session.get("user_id")
    user = db.session.get(User, user_id)
    if not user:
        return jsonify(error="Authentication required."), 401

    meeting = db.session.get(Meeting, meeting_id)
    if not meeting:
        return jsonify(error="Meeting not found."), 404

    # Check permission (Admins, company-wide meetings, or member's team)
    is_admin = user.role == "Admin" or user.is_admin
    if not is_admin and meeting.team_id and meeting.team_id != user.team_id:
        return jsonify(error="Forbidden. This meeting is restricted to a different squad."), 403

    # Update meeting status to Live if host joins or started
    if meeting.status == "Scheduled":
        meeting.status = "Live"
        db.session.commit()

    return jsonify(
        success=True,
        meeting=meeting.to_dict(),
        participant={
            "id": user.id,
            "name": user.username,
            "role": user.role,
            "is_host": meeting.host_id == user.id or is_admin
        },
        room_url=meeting.meeting_link,
        message=f"Successfully joined {meeting.title}"
    ), 200

@meetings_bp.delete("/<int:meeting_id>")
@login_required
def delete_meeting(meeting_id):
    """
    Admin or host cancels and removes meeting.
    """
    user_id = session.get("user_id")
    user = db.session.get(User, user_id)
    if not user:
        return jsonify(error="Authentication required."), 401

    meeting = db.session.get(Meeting, meeting_id)
    if not meeting:
        return jsonify(error="Meeting not found."), 404

    is_admin = user.role == "Admin" or user.is_admin
    if not is_admin and meeting.host_id != user.id:
        return jsonify(error="Forbidden. Only the meeting host or Admin can remove this meeting."), 403

    db.session.delete(meeting)
    db.session.commit()

    return jsonify(success=True, message="Meeting deleted successfully."), 200
