const projects = [
  {
    number: '01',
    badge: '🚀 Featured Project',
    title: 'NewsOrbit - Global News Dashboard',
    description: 'NewsOrbit is a modern AI-powered news platform that delivers real-time headlines from around the world in one place. It features country-wise news coverage, trending stories, and intelligent AI-generated summaries for faster reading. Users can quickly explore the latest updates across multiple categories without information overload. NewsOrbit makes staying informed faster, smarter, and more engaging with real-time global news.',
    image: 'images/projects/project-1.svg',
    tags: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
    articleClass: 'project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ff2a2a]/40',
    actions: [
      { label: 'Code', href: 'https://github.com/satyarevanth666-debug/NewsOrbit-', icon: true, className: 'inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-black' },
      { label: 'Live Demo →', href: 'https://news-orbit-frontend.vercel.app/', className: 'inline-flex items-center gap-2 rounded-full bg-[#ff2a2a] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#ff4a4a]' }
    ]
  },
  {
    number: '02',
    badge: '🚀 Featured Project',
    title: 'Habit Tracker - Track Your Daily Habits',
    description: 'Habit Tracker is a modern web application designed to help users to maintain productive daily habits.Users can create, update, and track multiple habits from a simple and intuitive dashboard.The application provides streak tracking and progress insights to maintain consistency.Its responsive design ensures a smooth experience across all devices.By visualizing daily achievements, it helps users stay motivated and achieve personal goals.',
    image: 'images/projects/project-2.svg',
    tags: ['HTML', 'CSS', 'JavaScript', 'React + Vite'],
    articleClass: 'project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ff2a2a]/30',
    actions: [
      { label: 'Code', href: 'https://github.com/satyarevanth666-debug/Habit-Tracker', icon: true, className: 'inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-black' },
      { label: 'Live Demo →', href: 'https://habit-flow-habit-tracker-and-streak-nine.vercel.app/', className: 'inline-flex items-center gap-2 rounded-full bg-[#ff2a2a] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#ff4a4a]' }
    ]
  },
  {
    number: '03',
    badge: '🚀 Featured Project',
    title: 'Minesweeper Master - Interactive Puzzle Game',
    description: 'Minesweeper Master is an interactive puzzle game that challenges players to uncover all safe tiles while avoiding hidden mines. It features multiple difficulty levels, statistics, a leaderboard, and a timer to track performance. Players use thinking to identify mine locations and clear the board safely. The game includes progress tracking for user experience and ensures smooth gameplay across both desktop and mobile devices with a responsive design.',
    image: 'images/projects/project-3.svg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    articleClass: 'project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ff2a2a]/30',
    actions: [
      { label: 'Code', href: 'https://github.com/satyarevanth666-debug/Minesweeper-Game', icon: true, className: 'inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-black' },
      { label: 'Live Demo →', href: 'https://minesweeper-game-omega-kohl.vercel.app/', className: 'inline-flex items-center gap-2 rounded-full bg-[#ff2a2a] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#ff4a4a]' }
    ]
  },
  {
    number: '04',
    badge: 'Simple Project',
    title: 'CalciWorld - World of Calculators',
    description: 'CalciWorld is an all-in-one calculator website featuring 70+ calculators in one platform. It includes a wide range of tools for mathematics, finance, health, science, and unit conversions. The website provides quick, accurate, and reliable results with a clean and user-friendly interface. It is designed to help students, professionals, and everyday users solve problems easily. CalciWorld serves as a complete hub for all types of calculation needs.',
    image: 'images/projects/project-4.svg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    articleClass: 'project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ff2a2a]/30',
    actions: [
      { label: 'Code', href: 'https://github.com/satyarevanth666-debug/CalciWorld---World-of-Calculators', icon: true, className: 'inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-black' },
      { label: 'Live Demo →', href: 'https://calci-world-world-of-calculators.vercel.app/', className: 'inline-flex items-center gap-2 rounded-full bg-[#ff2a2a] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#ff4a4a]' }
    ]
  },
  {
    number: '05',
    badge: 'Simple Project',
    title: 'WealthScape - Finance Predictor',
    description: 'Wealthscape Finance Predictor is a financial forecasting web application that helps users estimate future wealth growth based on their financial inputs. It provides interactive charts and insights to simplify financial planning. The platform enables users to analyze investment outcomes and track progress toward their goals. Its intuitive interface makes personal finance management more accessible and data-driven.',
    image: 'images/projects/project-5.svg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    articleClass: 'project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ff2a2a]/30',
    actions: [
      { label: 'Code', href: 'https://github.com/satyarevanth666-debug/WEALTHSCAPE---Finance-Predictor', icon: true, className: 'inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-black' },
      { label: 'Live Demo →', href: 'https://wealthscape-finance-predictor.vercel.app/', className: 'inline-flex items-center gap-2 rounded-full bg-[#ff2a2a] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#ff4a4a]' }
    ]
  }
];

const projectsMarkup = renderList(projects, ({ number, badge, title, description, image, tags, articleClass, actions }) => `
  <article class="${articleClass} h-full flex flex-col">
    <div class="overflow-hidden rounded-t-2xl border-b border-white/6 bg-[#111111] flex-shrink-0">
      <img
        src="${image || 'images/projects/fallback.svg'}"
        alt="${title} thumbnail"
        loading="lazy"
        class="h-36 md:h-40 lg:h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        onerror="this.onerror=null; this.src='images/projects/fallback.svg';"
      />
    </div>
    <div class="p-4 md:p-6 flex-1 flex flex-col">
      <div class="mb-3 flex items-center justify-between gap-3">
        <span class="text-4xl font-black text-white/10">${number}</span>
        ${badge ? `<div class="inline-block rounded-full bg-[#ff2a2a] px-3 py-1 text-xs font-bold text-white">${badge}</div>` : ''}
      </div>
      <h3 class="mb-2 text-xl md:text-2xl font-black text-white">${title}</h3>
      <p class="mb-4 leading-relaxed text-white/70">${description}</p>
      <div class="mt-auto flex flex-col gap-4">
        <div class="flex flex-wrap gap-2">
          ${renderList(tags, (tag) => `<span class="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">${tag}</span>`)}
        </div>
        <div class="flex flex-wrap gap-3">
          ${renderList(actions, ({ label, href, icon, className }) => `
            <a href="${href}" target="_blank" class="${className}">
              ${icon ? '<svg class="h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>' : ''}
              ${label}
            </a>
          `)}
        </div>
      </div>
    </div>
  </article>
`);

renderSection('projects-container', `
<!-- Projects -->
<section id="projects" class="relative overflow-hidden bg-[#05070b] px-6 pb-28 pt-24 text-white md:px-12">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,42,42,0.16),_transparent_26%)]"></div>
  <div class="relative z-10 mx-auto max-w-screen-xl">
    <div class="mb-10 text-center">
      <div class="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-5 py-1.5 text-sm font-bold text-white/70 backdrop-blur">Selected Work</div>
      <h2 class="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Projects</h2>
    </div>

    <div class="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur md:p-4">
      <div id="projects-grid" class="projects-row" tabindex="0">
        <div class="carousel-controls left">
          <button id="projects-prev" aria-label="Previous" class="carousel-btn">‹</button>
        </div>
        <div class="carousel-viewport">
          <div class="carousel-track">
            ${projectsMarkup}
          </div>
        </div>
        <div class="carousel-controls right">
          <button id="projects-next" aria-label="Next" class="carousel-btn">›</button>
        </div>
        <div class="carousel-dots" id="projects-dots" aria-hidden="false"></div>
      </div>
    </div>
  </div>
</section>
`);

/* Carousel/Slider implementation (non-looping) */
(() => {
  const container = document.getElementById('projects-grid');
  if (!container) return;
  const viewport = container.querySelector('.carousel-viewport');
  const track = container.querySelector('.carousel-track');
  let slides = Array.from(track.querySelectorAll('.project-card'));
  if (!slides.length) return;

  const gap = 24; // px, matches CSS
  const getVisible = () => {
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1200) return 2;
    return 3;
  };

  let visible = getVisible();
  let slideSize = 0;
  let index = 0; // starting at first real slide
  let isAnimating = false;
  let isDragging = false;
  let startX = 0;
  let prevTranslate = 0;

  const prevBtn = document.getElementById('projects-prev');
  const nextBtn = document.getElementById('projects-next');
  const dotsContainer = document.getElementById('projects-dots');

  const setTranslate = (x, animate = true) => {
    if (animate) track.style.transition = 'transform 520ms cubic-bezier(.22,.9,.3,1)';
    else track.style.transition = 'none';
    track.style.transform = `translateX(${x}px)`;
  };

  const resize = () => {
    visible = getVisible();
    const vpWidth = viewport.clientWidth;
    const totalGap = gap * (visible - 1);
    slideSize = Math.floor((vpWidth - totalGap) / visible);
    slides = Array.from(track.querySelectorAll('.project-card'));
    slides.forEach(s => {
      s.style.flex = `0 0 ${slideSize}px`;
      s.style.maxWidth = `${slideSize}px`;
    });
    track.style.gap = `${gap}px`;
    // ensure index within bounds
    const maxIndex = Math.max(0, slides.length - visible);
    index = Math.min(index, maxIndex);
    setTranslate(-index * (slideSize + gap), false);
    updateButtons();
    buildDots();
    updateActiveDot();
  };

  const moveTo = (newIndex) => {
    const maxIndex = Math.max(0, slides.length - visible);
    const clamped = Math.max(0, Math.min(newIndex, maxIndex));
    if (clamped === index || isAnimating) return;
    index = clamped;
    isAnimating = true;
    setTranslate(-index * (slideSize + gap), true);
    track.addEventListener('transitionend', () => {
      isAnimating = false;
      updateButtons();
      updateActiveDot();
    }, { once: true });
  };

  const prev = () => moveTo(index - 1);
  const next = () => moveTo(index + 1);

  const buildDots = () => {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const pages = Math.max(1, slides.length - visible + 1);
    for (let i = 0; i < pages; i++) {
      const d = document.createElement('button');
      d.className = 'carousel-dot';
      d.dataset.index = i;
      d.addEventListener('click', () => moveTo(i));
      dotsContainer.appendChild(d);
    }
  };

  const updateActiveDot = () => {
    if (!dotsContainer) return;
    const dots = Array.from(dotsContainer.children);
    const pages = dots.length;
    const active = Math.min(index, Math.max(0, pages - 1));
    dots.forEach((d, i) => d.classList.toggle('active', i === active));
  };

  const updateButtons = () => {
    const maxIndex = Math.max(0, slides.length - visible);
    if (prevBtn) prevBtn.disabled = index <= 0;
    if (nextBtn) nextBtn.disabled = index >= maxIndex;
    if (prevBtn) prevBtn.classList.toggle('disabled', index <= 0);
    if (nextBtn) nextBtn.classList.toggle('disabled', index >= maxIndex);
  };

  // Drag / Pointer support (use Pointer Events with pointer capture for reliable mouse/touch dragging)
  let activePointerId = null;
  const onPointerDown = (e) => {
    // only respond to primary button for mouse
    if (isAnimating) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    activePointerId = e.pointerId;
    isDragging = true;
    startX = e.clientX;
    prevTranslate = -index * (slideSize + gap);
    track.style.transition = 'none';
    try { viewport.setPointerCapture(activePointerId); } catch (err) {}
  };

  const onPointerMove = (e) => {
    if (!isDragging || e.pointerId !== activePointerId) return;
    const clientX = e.clientX;
    let delta = clientX - startX;
    // dampen overscroll when at ends
    const maxIndex = Math.max(0, slides.length - visible);
    if ((index === 0 && delta > 0) || (index === maxIndex && delta < 0)) {
      delta *= 0.35;
    }
    const currentTranslate = prevTranslate + delta;
    track.style.transform = `translateX(${currentTranslate}px)`;
  };

  const onPointerUp = (e) => {
    if (!isDragging || e.pointerId !== activePointerId) return;
    isDragging = false;
    try { viewport.releasePointerCapture(activePointerId); } catch (err) {}
    activePointerId = null;
    const clientX = e.clientX || startX;
    const delta = clientX - startX;
    const threshold = slideSize / 4;
    if (delta < -threshold) moveTo(index + 1);
    else if (delta > threshold) moveTo(index - 1);
    else setTranslate(-index * (slideSize + gap), true);
  };

  // Attach events
  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);
  // pointer events on viewport with capture
  viewport.addEventListener('pointerdown', onPointerDown);
  viewport.addEventListener('pointermove', onPointerMove);
  viewport.addEventListener('pointerup', onPointerUp);
  viewport.addEventListener('pointercancel', onPointerUp);
  container.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); });

  // initial
  resize();
  window.addEventListener('resize', resize);

})();

