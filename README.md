# Taskflow Pro — Enterprise-Grade Productivity & Task Management Platform

**Taskflow Pro** is a modern, high-performance task management web application designed for professionals and teams. Built with a clean SaaS aesthetic, responsive design, light/dark themes, advanced task filtering, bulk actions, real-time productivity analytics, role-based workflows, and an integrated **Admin Portal**.

---

## ⚡ Quick Start: Demo Accounts & Credentials

The application features **1-Click Demo Login cards** on the sign-in page, pre-configured with default seed accounts:

| Persona / Role | Email | Password | Access Rights |
|---|---|---|---|
| 👑 **System Administrator** | `admin@taskflow.local` | `password123` | System-wide admin portal, manage all users & squads |
| 💼 **Team Lead** (Backend Systems) | `lead_backend@taskflow.local` | `password123` | Squad task allocation, deliverable review pipeline |
| 💻 **Backend Engineer** (Member) | `dev_backend@taskflow.local` | `password123` | Backend squad workspace, proof-of-work submissions |
| 🎨 **Frontend Engineer** (Member) | `dev_frontend@taskflow.local` | `password123` | Frontend core workspace, interactive charts & UI tasks |

> [!NOTE]
> Demo accounts and default squads are **automatically bootstrapped** upon application launch if not already present. No manual database setup is required.

---

## 🌟 Key Features

### 1. Robust Authentication & Account Creation
- **1-Click Demo Personas**: Instant login for quick evaluation and role testing.
- **Enterprise Account Registration**: Create new user accounts choosing between Member, Team Lead, and Admin personas with squad assignment or unassigned status.
- **Session Security**: Secure HTTP-only cookies with same-site protection and Bcrypt password hashing.

### 2. Multi-Tier Role-Based Task Management
- **Extended Task Attributes**: Title, description, squad/category, priority (`Critical`, `High`, `Medium`, `Low`), due date, due time, tags, and starred status.
- **Automated Bug Routing**: Bugs without an explicit assignee automatically route to the designated squad lead or default engineer.
- **Proof of Work Pipeline**: Members submit code repository links and notes; Leads review and approve or request revisions with feedback.
- **Bulk Actions**: Select multiple tasks to complete or delete in bulk.

### 3. Integrated Admin Portal (`@admin_required`)
- Restricted server-side authorization check (`403 Forbidden` for standard users).
- System-wide metrics: Total registered users, total tasks, completion rates, and audit logs.
- User management table: Change roles, promote/demote administrators, and manage squad assignments.

### 4. Real-Time Chat & Attendance
- **Socket.IO Realtime Messaging**: Squad-level and task-level instant collaboration.
- **Attendance & Leave Management**: Live check-in/check-out digital clock and leave approval workflow.

---

## 🐳 Docker Deployment (Any Environment)

Run the application seamlessly in any containerized environment using Docker:

### Option A: Using Docker Compose (Recommended)
```bash
# Build and run the containerized application
docker-compose up --build

# Run in detached background mode
docker-compose up -d
```
Open **[http://localhost:5000](http://localhost:5000)** in your browser.

### Option B: Using Plain Docker
```bash
# Build the Docker image
docker build -t taskflow-pro .

# Run the container
docker run -p 5000:5000 -v taskflow_data:/app/data taskflow-pro
```

To stop the containers:
```bash
docker-compose down
```

---

## 🚀 Local Setup (Without Docker)

### 1. Prerequisites
- Python 3.10, 3.11, 3.12, 3.13, or 3.14

### 2. Install Dependencies
```powershell
# Create and activate virtual environment (optional but recommended)
python -m venv .venv
.\.venv\Scripts\Activate.ps1    # On Windows
# source .venv/bin/activate     # On Linux / macOS

# Install dependencies
pip install -r requirements.txt
```

### 3. Start the Application
```powershell
python run.py
```
Open your browser to: **[http://127.0.0.1:5000](http://127.0.0.1:5000)**

---

## 🧪 Automated Testing & Verification

Run the full pytest suite (80 tests, 100% passing):
```powershell
pytest -v
```

Run the end-to-end automated verification harness:
```powershell
python verify_app.py
```

---

## 📡 API Endpoint Overview

All endpoints return JSON and use standard HTTP response codes (`200`, `201`, `400`, `401`, `403`, `404`, `409`).

### Authentication & Profile
- `GET /api/auth/teams` — Public endpoint to list squads for signup dropdown
- `POST /api/auth/register` (alias: `/signup`) — Register new user account
- `POST /api/auth/login` — Authenticate and establish session
- `POST /api/auth/logout` — Terminate session
- `GET /api/auth/me` — Return current authenticated user profile
- `PUT /api/auth/profile` — Update user profile name and theme preference
- `PUT /api/auth/password` — Change password (requires current password verification)
- `POST /api/auth/google` — Google OAuth ID token verification

### Task Management
- `GET /api/tasks` — List tasks with role-based scoping, debounced search, and filters
- `POST /api/tasks` — Create task with conflict checking and auto-routing
- `GET /api/tasks/<id>` — Get single task details
- `PUT /api/tasks/<id>` — Update task
- `PATCH /api/tasks/<id>/status` — Update lifecycle status
- `POST /api/tasks/<id>/submit-proof` — Submit proof of work for review
- `PATCH /api/tasks/<id>/review` — Approve or reject deliverable
- `DELETE /api/tasks/<id>` — Delete task
- `POST /api/tasks/bulk-complete` — Mark multiple tasks completed
- `POST /api/tasks/bulk-delete` — Delete multiple tasks

### Dashboard, Attendance & Chat
- `GET /api/dashboard/stats` — Full stats with category breakdowns
- `POST /api/attendance/check-in` — Check in today
- `POST /api/attendance/check-out` — Check out today
- `GET /api/attendance/today` — Check-in status & teammate presence
- `GET /api/chat/channels` — List messaging channels
- `POST /api/assistant/query` — AI productivity assistant
