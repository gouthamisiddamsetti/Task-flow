/**
 * Taskflow Instant Messaging & Task Collaboration Module
 * Real-time WebSockets powered by Socket.IO with HTTP fallback.
 * Supports local file folder attachments, multi-channel squad streams,
 * and Slack/Teams chat layout.
 */

const TaskflowChat = {
  socket: null,
  activeChannel: null,
  channels: [],
  messages: [],
  unreadTotal: 0,
  pendingAttachment: null,

  async init() {
    this.initSocket();
    this.bindDOM();
    await this.loadChannels();
  },

  initSocket() {
    if (typeof io !== 'undefined') {
      try {
        this.socket = io({
          transports: ['websocket', 'polling'],
          reconnection: true,
          reconnectionAttempts: 5,
          timeout: 10000
        });

        this.socket.on('connect', () => {
          const statusBadge = document.getElementById('chat-connection-status');
          if (statusBadge) {
            statusBadge.textContent = 'Connected';
            statusBadge.className = 'chat-badge-connected';
          }
          if (this.activeChannel) {
            this.socket.emit('join_room', {
              team_id: this.activeChannel.team_id,
              task_id: this.activeChannel.task_id
            });
          }
        });

        this.socket.on('disconnect', () => {
          const statusBadge = document.getElementById('chat-connection-status');
          if (statusBadge) {
            statusBadge.textContent = 'Reconnecting...';
            statusBadge.className = 'chat-badge-connecting';
          }
        });

        this.socket.on('new_message', (msg) => {
          this.handleIncomingMessage(msg);
        });

        this.socket.on('error', (err) => {
          console.warn('[Chat] Socket error:', err);
        });
      } catch (err) {
        console.warn('[Chat] Failed to initialize Socket.IO:', err);
      }
    } else {
      console.warn('[Chat] Socket.IO library not loaded, using HTTP fallback.');
    }
  },

  bindDOM() {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input-text');
    const btnAttach = document.getElementById('btn-chat-attach');
    const fileInput = document.getElementById('chat-file-input');

    if (chatForm) {
      chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = chatInput?.value?.trim() || '';
        const attachmentUrl = this.pendingAttachment ? this.pendingAttachment.url : null;

        if (!text && !attachmentUrl) return;

        const contentToSend = text || (this.pendingAttachment ? `Attached: ${this.pendingAttachment.filename}` : 'Shared an attachment');
        await this.sendMessage(contentToSend, attachmentUrl);

        if (chatInput) chatInput.value = '';
        this.clearPendingAttachment();
      });
    }

    // Local file folder attachment trigger
    if (btnAttach && fileInput) {
      btnAttach.addEventListener('click', () => {
        fileInput.click();
      });
    }

    if (fileInput) {
      fileInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        await this.uploadLocalFile(file);
        fileInput.value = '';
      });
    }
  },

  async uploadLocalFile(file) {
    const previewContainer = document.getElementById('chat-attachment-preview');
    if (previewContainer) {
      previewContainer.style.display = 'flex';
      previewContainer.innerHTML = `
        <span class="attachment-uploading-pill">
          ⏳ Uploading ${this.escapeHtml(file.name)} (${(file.size / 1024).toFixed(1)} KB)...
        </span>
      `;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/chat/upload', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Failed to upload attachment from folder.');
        this.clearPendingAttachment();
        return;
      }

      this.pendingAttachment = {
        url: data.url,
        filename: data.filename,
        size: data.size
      };

      this.renderPendingAttachment();
    } catch (err) {
      console.error('[Chat] Attachment upload failed:', err);
      alert('Error uploading file from folder.');
      this.clearPendingAttachment();
    }
  },

  renderPendingAttachment() {
    const previewContainer = document.getElementById('chat-attachment-preview');
    if (!previewContainer) return;

    if (!this.pendingAttachment) {
      previewContainer.style.display = 'none';
      previewContainer.innerHTML = '';
      return;
    }

    previewContainer.style.display = 'flex';
    previewContainer.innerHTML = `
      <div class="attachment-draft-card">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
        <span class="attachment-draft-name">${this.escapeHtml(this.pendingAttachment.filename)}</span>
        <button type="button" class="attachment-draft-remove" onclick="TaskflowChat.clearPendingAttachment()" title="Remove Attachment">&times;</button>
      </div>
    `;
  },

  clearPendingAttachment() {
    this.pendingAttachment = null;
    const previewContainer = document.getElementById('chat-attachment-preview');
    if (previewContainer) {
      previewContainer.style.display = 'none';
      previewContainer.innerHTML = '';
    }
  },

  async loadChannels() {
    try {
      const res = await fetch('/api/chat/channels');
      if (!res.ok) return;
      const data = await res.json();
      this.channels = data.channels || [];
      this.renderChannelList();

      if (!this.activeChannel && this.channels.length > 0) {
        this.selectChannel(this.channels[0].id);
      }
    } catch (err) {
      console.error('[Chat] Failed to load channels:', err);
    }
  },

  renderChannelList() {
    const container = document.getElementById('chat-channels-container');
    if (!container) return;

    const teamChannels = this.channels.filter(c => c.type === 'team');
    const taskThreads = this.channels.filter(c => c.type === 'task');

    let html = '';

    html += `<div class="channel-group-title">Squad Channels</div>`;
    teamChannels.forEach(c => {
      const isActive = this.activeChannel && this.activeChannel.id === c.id;
      html += `
        <div class="channel-item ${isActive ? 'active' : ''}" onclick="TaskflowChat.selectChannel('${c.id}')">
          <span class="channel-hash">#</span>
          <span class="channel-title-text">${this.escapeHtml(c.title.replace(/^#/, ''))}</span>
          ${c.unread_count > 0 ? `<span class="channel-unread-pill">${c.unread_count}</span>` : ''}
        </div>
      `;
    });

    if (taskThreads.length > 0) {
      html += `<div class="channel-group-title" style="margin-top: 14px;">Task Threads</div>`;
      taskThreads.forEach(c => {
        const isActive = this.activeChannel && this.activeChannel.id === c.id;
        html += `
          <div class="channel-item ${isActive ? 'active' : ''}" onclick="TaskflowChat.selectChannel('${c.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
            <span class="channel-title-text">${this.escapeHtml(c.title)}</span>
            ${c.unread_count > 0 ? `<span class="channel-unread-pill">${c.unread_count}</span>` : ''}
          </div>
        `;
      });
    }

    container.innerHTML = html;
  },

  async selectChannel(channelId) {
    const channel = this.channels.find(c => c.id === channelId);
    if (!channel) return;

    if (this.socket && this.socket.connected && this.activeChannel) {
      this.socket.emit('leave_room', {
        team_id: this.activeChannel.team_id,
        task_id: this.activeChannel.task_id
      });
    }

    this.activeChannel = channel;
    channel.unread_count = 0;
    this.updateSidebarUnreadTotal();
    this.renderChannelList();

    const titleEl = document.getElementById('chat-active-title');
    const descEl = document.getElementById('chat-active-desc');
    if (titleEl) titleEl.textContent = channel.title;
    if (descEl) descEl.textContent = channel.description || '';

    if (this.socket && this.socket.connected) {
      this.socket.emit('join_room', {
        team_id: channel.team_id,
        task_id: channel.task_id
      });
    }

    await this.fetchMessages(channel.team_id, channel.task_id);
  },

  async fetchMessages(teamId, taskId) {
    const stream = document.getElementById('chat-messages-stream');
    if (!stream) return;

    stream.innerHTML = `<div class="chat-loading-notice">Loading message stream...</div>`;

    try {
      let url = `/api/chat/messages?team_id=${teamId || ''}`;
      if (taskId) url += `&task_id=${taskId}`;

      const res = await fetch(url);
      if (!res.ok) return;
      const data = await res.json();
      this.messages = data.messages || [];
      this.renderMessages();
    } catch (err) {
      console.error('[Chat] Failed to fetch messages:', err);
    }
  },

  renderMessages() {
    const stream = document.getElementById('chat-messages-stream');
    if (!stream) return;

    if (this.messages.length === 0) {
      stream.innerHTML = `
        <div class="chat-empty-state">
          <div class="chat-empty-icon">💬</div>
          <h4>Start the conversation</h4>
          <p>No messages yet. Send a note to collaborate with your team.</p>
        </div>
      `;
      return;
    }

    const currentUserId = window.TaskflowAuth?.currentUser?.id;

    let html = '';
    this.messages.forEach(m => {
      const isOutgoing = m.sender_id === currentUserId;
      const isImage = m.attachment_url && /\.(png|jpe?g|gif|webp|svg)($|\?)/i.test(m.attachment_url);

      html += `
        <div class="chat-bubble-row ${isOutgoing ? 'outgoing' : 'incoming'}">
          <div class="chat-avatar" title="${this.escapeHtml(m.sender_name)}">
            ${this.escapeHtml(m.sender_initials || 'U')}
          </div>
          <div class="chat-bubble-content">
            <div class="chat-sender-meta">
              <b>${this.escapeHtml(m.sender_name)}</b>
              ${m.sender_role ? `<span class="chat-role-pill">${this.escapeHtml(m.sender_role)}</span>` : ''}
              <span class="chat-timestamp">${this.escapeHtml(m.formatted_time || '')}</span>
            </div>
            <div class="chat-bubble">
              <div class="chat-bubble-text">${this.escapeHtml(m.content)}</div>
              ${m.attachment_url ? `
                <div class="chat-attachment-box">
                  ${isImage ? `
                    <a href="${this.escapeHtml(m.attachment_url)}" target="_blank" rel="noopener" class="chat-img-link">
                      <img src="${this.escapeHtml(m.attachment_url)}" alt="Attachment Preview" class="chat-attachment-img">
                    </a>
                  ` : `
                    <a href="${this.escapeHtml(m.attachment_url)}" target="_blank" rel="noopener" class="chat-file-card" download>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                      <div class="chat-file-info">
                        <span class="chat-file-title">Downloaded Attachment</span>
                        <span class="chat-file-sub">Click to view/download file</span>
                      </div>
                    </a>
                  `}
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    });

    stream.innerHTML = html;
    stream.scrollTop = stream.scrollHeight;
  },

  async sendMessage(content, attachmentUrl = null) {
    if (!this.activeChannel) return;

    const payload = {
      team_id: this.activeChannel.team_id,
      task_id: this.activeChannel.task_id,
      content: content,
      attachment_url: attachmentUrl
    };

    try {
      const res = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok && data.message) {
        this.handleIncomingMessage(data.message);
      }
    } catch (err) {
      console.error('[Chat] Message sending failed:', err);
    }

    if (this.socket && this.socket.connected) {
      this.socket.emit('send_message', payload);
    }
  },

  handleIncomingMessage(msg) {
    if (!msg) return;

    const isActiveChannel = this.activeChannel &&
      ((msg.task_id && msg.task_id === this.activeChannel.task_id) ||
       (!msg.task_id && !this.activeChannel.task_id && msg.team_id === this.activeChannel.team_id));

    if (isActiveChannel) {
      if (!this.messages.some(m => m.id === msg.id)) {
        this.messages.push(msg);
        this.renderMessages();
      }
    } else {
      const ch = this.channels.find(c =>
        (msg.task_id && c.task_id === msg.task_id) ||
        (!msg.task_id && !c.task_id && c.team_id === msg.team_id)
      );
      if (ch) {
        ch.unread_count = (ch.unread_count || 0) + 1;
        this.renderChannelList();
      }
      this.unreadTotal++;
      this.updateSidebarUnreadTotal();
    }
  },

  updateSidebarUnreadTotal() {
    const badge = document.getElementById('badge-chat');
    if (badge) {
      const total = this.channels.reduce((sum, c) => sum + (c.unread_count || 0), 0);
      badge.textContent = total;
      badge.style.display = total > 0 ? 'inline-flex' : 'none';
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

window.TaskflowChat = TaskflowChat;
