import io
import pytest
from app import create_app
from models import db, User, Team, Meeting, AttendanceRecord
from config import TestConfig

@pytest.fixture
def test_app():
    app = create_app(TestConfig)
    with app.app_context():
        db.create_all()
        # Create Teams
        t1 = Team(name="Backend Systems")
        t2 = Team(name="Frontend Core")
        db.session.add_all([t1, t2])
        db.session.commit()

        # Create Admin
        admin = User(username="System Admin", email="admin@taskflow.local", role="Admin", is_admin=True, team_id=t1.id)
        admin.set_password("Admin@123")

        # Create Employee
        emp = User(username="Jane Doe", email="jane@company.local", role="Member", is_admin=False, team_id=t1.id)
        emp.set_password("Pass@123")

        db.session.add_all([admin, emp])
        db.session.commit()

    yield app

    with app.app_context():
        db.drop_all()

@pytest.fixture
def client(test_app):
    return test_app.test_client()

def test_meeting_creation_and_joining(client):
    # 1. Login as Admin
    res = client.post("/api/auth/login", json={"email": "admin@taskflow.local", "password": "Admin@123"})
    assert res.status_code == 200

    # 2. Admin creates a meeting
    res = client.post("/api/meetings", json={
        "title": "Architecture Sprint Review",
        "description": "Aligning distributed API schema",
        "team_id": 1,
        "duration_minutes": 30
    })
    assert res.status_code == 201
    meeting_data = res.get_json()["meeting"]
    meeting_id = meeting_data["id"]
    assert meeting_data["title"] == "Architecture Sprint Review"
    assert "room_id" in meeting_data

    # 3. Logout Admin and Login as Employee
    client.post("/api/auth/logout")
    res = client.post("/api/auth/login", json={"email": "jane@company.local", "password": "Pass@123"})
    assert res.status_code == 200

    # 4. Employee lists meetings
    res = client.get("/api/meetings")
    assert res.status_code == 200
    meetings = res.get_json()["meetings"]
    assert len(meetings) == 1
    assert meetings[0]["id"] == meeting_id

    # 5. Employee joins meeting
    res = client.post(f"/api/meetings/{meeting_id}/join")
    assert res.status_code == 200
    join_data = res.get_json()
    assert join_data["success"] is True
    assert join_data["meeting"]["status"] == "Live"

    # 6. Employee cannot schedule meeting without permission
    res = client.post("/api/meetings", json={"title": "Rogue Meeting"})
    assert res.status_code == 403

def test_workforce_attendance_summary(client):
    # 1. Employee checks in
    client.post("/api/auth/login", json={"email": "jane@company.local", "password": "Pass@123"})
    res = client.post("/api/attendance/check-in")
    assert res.status_code in (200, 201)

    # 2. Employee tries to access workforce summary (forbidden)
    res = client.get("/api/attendance/workforce-summary")
    assert res.status_code == 403

    # 3. Admin logs in and accesses workforce summary
    client.post("/api/auth/logout")
    client.post("/api/auth/login", json={"email": "admin@taskflow.local", "password": "Admin@123"})

    res = client.get("/api/attendance/workforce-summary")
    assert res.status_code == 200
    data = res.get_json()
    assert "workforce" in data
    assert data["count"] >= 2

    # Check Jane's record is listed as active working
    jane_rec = next((w for w in data["workforce"] if w["email"] == "jane@company.local"), None)
    assert jane_rec is not None
    assert jane_rec["is_checked_in"] is True
    assert jane_rec["status"] == "Active Working"

def test_chat_file_upload(client):
    # Login as employee
    client.post("/api/auth/login", json={"email": "jane@company.local", "password": "Pass@123"})

    # Upload attachment from folder
    file_content = b"Technical specification content for task."
    data = {
        "file": (io.BytesIO(file_content), "specs.pdf")
    }
    res = client.post("/api/chat/upload", data=data, content_type="multipart/form-data")
    assert res.status_code == 200
    upload_data = res.get_json()
    assert "url" in upload_data
    assert upload_data["filename"] == "specs.pdf"
    assert "/static/uploads/attachments/" in upload_data["url"]
