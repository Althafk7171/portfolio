// Muhammed Althaf K - Portfolio Logic & Interactions
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeroDataVisual();
  initCaseStudyModal();
  initCopyAction();
  handleUrlHash();
});

/* ==========================================================================
   1. NAVIGATION & SCROLL OBSERVER
   ========================================================================== */
function initNavigation() {
  const nav = document.querySelector('.site-nav');
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile drawer toggle
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggleBtn.classList.toggle('open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking a link
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section scrollspy
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   2. HERO DATA VISUAL & RADAR PROFILER
   ========================================================================== */
function initHeroDataVisual() {
  // Render radar chart for Silent Burnout featured visual
  renderFeaturedRadar('featured-radar-svg', 'low');
}

function renderFeaturedRadar(svgId, riskLevel = 'low') {
  const container = document.getElementById(svgId);
  if (!container) return;

  const labels = ["Clicks", "Active Days", "Score Trend", "Stability", "Regularity"];
  let values = [88, 92, 85, 90, 82]; // default low risk
  let strokeColor = "#38bdf8";
  let fillColor = "rgba(56, 189, 248, 0.2)";

  if (riskLevel === 'mod') {
    values = [52, 58, 64, 48, 55];
    strokeColor = "#fbbf24";
    fillColor = "rgba(251, 191, 36, 0.2)";
  } else if (riskLevel === 'high') {
    values = [22, 28, 35, 20, 18];
    strokeColor = "#f43f5e";
    fillColor = "rgba(244, 63, 94, 0.2)";
  }

  const size = 260;
  const center = size / 2;
  const maxRadius = 88;
  const numAxes = labels.length;
  const angleStep = (Math.PI * 2) / numAxes;

  // Build grid rings (25%, 50%, 75%, 100%)
  let gridRingsSvg = '';
  [0.25, 0.5, 0.75, 1.0].forEach(ratio => {
    let rPoints = [];
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = center + Math.cos(angle) * (maxRadius * ratio);
      const y = center + Math.sin(angle) * (maxRadius * ratio);
      rPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    gridRingsSvg += `<polygon points="${rPoints.join(' ')}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" />`;
  });

  // Build axes and labels
  let axesSvg = '';
  let labelsSvg = '';
  for (let i = 0; i < numAxes; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const xEnd = center + Math.cos(angle) * maxRadius;
    const yEnd = center + Math.sin(angle) * maxRadius;
    axesSvg += `<line x1="${center}" y1="${center}" x2="${xEnd.toFixed(1)}" y2="${yEnd.toFixed(1)}" stroke="rgba(255,255,255,0.12)" stroke-dasharray="2,2" />`;

    const xLabel = center + Math.cos(angle) * (maxRadius + 22);
    const yLabel = center + Math.sin(angle) * (maxRadius + 18);
    const anchor = Math.abs(Math.cos(angle)) < 0.2 ? 'middle' : (Math.cos(angle) > 0 ? 'start' : 'end');
    labelsSvg += `<text x="${xLabel.toFixed(1)}" y="${yLabel.toFixed(1)}" fill="#94a3b8" font-size="9" font-family="'JetBrains Mono', monospace" text-anchor="${anchor}" alignment-baseline="middle">${labels[i]}</text>`;
  }

  // Calculate polygon points for data values (scale 0-100)
  const dataPoints = values.map((val, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const r = (val / 100) * maxRadius;
    const x = center + Math.cos(angle) * r;
    const y = center + Math.sin(angle) * r;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  const polygonSvg = `
    <polygon points="${dataPoints.join(' ')}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2" />
    ${values.map((val, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (val / 100) * maxRadius;
      const x = center + Math.cos(angle) * r;
      const y = center + Math.sin(angle) * r;
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="${strokeColor}" />`;
    }).join('')}
  `;

  container.innerHTML = `
    <svg viewBox="0 0 ${size} ${size}" width="100%" height="100%">
      ${gridRingsSvg}
      ${axesSvg}
      ${polygonSvg}
      ${labelsSvg}
    </svg>
  `;
}

/* ==========================================================================
   3. CASE STUDY MODAL ENGINE
   ========================================================================== */
function initCaseStudyModal() {
  const modalBackdrop = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalBackdrop) return;

  // Open modal handler for all triggers
  document.querySelectorAll('[data-open-case-study]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-open-case-study');
      openCaseStudy(projectId);
    });
  });

  // Close handlers
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCaseStudy);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeCaseStudy();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeCaseStudy();
    }
  });
}

function openCaseStudy(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('case-study-modal');
  const content = document.getElementById('case-study-content');
  if (!modal || !content) return;

  const cs = project.caseStudy;

  // Build Pipeline Step Flow HTML
  const pipelineHtml = cs.pipeline.map((item, idx) => `
    <div class="pipeline-node">
      <div class="node-number">${idx + 1}</div>
      <div class="node-content">
        <div class="node-title">${item.step}</div>
        <div class="node-desc">${item.desc}</div>
      </div>
    </div>
  `).join('');

  // Build Results Grid HTML
  const resultsHtml = cs.results.map(r => `
    <div class="result-stat-box">
      <div class="result-stat-val">${r.value}</div>
      <div class="result-stat-lbl">${r.title}</div>
    </div>
  `).join('');

  // Build Technical Work Bullets
  const techWorkHtml = cs.technicalWork.map(w => `
    <li class="timeline-bullet">${w}</li>
  `).join('');

  // Links HTML
  let linksHtml = '';
  if (project.links.live) {
    linksHtml += `
      <a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.85rem;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        Live Demo
      </a>
    `;
  }
  if (project.links.github) {
    linksHtml += `
      <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 0.6rem 1.2rem; font-size: 0.85rem;">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        GitHub Repository
      </a>
    `;
  }

  // Visual Analysis Section Content based on project type
  let visualAnalysisHtml = '';
  if (project.id === 'silent-burnout') {
    visualAnalysisHtml = `
      <div class="analysis-visual-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase;">Behavioral Radar Profiling</span>
          <div style="display: flex; gap: 0.4rem;">
            <button onclick="renderFeaturedRadar('modal-radar-svg', 'low')" class="mono-tag" style="cursor: pointer; padding: 0.2rem 0.5rem; font-size: 0.7rem;">Low Risk</button>
            <button onclick="renderFeaturedRadar('modal-radar-svg', 'mod')" class="mono-tag" style="cursor: pointer; padding: 0.2rem 0.5rem; font-size: 0.7rem;">Moderate</button>
            <button onclick="renderFeaturedRadar('modal-radar-svg', 'high')" class="mono-tag" style="cursor: pointer; padding: 0.2rem 0.5rem; font-size: 0.7rem;">High Risk</button>
          </div>
        </div>
        <div id="modal-radar-svg" style="width: 100%; max-width: 320px; height: 320px; margin: 0 auto;"></div>
        <div class="chart-legend">
          <div class="legend-item"><span class="legend-dot cyan"></span> Low Risk: High regular clicks & timely submissions</div>
          <div class="legend-item"><span class="legend-dot amber"></span> Moderate: Engagement decay</div>
        </div>
      </div>
    `;
  } else if (project.id === 'shopify-analytics') {
    visualAnalysisHtml = `
      <div class="analysis-visual-box">
        <div style="margin-bottom: 1rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase;">Automated 2-Page BI Structure & 9 KPIs</div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1rem;">
          <div style="background: var(--bg-card); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">KPI 01-03</div>
            <div style="font-weight: 700; color: #fff; font-size: 0.9rem; margin-top: 0.2rem;">Net Sales, AOV, Repeat Rate</div>
          </div>
          <div style="background: var(--bg-card); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">KPI 04-06</div>
            <div style="font-weight: 700; color: #fff; font-size: 0.9rem; margin-top: 0.2rem;">CLV, Purchase Frequency, Returns</div>
          </div>
          <div style="background: var(--bg-card); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">KPI 07-09</div>
            <div style="font-weight: 700; color: #fff; font-size: 0.9rem; margin-top: 0.2rem;">Regional Maps, Units, SKU Share</div>
          </div>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-secondary);">Automated ETL transformations execute within Power Query, refreshing star-schema dimension tables and feeding interactive DAX measures.</p>
      </div>
    `;
  } else if (project.id === 'traffic-forecasting') {
    visualAnalysisHtml = `
      <div class="analysis-visual-box">
        <div style="margin-bottom: 1rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase;">Model Benchmarking Protocol</div>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <div><strong style="color: #fff; font-size: 0.9rem;">Gradient Boosting</strong> <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.5rem;">(Ensemble Trees)</span></div>
            <span class="mono-tag" style="color: var(--accent-cyan);">Robust Non-Linear Fit</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <div><strong style="color: #fff; font-size: 0.9rem;">LSTM</strong> <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.5rem;">(Recurrent Neural Net)</span></div>
            <span class="mono-tag" style="color: var(--text-secondary);">Sequential Dependencies</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
            <div><strong style="color: #fff; font-size: 0.9rem;">ARIMA</strong> <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.5rem;">(Statistical Baseline)</span></div>
            <span class="mono-tag" style="color: var(--text-secondary);">Linear Autoregressive</span>
          </div>
        </div>
      </div>
    `;
  } else if (project.id === 'laptop-price') {
    visualAnalysisHtml = `
      <div class="analysis-visual-box">
        <div style="margin-bottom: 1rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase;">Regression Benchmark Metrics</div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
          <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-cyan);">
            <div style="font-size: 2.2rem; font-weight: 800; color: #fff; font-family: var(--font-sans);">0.887</div>
            <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Random Forest R-Squared (R²)</div>
          </div>
          <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-sm); border-left: 3px solid #34d399;">
            <div style="font-size: 2.2rem; font-weight: 800; color: #fff; font-family: var(--font-sans);">0.159</div>
            <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Mean Absolute Error (MAE)</div>
          </div>
        </div>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="case-study-hero">
      <div class="mono-tag" style="margin-bottom: 0.85rem;">${project.date} • Applied Case Study</div>
      <h2 class="case-study-title">${project.title}</h2>
      <div class="case-study-subtitle">${project.subtitle}</div>
      <div class="tech-pills" style="margin-bottom: 1.5rem;">
        ${project.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
      <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
        ${linksHtml}
      </div>
    </div>

    <!-- 1. OVERVIEW -->
    <div class="case-study-section">
      <div class="case-study-heading">1. Overview</div>
      <p class="case-study-text">${cs.overview}</p>
    </div>

    <!-- 2. THE DATA -->
    <div class="case-study-section">
      <div class="case-study-heading">2. The Data</div>
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); padding: 1.25rem; border-radius: var(--radius-md);">
        <strong style="color: #fff; display: block; margin-bottom: 0.35rem; font-size: 0.95rem;">${cs.dataset.name}</strong>
        <p class="case-study-text" style="font-size: 0.9rem;">${cs.dataset.details}</p>
      </div>
    </div>

    <!-- 3. APPROACH PIPELINE -->
    <div class="case-study-section">
      <div class="case-study-heading">3. End-to-End Pipeline</div>
      <div class="pipeline-flow">
        ${pipelineHtml}
      </div>
    </div>

    <!-- 4. TECHNICAL WORK -->
    <div class="case-study-section">
      <div class="case-study-heading">4. Technical Methodology</div>
      <ul class="timeline-bullets" style="padding-left: 0.5rem;">
        ${techWorkHtml}
      </ul>
    </div>

    <!-- 5. RESULTS -->
    <div class="case-study-section">
      <div class="case-study-heading">5. Verified Results & Performance</div>
      <div class="results-stat-grid">
        ${resultsHtml}
      </div>
    </div>

    <!-- 6. VISUAL ANALYSIS -->
    <div class="case-study-section">
      <div class="case-study-heading">6. Visual Analysis & Architecture</div>
      ${visualAnalysisHtml}
    </div>

    <!-- 7. KEY TAKEAWAYS -->
    <div class="key-takeaway-banner">
      <div class="takeaway-title">Candidate Competency Takeaway</div>
      <p class="case-study-text" style="color: var(--text-primary); font-size: 0.92rem;">${cs.keyTakeaway}</p>
    </div>
  `;

  // Render modal radar if silent burnout
  if (project.id === 'silent-burnout') {
    setTimeout(() => renderFeaturedRadar('modal-radar-svg', 'low'), 50);
  }

  // Update URL hash for sharing/deep-linking
  history.replaceState(null, '', `#case-study-${project.id}`);

  // Open modal with smooth fade
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudy() {
  const modal = document.getElementById('case-study-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  // Clear hash without jump
  history.replaceState(null, '', window.location.pathname);
}

function handleUrlHash() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#case-study-')) {
    const projectId = hash.replace('#case-study-', '');
    openCaseStudy(projectId);
  }
}

/* ==========================================================================
   4. UTILITIES (COPY ACTION & TOAST)
   ========================================================================== */
function initCopyAction() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-msg');

  if (copyBtn && toast) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'althafk7171@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        toast.textContent = `✓ Copied "${email}" to clipboard`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 3000);
      }).catch(() => {
        toast.textContent = email;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 3000);
      });
    });
  }
}
