# Taskflow Pro — Enterprise-Grade Productivity & Task Management Platform

**Taskflow Pro** is a modern, high-performance task management web application designed for professionals and engineering teams. Built with a clean SaaS aesthetic, responsive design, 5-theme palettes, advanced task filtering, bulk actions, real-time productivity analytics, role-based workflows, an integrated **Admin Portal**, a **Floating AI Copilot**, interactive canvas charts, and full avatar-based profile management.

---

## ⚡ Quick Start: Demo Accounts & Credentials

The application features **1-Click Demo Login cards** on the sign-in page, pre-configured with default seed accounts:

| Persona / Role | Email | Password | Access Rights |
|---|---|---|---|
| 💼 **Team Lead** (Backend Systems) | `lead_backend@taskflow.local` | `password123` | Squad task allocation, deliverable review pipeline |
| 💻 **Backend Engineer** (Member) | `dev_backend@taskflow.local` | `password123` | Backend squad workspace, proof-of-work submissions |
| 🎨 **Frontend Engineer** (Member) | `dev_frontend@taskflow.local` | `password123` | Frontend core workspace, interactive charts & UI tasks |

> [!IMPORTANT]
> **Admin Login is separate from the public sign-in page.** Navigate to `/admin/login` in the address bar:
> - **URL**: `http://localhost:5000/admin/login`
> - **Email**: `admin@taskflow.local`
> - **Password**: `Admin@123`

> [!NOTE]
> Demo accounts and default squads are **automatically bootstrapped** upon application launch if not already present. No manual database setup is required.

---

## 🌟 Key Features

### 1. Robust Authentication & Account Creation
- **1-Click Demo Personas**: Instant login for quick evaluation and role testing.
- **Enterprise Account Registration**: Create new user accounts choosing between Member and Team Lead personas with squad assignment or unassigned status.
- **Session Security**: Secure HTTP-only cookies with same-site protection and Bcrypt password hashing.

### 2. 🤖 Floating AI Copilot (Bottom-Right Corner)
- Click the pulsing green **AI FAB button** at the bottom-right corner to open the Copilot window.
- Quick suggestion chips: Overdue tasks?, Team progress, Weekly status report, Break into subtasks.
- Copy response button, clear chat history, minimize/maximize window.
- Quick-action to create a new deliverable directly from AI suggestions.

### 3. 🎨 Interactive Profile & Theme System
- Avatar photo upload with live preview (click your avatar or visit Settings).
- Professional bio / role headline field.
- **5 Visual Themes**: Light, Dark, Midnight (cyberpunk blue), Emerald (deep green), Cyber (synthwave purple).
- Interactive theme selection cards with live preview swatches.
- Cursor spotlight + 3D tilt micro-interactions on cards.

### 4. 📊 Interactive Overview Analytics Charts
- **Velocity Bar Chart**: Visual sprint breakdown by status (Completed, In Progress, In Review, Overdue Risk).
- **Category Donut Chart**: Task distribution across all engineering categories.
- **7-Day Productivity Trend Line Chart**: Smooth animated area chart with curved lines.
- Chart tab switcher for seamless navigation between chart types.

### 5. Multi-Tier Role-Based Task Management
- Extended task attributes: Title, description, squad/category, priority, due date, tags.
- **Proof of Work Pipeline**: Members submit code links; Leads review and approve or request revisions.
- **Bulk Actions**: Select multiple tasks to complete or delete in bulk.
- **Workload Conflict Advisory**: Warns when assigning tasks to engineers on approved leave.

### 6. Integrated Admin Portal (`/admin/login`)
- Restricted to admin credentials only — not visible on the public sign-in page.
- System-wide metrics: Total registered users, total tasks, completion rates, and audit logs.
- User management table: Change roles, promote/demote administrators, manage squad assignments.

### 7. Real-Time Chat & Attendance
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
Admin login: **[http://localhost:5000/admin/login](http://localhost:5000/admin/login)**

### Option B: Using Plain Docker
```bash
# Build the Docker image
docker build -t taskflow-pro .

# Run the container with persistent data and avatar storage
docker run -p 5000:5000 \
  -v taskflow_data:/app/data \
  -v taskflow_uploads:/app/static/uploads \
  taskflow-pro
```

To stop the containers:
```bash
docker-compose down
```

---

## 🚀 Local Setup (Without Docker)

### 1. Prerequisites
- Python 3.10, 3.11, 3.12, or 3.13

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
Admin access: **[http://127.0.0.1:5000/admin/login](http://127.0.0.1:5000/admin/login)**

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
- `PUT /api/auth/profile` — Update user profile name, bio, and theme preference
- `POST /api/auth/avatar` — Upload/update user profile photo
- `PUT /api/auth/password` — Change password (requires current password verification)

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

### Dashboard, Attendance, AI & Chat
- `GET /api/dashboard/stats` — Full stats with category breakdowns
- `POST /api/attendance/check-in` — Check in today
- `POST /api/attendance/check-out` — Check out today
- `GET /api/attendance/today` — Check-in status & teammate presence
- `GET /api/chat/channels` — List messaging channels
- `POST /api/assistant/query` — AI productivity Copilot assistant
