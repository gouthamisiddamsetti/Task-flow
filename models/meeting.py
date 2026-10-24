from datetime import datetime, timezone
from . import db

def utc_now():
    return datetime.now(timezone.utc)

class Meeting(db.Model):
    __tablename__ = "meetings"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    team_id = db.Column(db.Integer, db.ForeignKey("teams.id", ondelete="CASCADE"), nullable=True, index=True)
    host_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    scheduled_time = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    duration_minutes = db.Column(db.Integer, default=30, nullable=False)
    status = db.Column(db.String(50), default="Scheduled", nullable=False)  # Scheduled, Live, Completed, Cancelled
    room_id = db.Column(db.String(100), nullable=False)
    meeting_link = db.Column(db.String(500), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    host = db.relationship("User", foreign_keys=[host_id], backref=db.backref("hosted_meetings", lazy=True))
    team = db.relationship("Team", foreign_keys=[team_id], backref=db.backref("team_meetings", lazy=True))

    def to_dict(self):
        host_name = self.host.username if self.host else "Admin Host"
        team_name = self.team.name if self.team else "All Company"
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description or "",
            "team_id": self.team_id,
            "team_name": team_name,
            "host_id": self.host_id,
            "host_name": host_name,
            "scheduled_time": self.scheduled_time.isoformat() if self.scheduled_time else None,
            "formatted_time": self.scheduled_time.strftime("%b %d, %Y • %I:%M %p") if self.scheduled_time else "",
            "duration_minutes": self.duration_minutes,
            "status": self.status,
            "room_id": self.room_id,
            "meeting_link": self.meeting_link or f"/meetings/room/{self.room_id}",
            "created_at": self.created_at.isoformat() if self.created_at else None
        }
