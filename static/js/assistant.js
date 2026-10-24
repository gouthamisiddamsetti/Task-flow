/**
 * Taskflow AI Productivity Assistant Module
 * Handles query execution, pre-configured chips, dynamic response badge rendering,
 * and clean markdown formatting.
 */

const TaskflowAssistant = {
  isQuerying: false,
  isOpen: false,
  isMinimized: false,
  lastResponseText: '',

  init() {
    this.bindChips();
    this.bindInputForm();
    this.bindCornerWidget();
  },

  bindCornerWidget() {
    const launcher = document.getElementById('ai-fab-launcher');
    const closeBtn = document.getElementById('btn-close-corner-ai');
    const minBtn = document.getElementById('btn-min-corner-ai');
    const clearBtn = document.getElementById('btn-clear-corner-ai');
    const copyBtn = document.getElementById('btn-copy-corner-ai');
    const cornerForm = document.getElementById('corner-assistant-form');

    if (launcher) {
      launcher.addEventListener('click', () => this.toggleCornerWidget());
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeCornerWidget());
    }
    if (minBtn) {
      minBtn.addEventListener('click', () => this.toggleMinimize());
    }
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearChat());
    }
    if (copyBtn) {
      copyBtn.addEventListener('click', () => this.copyLastResponse());
    }
    if (cornerForm) {
      cornerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('corner-assistant-input');
        const text = input ? input.value.trim() : '';
        if (text) {
          input.value = '';
          this.submitQuery(text, true);
        }
      });
    }

    // Bind corner chip buttons
    const cornerChips = document.querySelectorAll('.corner-assistant-chip');
    cornerChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const queryText = chip.getAttribute('data-query') || chip.textContent.trim();
        this.submitQuery(queryText, true);
      });
    });
  },

  toggleCornerWidget() {
    const widget = document.getElementById('ai-corner-widget');
    if (!widget) return;
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      widget.classList.add('open');
      const input = document.getElementById('corner-assistant-input');
      if (input) setTimeout(() => input.focus(), 150);
    } else {
      widget.classList.remove('open');
    }
  },

  openCornerWidget() {
    const widget = document.getElementById('ai-corner-widget');
    if (!widget) return;
    this.isOpen = true;
    widget.classList.add('open');
    const input = document.getElementById('corner-assistant-input');
    if (input) setTimeout(() => input.focus(), 150);
  },

  closeCornerWidget() {
    const widget = document.getElementById('ai-corner-widget');
    if (!widget) return;
    this.isOpen = false;
    widget.classList.remove('open');
  },

  toggleMinimize() {
    const widget = document.getElementById('ai-corner-widget');
    if (!widget) return;
    this.isMinimized = !this.isMinimized;
    if (this.isMinimized) {
      widget.classList.add('minimized');
    } else {
      widget.classList.remove('minimized');
    }
  },

  clearChat() {
    const stream = document.getElementById('corner-chat-stream');
    if (stream) {
      stream.innerHTML = `
        <div class="ai-bubble-bot">
          👋 Hi there! I am your AI Copilot. Ask me about sprint velocity, blocker diagnosis, weekly status drafts, or deliverable decompositions.
        </div>
      `;
    }
    const responseContainer = document.getElementById('assistant-response');
    if (responseContainer) {
      responseContainer.innerHTML = '<p class="md-p">Conversation cleared. Ask me anything to begin again.</p>';
    }
  },

  copyLastResponse() {
    if (!this.lastResponseText) return;
    navigator.clipboard?.writeText(this.lastResponseText).then(() => {
      const copyBtn = document.getElementById('btn-copy-corner-ai');
      if (copyBtn) {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '✓';
        setTimeout(() => { copyBtn.innerHTML = originalText; }, 1800);
      }
    }).catch(err => {
      console.warn('Clipboard copy error:', err);
    });
  },

  bindChips() {
    const chips = document.querySelectorAll('.assistant-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const queryText = chip.getAttribute('data-query') || chip.textContent.trim();
        const inputEl = document.getElementById('assistant-input');
        if (inputEl) inputEl.value = queryText;
        this.submitQuery(queryText, false);
      });
    });
  },

  bindInputForm() {
    const form = document.getElementById('assistant-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputEl = document.getElementById('assistant-input');
        const text = inputEl ? inputEl.value.trim() : '';
        if (text) {
          this.submitQuery(text, false);
        }
      });
    }
  },

  async submitQuery(queryText, isCornerWidget = false) {
    if (this.isQuerying || !queryText) return;
    this.isQuerying = true;

    const responseContainer = document.getElementById('assistant-response');
    const badgeEl = document.getElementById('assistant-model-badge');
    const submitBtn = document.getElementById('assistant-submit-btn');
    const cornerStream = document.getElementById('corner-chat-stream');

    if (badgeEl) badgeEl.style.display = 'none';

    // If corner widget, append user question bubble
    if (cornerStream) {
      const userBubble = document.createElement('div');
      userBubble.className = 'ai-bubble-user';
      userBubble.textContent = queryText;
      cornerStream.appendChild(userBubble);

      const loadingBot = document.createElement('div');
      loadingBot.className = 'ai-bubble-bot ai-loading-indicator';
      loadingBot.innerHTML = `
        <div class="assistant-loading">
          <div class="loading-spinner"></div>
          <span>Analyzing team workspace and synthesizing insights...</span>
        </div>
      `;
      cornerStream.appendChild(loadingBot);
      cornerStream.scrollTop = cornerStream.scrollHeight;
    }

    if (responseContainer && !isCornerWidget) {
      responseContainer.innerHTML = `
        <div class="assistant-loading">
          <div class="loading-spinner"></div>
          <span>Analyzing team workspace and synthesizing insights...</span>
        </div>
      `;
    }

    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await fetch('/api/assistant/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: queryText })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Assistant service failed.');
      }

      const rawResponse = data.response || 'No response generated.';
      this.lastResponseText = rawResponse;

      // Update badge
      if (badgeEl) {
        badgeEl.textContent = data.model_badge || (data.source === 'ai' ? '🤖 AI-Generated' : '⚡ Rule-Based Summary');
        badgeEl.className = `model-badge badge-${data.source || 'rule_based'}`;
        badgeEl.style.display = 'inline-flex';
      }

      // Render markdown response in sidebar widget
      if (responseContainer) {
        responseContainer.innerHTML = this.renderMarkdown(rawResponse);
      }

      // Remove loading indicator and append bot response in corner stream
      if (cornerStream) {
        const loadingIndicator = cornerStream.querySelector('.ai-loading-indicator');
        if (loadingIndicator) loadingIndicator.remove();

        const botBubble = document.createElement('div');
        botBubble.className = 'ai-bubble-bot';
        botBubble.innerHTML = `
          <div style="font-size: 11px; margin-bottom: 6px; color: var(--color-brand-primary); font-weight: 700;">
            ${data.source === 'ai' ? '🤖 AI Copilot' : '⚡ System Insights'}
          </div>
          <div>${this.renderMarkdown(rawResponse)}</div>
          <div style="margin-top: 10px; display: flex; gap: 8px;">
            <button type="button" class="btn btn-sm" onclick="window.TaskflowAssistant.copyLastResponse()" style="padding: 3px 8px; font-size: 11px;">
              📋 Copy
            </button>
            <button type="button" class="btn btn-sm primary" onclick="document.getElementById('modal-add-task').showModal()" style="padding: 3px 8px; font-size: 11px;">
              ➕ New Deliverable
            </button>
          </div>
        `;
        cornerStream.appendChild(botBubble);
        cornerStream.scrollTop = cornerStream.scrollHeight;
      }
    } catch (err) {
      console.error('Assistant query error:', err);
      if (cornerStream) {
        const loadingIndicator = cornerStream.querySelector('.ai-loading-indicator');
        if (loadingIndicator) loadingIndicator.remove();

        const errBubble = document.createElement('div');
        errBubble.className = 'ai-bubble-bot';
        errBubble.innerHTML = `<span style="color: var(--color-error-solid);">⚠️ Processing error. Please retry.</span>`;
        cornerStream.appendChild(errBubble);
      }
      if (responseContainer && !isCornerWidget) {
        responseContainer.innerHTML = `
          <div class="assistant-error" style="color: var(--color-error-solid); font-size: 13px;">
            ⚠️ Unable to process query. Please check your connectivity and try again.
          </div>
        `;
      }
    } finally {
      this.isQuerying = false;
      if (submitBtn) submitBtn.disabled = false;
    }
  },

  renderMarkdown(text) {
    if (!text) return '';

    let out = text;

    // Headings
    out = out.replace(/^### (.*$)/gim, '<h4 class="md-h4">$1</h4>');
    out = out.replace(/^## (.*$)/gim, '<h3 class="md-h3">$1</h3>');
    out = out.replace(/^# (.*$)/gim, '<h2 class="md-h2">$1</h2>');

    // Bold & italic
    out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Inline code
    out = out.replace(/`([^`]+)`/g, '<code class="md-code">$1</code>');

    // Blockquotes
    out = out.replace(/^> (.*$)/gim, '<blockquote class="md-quote">$1</blockquote>');

    // Bullet lists
    out = out.replace(/^\s*-\s+(.*$)/gim, '<li class="md-li">$1</li>');
    out = out.replace(/((?:<li class="md-li">.*?<\/li>\s*)+)/gis, '<ul class="md-ul">$1</ul>');

    // Numbered lists
    out = out.replace(/^\s*\d+\.\s+(.*$)/gim, '<li class="md-oli">$1</li>');
    out = out.replace(/((?:<li class="md-oli">.*?<\/li>\s*)+)/gis, '<ol class="md-ol">$1</ol>');

    // Paragraph breaks
    out = out.replace(/\n\n+/g, '</p><p class="md-p">');
    out = `<p class="md-p">${out}</p>`;

    // Clean up empty paragraphs
    out = out.replace(/<p class="md-p">\s*<\/p>/g, '');
    out = out.replace(/<p class="md-p">(<h[234]>)/g, '$1');
    out = out.replace(/(<\/h[234]>)<\/p>/g, '$1');
    out = out.replace(/<p class="md-p">(<(?:ul|ol|blockquote)>)/g, '$1');
    out = out.replace(/(<\/(?:ul|ol|blockquote)>)<\/p>/g, '$1');

    return out;
  }
};

window.TaskflowAssistant = TaskflowAssistant;
