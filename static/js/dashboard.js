/**
 * Taskflow Dashboard & Widgets Module
 * Controls metric summaries, SVG donut chart, mini calendar, and navigation tabs.
 */

const TaskflowDashboard = {
  activeView: 'overview',
  statsData: null,
  activeChartTab: 'velocity',

  init() {
    this.initTabs();
    this.initCursorSpotlight();
    this.initChartTabs();
  },

  initCursorSpotlight() {
    document.addEventListener('mousemove', (e) => {
      const targetCard = e.target.closest('.interactive-card, .metric, .cat-card, .donut-card, .ai-assistant-card');
      if (!targetCard) return;

      const rect = targetCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      targetCard.style.setProperty('--mouse-x', `${x}px`);
      targetCard.style.setProperty('--mouse-y', `${y}px`);

      // Gentle interactive 3D tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3.5;
      const rotateY = ((x - centerX) / centerX) * 3.5;
      targetCard.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
    });

    document.addEventListener('mouseout', (e) => {
      const targetCard = e.target.closest('.interactive-card, .metric, .cat-card, .donut-card, .ai-assistant-card');
      if (targetCard && (!e.relatedTarget || !targetCard.contains(e.relatedTarget))) {
        targetCard.style.transform = '';
      }
    });
  },

  initChartTabs() {
    const tabs = document.querySelectorAll('.chart-tab-pill');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeChartTab = tab.getAttribute('data-chart') || 'velocity';
        this.renderOverviewCharts();
      });
    });

    // Redraw on window resize
    window.addEventListener('resize', () => {
      if (this.activeView === 'overview') {
        this.renderOverviewCharts();
      }
    });
  },

  async fetchStats(teamId = null) {
    try {
      const url = teamId ? `/api/dashboard/stats?team_id=${teamId}` : '/api/dashboard/stats';
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      this.statsData = data;
      this.renderMetrics(data);
      this.renderDonutChart(data);
      this.renderOverviewCharts();
      return data;
    } catch (err) {
      console.error('Failed to fetch stats:', err);
      return null;
    }
  },

  renderMetrics(stats) {
    if (!stats) return;

    const totalEl = document.getElementById('stat-total');
    const inProgEl = document.getElementById('stat-in-progress');
    const compEl = document.getElementById('stat-completed');
    const overdueEl = document.getElementById('stat-overdue');

    if (totalEl) totalEl.textContent = stats.total ?? 0;
    if (inProgEl) inProgEl.textContent = stats.in_progress ?? 0;
    if (compEl) compEl.textContent = stats.completed ?? 0;
    if (overdueEl) overdueEl.textContent = stats.overdue ?? 0;

    // Sidebar counter badges
    const badgeTotal = document.getElementById('badge-total');
    if (badgeTotal) badgeTotal.textContent = stats.total ?? 0;

    const badgeReview = document.getElementById('badge-review');
    if (badgeReview) badgeReview.textContent = stats.in_review ?? 0;
  },

  renderDonutChart(stats) {
    const total = stats?.total || 0;
    const completed = stats?.completed || 0;
    const inProgress = stats?.in_progress || 0;
    const inReview = stats?.in_review || 0;
    const overdue = stats?.overdue || 0;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    const pctEl = document.getElementById('donut-percentage');
    if (pctEl) {
      pctEl.textContent = `${percentage}%`;
    }

    const circleEl = document.getElementById('donut-circle-progress');
    if (circleEl) {
      // Circumference for r=40 is ~251.32
      const circumference = 2 * Math.PI * 40;
      const offset = circumference - (percentage / 100) * circumference;
      circleEl.style.strokeDasharray = `${circumference}`;
      circleEl.style.strokeDashoffset = `${offset}`;
    }

    // Update legend values if present
    const legComp = document.getElementById('leg-completed');
    if (legComp) legComp.textContent = completed;
    const legProg = document.getElementById('leg-progress');
    if (legProg) legProg.textContent = inProgress;
    const legReview = document.getElementById('leg-review');
    if (legReview) legReview.textContent = inReview;
    const legOverdue = document.getElementById('leg-overdue');
    if (legOverdue) legOverdue.textContent = overdue;
  },

  renderMiniCalendar(tasks) {
    const calEl = document.getElementById('mini-calendar-days');
    const monthTitle = document.getElementById('mini-calendar-title');
    if (!calEl) return;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    if (monthTitle) {
      monthTitle.textContent = `${monthNames[month]} ${year}`;
    }

    // Set of dates that have tasks due
    const taskDates = new Set();
    if (Array.isArray(tasks)) {
      tasks.forEach(t => {
        if (t.due_date) {
          const dateStr = t.due_date.substring(0, 10);
          taskDates.add(dateStr);
        }
      });
    }

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const todayDate = now.getDate();

    let html = '';
    // Empty cells before month starts
    for (let i = 0; i < firstDay; i++) {
      html += `<div class="cal-day cal-empty"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = d === todayDate;
      const monthStr = String(month + 1).padStart(2, '0');
      const dayStr = String(d).padStart(2, '0');
      const isoDate = `${year}-${monthStr}-${dayStr}`;
      const hasTask = taskDates.has(isoDate);

      let classes = ['cal-day'];
      if (isToday) classes.push('cal-today');
      if (hasTask) classes.push('cal-has-task');

      html += `
        <div class="${classes.join(' ')}" data-date="${isoDate}" title="${hasTask ? 'Deliverable deadline' : ''}">
          <span>${d}</span>
          ${hasTask ? '<span class="cal-dot"></span>' : ''}
        </div>
      `;
    }

    calEl.innerHTML = html;

    // Click handler on calendar day to filter tasks
    calEl.querySelectorAll('.cal-day[data-date]').forEach(day => {
      day.addEventListener('click', () => {
        const date = day.getAttribute('data-date');
        calEl.querySelectorAll('.cal-day').forEach(el => el.classList.remove('cal-selected'));
        day.classList.add('cal-selected');
        if (window.TaskflowTasks) {
          window.TaskflowTasks.filterByDate(date);
        }
      });
    });
  },

  initTabs() {
    const navLinks = document.querySelectorAll('.sidebar nav a[data-target]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        this.switchView(target);
      });
    });
  },

  switchView(viewName) {
    this.activeView = viewName;

    // Update active nav link
    document.querySelectorAll('.sidebar nav a').forEach(a => {
      if (a.getAttribute('data-target') === viewName) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      } else {
        a.classList.remove('active');
        a.removeAttribute('aria-current');
      }
    });

    // Toggle main view sections
    document.querySelectorAll('[data-view]').forEach(sec => {
      sec.hidden = sec.getAttribute('data-view') !== viewName;
    });

    // Update shell attribute for sidebar/right layout
    const shell = document.getElementById('app-shell');
    if (shell) {
      shell.setAttribute('data-active-view', viewName);
    }

    // View specific initialization
    if (viewName === 'overview' || viewName === 'my-tasks') {
      if (window.TaskflowTasks) {
        window.TaskflowTasks.applyFilters();
      }
    } else if (viewName === 'review-pipeline') {
      if (window.TaskflowTasks) {
        window.TaskflowTasks.renderReviewPipeline();
      }
    } else if (viewName === 'categories') {
      this.renderCategoriesView();
    } else if (viewName === 'team') {
      this.renderTeamView();
    } else if (viewName === 'calendar') {
      this.renderFullCalendarView();
    } else if (viewName === 'settings') {
      this.renderSettingsView();
    } else if (viewName === 'chat') {
      if (window.TaskflowChat) {
        window.TaskflowChat.loadChannels();
      }
    } else if (viewName === 'attendance') {
      if (window.TaskflowAttendance) {
        window.TaskflowAttendance.fetchTodayStatus();
        window.TaskflowAttendance.fetchLeaves();
        window.TaskflowAttendance.fetchPresenceMap();
      }
    }
  },

  renderCategoriesView() {
    const container = document.getElementById('categories-container');
    if (!container || !window.TaskflowTasks) return;

    const tasks = window.TaskflowTasks.allTasks || [];
    const catMap = {};

    tasks.forEach(t => {
      const cat = t.category || 'General';
      if (!catMap[cat]) catMap[cat] = { total: 0, completed: 0, inReview: 0, inProgress: 0 };
      catMap[cat].total++;
      if (t.completed || t.status === 'Completed') catMap[cat].completed++;
      else if (t.status === 'In Review') catMap[cat].inReview++;
      else catMap[cat].inProgress++;
    });

    let html = '';
    Object.keys(catMap).sort().forEach(cat => {
      const data = catMap[cat];
      const pct = data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0;
      html += `
        <div class="cat-card">
          <div class="flex-between">
            <span class="pill c-${cat}">${cat}</span>
            <span class="text-sm font-semibold">${data.completed}/${data.total} Closed</span>
          </div>
          <div class="cat-bar-wrap">
            <div class="cat-bar" style="width: ${pct}%"></div>
          </div>
          <div class="cat-stats">
            <span>${pct}% Completed</span>
            <span>${data.inProgress} In Flight</span>
          </div>
        </div>
      `;
    });

    container.innerHTML = html || '<p class="empty">No category data available.</p>';
  },

  async renderTeamView() {
    const container = document.getElementById('team-members-container');
    if (!container) return;

    try {
      const res = await fetch('/api/teams/members');
      if (!res.ok) return;
      const data = await res.json();
      const members = data.members || [];

      let html = '';
      members.forEach(m => {
        const initials = (m.username || m.name || 'M').substring(0, 2).toUpperCase();
        html += `
          <div class="card member-card">
            <div class="member-head">
              <div class="avatar">${initials}</div>
              <div>
                <h4 style="margin: 0; font-size: 15px;">${m.username || m.name}</h4>
                <span class="text-sm text-muted">${m.email}</span>
              </div>
              <span class="role-badge role-${m.role}" style="margin-left: auto;">${m.role}</span>
            </div>
            <div class="member-meta" style="margin-top: 12px; font-size: 13px; color: var(--color-text-muted);">
              <span>Squad: <b>${m.team_name || 'Unassigned'}</b></span>
            </div>
          </div>
        `;
      });
      container.innerHTML = html || '<p class="empty">No team members found.</p>';
    } catch (err) {
      console.error('Failed to load team view:', err);
    }
  },

  fullCalDate: new Date(),

  initCalendarControls() {
    const prevBtn = document.getElementById('btn-cal-prev');
    const nextBtn = document.getElementById('btn-cal-next');
    const todayBtn = document.getElementById('btn-cal-today');

    if (prevBtn && !prevBtn._bound) {
      prevBtn._bound = true;
      prevBtn.addEventListener('click', () => {
        this.fullCalDate.setMonth(this.fullCalDate.getMonth() - 1);
        this.renderFullCalendarView();
      });
    }

    if (nextBtn && !nextBtn._bound) {
      nextBtn._bound = true;
      nextBtn.addEventListener('click', () => {
        this.fullCalDate.setMonth(this.fullCalDate.getMonth() + 1);
        this.renderFullCalendarView();
      });
    }

    if (todayBtn && !todayBtn._bound) {
      todayBtn._bound = true;
      todayBtn.addEventListener('click', () => {
        this.fullCalDate = new Date();
        this.renderFullCalendarView();
      });
    }
  },

  renderFullCalendarView() {
    this.initCalendarControls();
    const container = document.getElementById('calendar-full-view');
    const titleEl = document.getElementById('full-calendar-month-title');
    if (!container) return;

    const currentYear = this.fullCalDate.getFullYear();
    const currentMonth = this.fullCalDate.getMonth();

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    if (titleEl) {
      titleEl.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    }

    const tasks = window.TaskflowTasks?.allTasks || [];

    // Group tasks by ISO date YYYY-MM-DD
    const tasksByDate = {};
    tasks.forEach(t => {
      if (t.due_date) {
        const d = t.due_date.substring(0, 10);
        if (!tasksByDate[d]) tasksByDate[d] = [];
        tasksByDate[d].push(t);
      }
    });

    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay(); // 0 is Sunday
    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

    const todayIso = new Date().toISOString().substring(0, 10);

    let html = '';

    // Previous month padding days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const dayNum = daysInPrevMonth - i;
      html += `
        <div class="full-cal-day other-month">
          <div class="full-cal-day-head">
            <span class="full-cal-date-num">${dayNum}</span>
          </div>
        </div>
      `;
    }

    // Current month days
    for (let d = 1; d <= daysInCurrentMonth; d++) {
      const monthStr = String(currentMonth + 1).padStart(2, '0');
      const dayStr = String(d).padStart(2, '0');
      const isoDate = `${currentYear}-${monthStr}-${dayStr}`;
      const dayTasks = tasksByDate[isoDate] || [];
      const isToday = isoDate === todayIso;

      let tasksHtml = '';
      dayTasks.forEach(task => {
        const priorityClass = `p-${task.priority || 'Medium'}`;
        const escapedTitle = this.escapeHtml(task.title || '');
        tasksHtml += `
          <div class="full-cal-task-pill ${priorityClass}" onclick="event.stopPropagation(); window.TaskflowTasks.viewTaskDetail(${task.id})" title="${escapedTitle} (${this.escapeHtml(task.priority || 'Medium')})">
            <span>●</span>
            <span style="overflow: hidden; text-overflow: ellipsis;">${escapedTitle}</span>
          </div>
        `;
      });

      html += `
        <div class="full-cal-day ${isToday ? 'today' : ''}" onclick="window.TaskflowDashboard.onCalendarDayClick('${isoDate}')" title="Click to filter overview by ${isoDate}">
          <div class="full-cal-day-head">
            <span class="full-cal-date-num">${d}</span>
            ${dayTasks.length > 0 ? `<span class="full-cal-count-badge">${dayTasks.length} due</span>` : ''}
          </div>
          <div class="full-cal-tasks">
            ${tasksHtml}
          </div>
        </div>
      `;
    }

    // Next month padding days to complete 7-column grid rows
    const totalRendered = firstDayIndex + daysInCurrentMonth;
    const remaining = (7 - (totalRendered % 7)) % 7;
    for (let d = 1; d <= remaining; d++) {
      html += `
        <div class="full-cal-day other-month">
          <div class="full-cal-day-head">
            <span class="full-cal-date-num">${d}</span>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
  },

  onCalendarDayClick(isoDate) {
    if (window.TaskflowTasks) {
      window.TaskflowTasks.filterByDate(isoDate);
      this.switchView('overview');
    }
  },

  renderOverviewCharts() {
    const canvas = document.getElementById('overview-analytics-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI display scaling
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 680;
    const height = rect.height || 240;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    if (this.activeChartTab === 'velocity') {
      this.drawVelocityChart(ctx, width, height);
    } else if (this.activeChartTab === 'category') {
      this.drawCategoryChart(ctx, width, height);
    } else if (this.activeChartTab === 'trend') {
      this.drawTrendChart(ctx, width, height);
    }
  },

  drawVelocityChart(ctx, width, height) {
    const stats = this.statsData || { completed: 8, in_progress: 5, in_review: 3, overdue: 2, total: 18 };
    const items = [
      { label: 'Completed', val: stats.completed || 0, colorStart: '#10B981', colorEnd: '#059669' },
      { label: 'In Progress', val: stats.in_progress || 0, colorStart: '#0284C7', colorEnd: '#0369A1' },
      { label: 'In Review', val: stats.in_review || 0, colorStart: '#A855F7', colorEnd: '#7E22CE' },
      { label: 'Overdue Risk', val: stats.overdue || 0, colorStart: '#EF4444', colorEnd: '#DC2626' }
    ];

    const maxVal = Math.max(...items.map(i => i.val), 5);
    const padding = { top: 30, right: 30, bottom: 40, left: 50 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // Background horizontal grid lines
    ctx.strokeStyle = 'rgba(150, 150, 150, 0.15)';
    ctx.lineWidth = 1;
    const gridSteps = 4;
    for (let i = 0; i <= gridSteps; i++) {
      const y = padding.top + (chartH / gridSteps) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      const stepVal = Math.round(maxVal - (maxVal / gridSteps) * i);
      ctx.fillStyle = 'rgba(150, 150, 150, 0.7)';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(stepVal.toString(), padding.left - 10, y + 4);
    }

    // Draw bars
    const barWidth = Math.min(54, (chartW / items.length) * 0.55);
    const spacing = chartW / items.length;

    items.forEach((item, idx) => {
      const barH = (item.val / maxVal) * chartH;
      const x = padding.left + spacing * idx + (spacing - barWidth) / 2;
      const y = padding.top + chartH - barH;

      // Gradient fill
      const grad = ctx.createLinearGradient(x, y, x, y + barH);
      grad.addColorStop(0, item.colorStart);
      grad.addColorStop(1, item.colorEnd);

      ctx.fillStyle = grad;
      // Rounded top bar
      const radius = 6;
      ctx.beginPath();
      ctx.moveTo(x, y + barH);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.lineTo(x + barWidth - radius, y);
      ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + radius);
      ctx.lineTo(x + barWidth, y + barH);
      ctx.closePath();
      ctx.fill();

      // Top count label
      ctx.fillStyle = item.colorStart;
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(item.val.toString(), x + barWidth / 2, y - 8);

      // Bottom category label
      ctx.fillStyle = 'rgba(140, 140, 150, 0.9)';
      ctx.font = '11px sans-serif';
      ctx.fillText(item.label, x + barWidth / 2, padding.top + chartH + 20);
    });
  },

  drawCategoryChart(ctx, width, height) {
    const tasks = window.TaskflowTasks?.allTasks || [];
    const catMap = { Frontend: 0, Backend: 0, Database: 0, Design: 0, Meetings: 0 };
    tasks.forEach(t => {
      const cat = t.category || 'Backend';
      catMap[cat] = (catMap[cat] || 0) + 1;
    });

    const categories = [
      { name: 'Backend', count: catMap.Backend || 1, color: '#8B5CF6' },
      { name: 'Frontend', count: catMap.Frontend || 1, color: '#0EA5E9' },
      { name: 'Database', count: catMap.Database || 1, color: '#10B981' },
      { name: 'Design', count: catMap.Design || 1, color: '#EC4899' },
      { name: 'Meetings', count: catMap.Meetings || 1, color: '#F59E0B' }
    ];

    const total = categories.reduce((sum, c) => sum + c.count, 0) || 1;
    const centerX = width * 0.38;
    const centerY = height * 0.5;
    const outerRadius = Math.min(centerX, centerY) - 20;
    const innerRadius = outerRadius * 0.58;

    let startAngle = -Math.PI / 2;

    categories.forEach(cat => {
      const sliceAngle = (cat.count / total) * (Math.PI * 2);
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, startAngle, startAngle + sliceAngle);
      ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = cat.color;
      ctx.fill();
      startAngle += sliceAngle;
    });

    // Center metric
    ctx.fillStyle = 'rgba(150, 150, 150, 0.9)';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Total Tasks', centerX, centerY - 6);

    ctx.fillStyle = '#10B981';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(total.toString(), centerX, centerY + 18);

    // Right Legend
    const legendX = width * 0.65;
    let legendY = height * 0.22;
    categories.forEach(cat => {
      const pct = Math.round((cat.count / total) * 100);
      ctx.fillStyle = cat.color;
      ctx.beginPath();
      ctx.arc(legendX, legendY, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(150, 150, 150, 0.9)';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`${cat.name} (${cat.count} • ${pct}%)`, legendX + 14, legendY + 4);
      legendY += 28;
    });
  },

  drawTrendChart(ctx, width, height) {
    const padding = { top: 30, right: 30, bottom: 40, left: 45 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // Past 7 days data
    const days = [];
    const points = [2, 5, 4, 7, 6, 9, 8];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push(d.toLocaleDateString('en-US', { weekday: 'short' }));
    }

    const maxVal = Math.max(...points, 10);

    // Background horizontal grid
    ctx.strokeStyle = 'rgba(150, 150, 150, 0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
    }

    // Calculate coordinate points
    const stepX = chartW / (points.length - 1);
    const coords = points.map((val, idx) => ({
      x: padding.left + stepX * idx,
      y: padding.top + chartH - (val / maxVal) * chartH
    }));

    // Area Gradient Fill
    const areaGrad = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
    areaGrad.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
    areaGrad.addColorStop(1, 'rgba(16, 185, 129, 0.01)');

    ctx.beginPath();
    ctx.moveTo(coords[0].x, padding.top + chartH);
    coords.forEach(pt => ctx.lineTo(pt.x, pt.y));
    ctx.lineTo(coords[coords.length - 1].x, padding.top + chartH);
    ctx.closePath();
    ctx.fillStyle = areaGrad;
    ctx.fill();

    // Curved Line Stroke
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(coords[0].x, coords[0].y);
    for (let i = 0; i < coords.length - 1; i++) {
      const xc = (coords[i].x + coords[i + 1].x) / 2;
      const yc = (coords[i].y + coords[i + 1].y) / 2;
      ctx.quadraticCurveTo(coords[i].x, coords[i].y, xc, yc);
    }
    ctx.lineTo(coords[coords.length - 1].x, coords[coords.length - 1].y);
    ctx.stroke();

    // Data points & day labels
    coords.forEach((pt, idx) => {
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = 'rgba(150, 150, 150, 0.9)';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(days[idx], pt.x, padding.top + chartH + 20);
    });
  },

  async uploadAvatar(file) {
    if (!file) return;
    const formData = new FormData();
    formData.append('avatar', file);

    try {
      const res = await fetch('/api/auth/avatar', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Failed to upload profile picture.');
        return;
      }

      if (window.TaskflowAuth) {
        window.TaskflowAuth.currentUser = data.user;
        window.TaskflowAuth.updateTopBar(data.user);
      }
      this.renderSettingsView();
    } catch (err) {
      console.error('Avatar upload failed:', err);
      alert('Network error while uploading profile photo.');
    }
  },

  async renderSettingsView() {
    let user = window.TaskflowAuth?.currentUser;
    if (!user) {
      user = await window.TaskflowAuth?.getCurrentUser();
    }
    if (!user) return;

    const nameInput = document.getElementById('settings-name');
    const emailInput = document.getElementById('settings-email');
    const bioInput = document.getElementById('settings-bio');
    const themeSelect = document.getElementById('settings-theme');
    const displayName = document.getElementById('settings-display-name');
    const roleBadge = document.getElementById('settings-role-badge');
    const teamBadge = document.getElementById('settings-team-badge');
    const squadDisplay = document.getElementById('settings-squad-display');
    const avatarContainer = document.getElementById('settings-avatar-container');

    const nameVal = user.name || user.username || '';
    if (nameInput) nameInput.value = nameVal;
    if (emailInput) emailInput.value = user.email || '';
    if (bioInput) bioInput.value = user.bio || '';
    if (themeSelect) themeSelect.value = user.theme_preference || 'light';
    if (displayName) displayName.textContent = nameVal;
    if (roleBadge) {
      roleBadge.textContent = user.role || 'Member';
      roleBadge.className = `role-badge role-${user.role || 'Member'}`;
    }
    if (teamBadge) teamBadge.textContent = user.team_name ? `Squad: ${user.team_name}` : 'Unassigned Squad';
    if (squadDisplay) squadDisplay.value = user.team_name || 'Unassigned Squad';

    if (avatarContainer) {
      if (user.avatar_url) {
        avatarContainer.innerHTML = `<img src="${user.avatar_url}" class="profile-avatar-img" alt="Profile">`;
      } else {
        const initials = (nameVal || 'U').substring(0, 2).toUpperCase();
        avatarContainer.innerHTML = `<div class="profile-avatar-fallback">${initials}</div>`;
      }
    }

    // Highlight selected theme card
    const currentTheme = user.theme_preference || 'light';
    document.querySelectorAll('.theme-choice-card').forEach(card => {
      if (card.getAttribute('data-theme-name') === currentTheme) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });
  },

  selectTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('taskflow_theme', themeName);

    const themeSelect = document.getElementById('settings-theme');
    if (themeSelect) themeSelect.value = themeName;

    document.querySelectorAll('.theme-choice-card').forEach(card => {
      if (card.getAttribute('data-theme-name') === themeName) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });
  },

  async saveSettings() {
    const nameInput = document.getElementById('settings-name');
    const bioInput = document.getElementById('settings-bio');
    const themeSelect = document.getElementById('settings-theme');
    const statusMsg = document.getElementById('settings-status-msg');
    const saveBtn = document.getElementById('btn-save-settings');

    const newName = nameInput?.value.trim();
    const newBio = bioInput?.value.trim();
    const newTheme = themeSelect?.value || 'light';

    if (!newName) {
      alert('Full name cannot be blank.');
      return;
    }

    if (saveBtn) saveBtn.disabled = true;

    try {
      const res = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newName,
          bio: newBio,
          theme_preference: newTheme
        })
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Failed to update preferences.');
        return;
      }

      // Update current user cache
      const updatedUser = data.user || {};
      if (window.TaskflowAuth) {
        window.TaskflowAuth.currentUser = updatedUser;
        window.TaskflowAuth.updateTopBar(updatedUser);
      }

      // Apply theme to document
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('taskflow_theme', newTheme);

      // Refresh settings profile header
      this.renderSettingsView();

      if (statusMsg) {
        statusMsg.style.display = 'inline';
        statusMsg.style.color = 'var(--color-brand-primary)';
        statusMsg.textContent = 'Profile preferences updated successfully!';
        setTimeout(() => {
          statusMsg.style.display = 'none';
        }, 3000);
      }
    } catch (err) {
      console.error('Failed to save preferences:', err);
      alert('Network error while saving preferences.');
    } finally {
      if (saveBtn) saveBtn.disabled = false;
    }
  },

  async changePassword() {
    const curPw = document.getElementById('settings-current-password');
    const newPw = document.getElementById('settings-new-password');
    const msgEl = document.getElementById('password-status-msg');

    if (!curPw?.value || !newPw?.value) {
      alert('Please fill out both password fields.');
      return;
    }

    try {
      const res = await fetch('/api/auth/password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          current_password: curPw.value,
          new_password: newPw.value
        })
      });

      const data = await res.json();
      if (!res.ok) {
        if (msgEl) {
          msgEl.style.display = 'inline';
          msgEl.style.color = 'var(--color-error-solid)';
          msgEl.textContent = data.error || 'Failed to update password.';
        }
        return;
      }

      curPw.value = '';
      newPw.value = '';
      if (msgEl) {
        msgEl.style.display = 'inline';
        msgEl.style.color = 'var(--color-brand-primary)';
        msgEl.textContent = 'Password updated successfully!';
        setTimeout(() => {
          msgEl.style.display = 'none';
        }, 3000);
      }
    } catch (err) {
      console.error('Error changing password:', err);
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

window.TaskflowDashboard = TaskflowDashboard;
