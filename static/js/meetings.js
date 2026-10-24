/**
 * Taskflow Team Meetings & Video Collaboration Module
 * Enterprise virtual conferencing:
 * - Admin schedule/create meeting engine
 * - Employee join & interactive video room simulation
 * - Jitsi Meet direct launch integration
 */

const TaskflowMeetings = {
  meetings: [],
  activeMeeting: null,
  callTimer: null,
  callSeconds: 0,
  isMicMuted: false,
  isVideoOff: false,

  async init() {
    this.bindDOM();
    await this.loadMeetings();
  },

  bindDOM() {
    // Schedule Meeting modal buttons
    const btnOpenSched = document.getElementById('btn-open-schedule-meeting');
    const modalSched = document.getElementById('modal-schedule-meeting');
    const btnCloseSched = document.getElementById('btn-close-schedule-modal');
    const formSched = document.getElementById('form-schedule-meeting');

    if (btnOpenSched && modalSched) {
      btnOpenSched.addEventListener('click', () => {
        // Default time to current time plus 10 mins
        const schedInput = document.getElementById('meeting-sched-time');
        if (schedInput) {
          const d = new Date(Date.now() + 10 * 60 * 1000);
          schedInput.value = d.toISOString().slice(0, 16);
        }
        modalSched.showModal();
      });
    }

    if (btnCloseSched && modalSched) {
      btnCloseSched.addEventListener('click', () => modalSched.close());
    }

    if (formSched && modalSched) {
      formSched.addEventListener('submit', async (e) => {
        e.preventDefault();
        await this.handleCreateMeeting(formSched, modalSched);
      });
    }

    // Active Meeting Room controls
    const btnLeave = document.getElementById('btn-leave-meeting');
    const btnToggleMic = document.getElementById('btn-meeting-toggle-mic');
    const btnToggleCam = document.getElementById('btn-meeting-toggle-cam');

    if (btnLeave) {
      btnLeave.addEventListener('click', () => this.leaveMeetingRoom());
    }

    if (btnToggleMic) {
      btnToggleMic.addEventListener('click', () => this.toggleMicrophone());
    }

    if (btnToggleCam) {
      btnToggleCam.addEventListener('click', () => this.toggleCamera());
    }
  },

  async loadMeetings() {
    const container = document.getElementById('meetings-list-container');
    if (!container) return;

    container.innerHTML = `<div class="meetings-loading">Loading scheduled sessions...</div>`;

    try {
      const res = await fetch('/api/meetings');
      if (!res.ok) return;
      const data = await res.json();
      this.meetings = data.meetings || [];
      this.renderMeetingsList();
      this.updateAdminControls();
    } catch (err) {
      console.error('[Meetings] Load failed:', err);
      container.innerHTML = `<p class="empty">Failed to load meetings list.</p>`;
    }
  },

  updateAdminControls() {
    const user = window.TaskflowAuth?.currentUser || {};
    const isAdminOrLead = user.role === 'Admin' || user.role === 'Lead' || user.is_admin;
    const btnSchedule = document.getElementById('btn-open-schedule-meeting');
    if (btnSchedule) {
      btnSchedule.style.display = isAdminOrLead ? 'inline-flex' : 'none';
    }
  },

  renderMeetingsList() {
    const container = document.getElementById('meetings-list-container');
    if (!container) return;

    if (this.meetings.length === 0) {
      container.innerHTML = `
        <div class="meetings-empty-state">
          <div style="font-size: 36px; margin-bottom: 12px;">📹</div>
          <h4>No Scheduled Meetings</h4>
          <p>No squad or company-wide video conferences scheduled at this time.</p>
        </div>
      `;
      return;
    }

    const user = window.TaskflowAuth?.currentUser || {};
    const isAdmin = user.role === 'Admin' || user.is_admin;

    let html = '';
    this.meetings.forEach(m => {
      const isHost = m.host_id === user.id || isAdmin;
      const statusPill = m.status === 'Live'
        ? `<span class="badge green pulse" style="background: rgba(34,197,94,0.18); color: #16A34A; font-weight: 700;">● Live Now</span>`
        : `<span class="badge blue">${m.status}</span>`;

      html += `
        <div class="meeting-card interactive-card">
          <div class="meeting-card-head">
            <div>
              <h4 class="meeting-card-title">${this.escapeHtml(m.title)}</h4>
              <p class="meeting-card-squad">${this.escapeHtml(m.team_name || 'All Company')}</p>
            </div>
            ${statusPill}
          </div>

          <p class="meeting-card-desc">${this.escapeHtml(m.description || 'Virtual collaboration and sprint alignment.')}</p>

          <div class="meeting-meta-row">
            <div class="meeting-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>${this.escapeHtml(m.formatted_time || 'Upcoming')} (${m.duration_minutes}m)</span>
            </div>
            <div class="meeting-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <span>Host: <b>${this.escapeHtml(m.host_name)}</b></span>
            </div>
          </div>

          <div class="meeting-actions-row">
            <button type="button" class="btn primary btn-sm btn-join-meet" onclick="TaskflowMeetings.joinMeeting(${m.id})">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
              </svg>
              <span>Join Meeting</span>
            </button>

            ${isHost ? `
              <button type="button" class="btn btn-sm danger" onclick="TaskflowMeetings.deleteMeeting(${m.id})" title="Cancel & Delete Meeting">
                Cancel
              </button>
            ` : ''}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  },

  async handleCreateMeeting(form, modal) {
    const title = form.title?.value?.trim();
    if (!title) return;

    const description = form.description?.value?.trim() || '';
    const team_id = form.team_id?.value || null;
    const scheduled_time = form.scheduled_time?.value || null;
    const duration_minutes = parseInt(form.duration_minutes?.value || 30);

    try {
      const res = await fetch('/api/meetings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          team_id,
          scheduled_time,
          duration_minutes
        })
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Failed to schedule meeting.');
        return;
      }

      form.reset();
      modal.close();
      await this.loadMeetings();
    } catch (err) {
      console.error('[Meetings] Create error:', err);
      alert('Error scheduling meeting.');
    }
  },

  async joinMeeting(meetingId) {
    try {
      const res = await fetch(`/api/meetings/${meetingId}/join`, {
        method: 'POST'
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Cannot join meeting.');
        return;
      }

      this.activeMeeting = data.meeting;
      this.openMeetingRoom(data.meeting, data.room_url);
    } catch (err) {
      console.error('[Meetings] Join failed:', err);
      alert('Error joining meeting.');
    }
  },

  openMeetingRoom(meeting, roomUrl) {
    const modal = document.getElementById('modal-active-meeting-room');
    if (!modal) return;

    const titleEl = document.getElementById('active-room-title');
    const squadEl = document.getElementById('active-room-squad');
    const extLink = document.getElementById('active-room-ext-link');

    if (titleEl) titleEl.textContent = meeting.title;
    if (squadEl) squadEl.textContent = `${meeting.team_name || 'All Company'} • Room: ${meeting.room_id}`;
    if (extLink) extLink.href = roomUrl || meeting.meeting_link;

    this.callSeconds = 0;
    this.startCallTimer();
    modal.showModal();
  },

  startCallTimer() {
    const timerEl = document.getElementById('active-room-timer');
    if (this.callTimer) clearInterval(this.callTimer);

    const updateTimer = () => {
      this.callSeconds++;
      const mins = String(Math.floor(this.callSeconds / 60)).padStart(2, '0');
      const secs = String(this.callSeconds % 60).padStart(2, '0');
      if (timerEl) timerEl.textContent = `${mins}:${secs}`;
    };

    updateTimer();
    this.callTimer = setInterval(updateTimer, 1000);
  },

  leaveMeetingRoom() {
    if (this.callTimer) {
      clearInterval(this.callTimer);
      this.callTimer = null;
    }
    const modal = document.getElementById('modal-active-meeting-room');
    if (modal) modal.close();
    this.activeMeeting = null;
    this.loadMeetings();
  },

  toggleMicrophone() {
    this.isMicMuted = !this.isMicMuted;
    const btn = document.getElementById('btn-meeting-toggle-mic');
    if (btn) {
      btn.className = this.isMicMuted ? 'meet-ctrl-btn btn-muted' : 'meet-ctrl-btn';
      btn.title = this.isMicMuted ? 'Unmute Microphone' : 'Mute Microphone';
      btn.innerHTML = this.isMicMuted ? `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
          <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
          <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
        </svg>
      ` : `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
        </svg>
      `;
    }
  },

  toggleCamera() {
    this.isVideoOff = !this.isVideoOff;
    const btn = document.getElementById('btn-meeting-toggle-cam');
    const vidPreview = document.getElementById('meeting-self-preview');
    if (btn) {
      btn.className = this.isVideoOff ? 'meet-ctrl-btn btn-muted' : 'meet-ctrl-btn';
      btn.title = this.isVideoOff ? 'Turn Camera On' : 'Turn Camera Off';
      btn.innerHTML = this.isVideoOff ? `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
      ` : `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
      `;
    }
    if (vidPreview) {
      vidPreview.style.background = this.isVideoOff ? '#1E293B' : 'linear-gradient(135deg, #1E3A8A, #064E3B)';
    }
  },

  async deleteMeeting(meetingId) {
    if (!confirm('Are you sure you want to cancel and remove this scheduled meeting?')) return;

    try {
      const res = await fetch(`/api/meetings/${meetingId}`, { method: 'DELETE' });
      if (res.ok) {
        await this.loadMeetings();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to cancel meeting.');
      }
    } catch (err) {
      console.error('[Meetings] Delete error:', err);
    }
  },

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
};

window.TaskflowMeetings = TaskflowMeetings;
