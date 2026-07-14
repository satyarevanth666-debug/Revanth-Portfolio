const certificates = [
  {
    image: 'images/certificates/cert-1.png',
    title: 'Frontend Development - Professional Certificate',
    issuer: 'Coursera / Meta',
    description: 'Comprehensive frontend course covering HTML, CSS, and modern JS frameworks.',
    licenseId: 'LIC-FT-2024-00123',
    credentialId: 'CRED-9A3B-XY12'
  },
  {
    image: 'images/certificates/cert-2.png',
    title: 'Data Structures & Algorithms',
    issuer: 'HackerRank',
    description: 'Practical DSA certificate with focus on problem solving and optimization.',
    licenseId: 'LIC-DSA-2023-00456',
    credentialId: 'CRED-7K2L-ZT89'
  },
  {
    image: 'images/certificates/cert-3.png',
    title: 'Blockchain Essentials',
    issuer: 'edX',
    description: 'Introduction to blockchain concepts, smart contracts, and decentralized apps.',
    licenseId: 'LIC-BC-2022-07890',
    credentialId: 'CRED-1Q2W-3E4R'
  }
];

const certificatesMarkup = renderList(certificates, ({ image, title, issuer, description, licenseId, credentialId }) => `
  <div class="certificate-card rounded-2xl border border-white/8 bg-white/5 p-4 shadow-[0_12px_36px_rgba(0,0,0,0.14)] backdrop-blur-md transition hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)] hover:border-[#ff2a2a]/30 flex flex-col md:flex-row items-start gap-4">
    <div class="flex-shrink-0 w-full md:w-36 h-24 md:h-24 overflow-hidden rounded-lg bg-[#0b0b0b] border border-white/6">
      <img src="${image}" alt="${title} certificate" loading="lazy" class="w-full h-full object-contain p-3" onerror="this.onerror=null;this.src='images/projects/fallback.svg'"/>
    </div>
    <div class="flex-1">
      <h3 class="text-white font-black text-lg">${title}</h3>
      <p class="text-sm text-white/60 mt-1">${issuer}</p>
      <p class="text-sm text-white/70 mt-2">${description}</p>
      <div class="mt-3 flex flex-wrap gap-3 items-center">
        <div class="rounded-md border border-white/8 bg-white/6 px-3 py-1 text-xs font-mono text-white/90">License: <span class="font-semibold ml-2">${licenseId}</span></div>
        <div class="rounded-md border border-white/8 bg-white/6 px-3 py-1 text-xs font-mono text-white/90">Credential: <span class="font-semibold ml-2">${credentialId}</span></div>
        <button class="view-cert ml-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-sm font-semibold text-white transition hover:bg-white/10" data-image="${image}" data-title="${title}" data-issuer="${issuer}" data-license="${licenseId}" data-credential="${credentialId}">View certificate</button>
      </div>
    </div>
  </div>
`);

renderSection('certificates-container', `
<!-- Certificates -->
<section id="certificates" class="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,42,42,0.12),_transparent_24%)] px-6 pb-28 pt-24 md:px-12">
  <div class="pointer-events-none absolute right-8 top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-[90px]"></div>
  <div class="relative z-10 mx-auto max-w-6xl">
    <div class="mb-12 text-center">
      <div class="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-5 py-1.5 text-sm font-bold text-slate-200 backdrop-blur">Credentials</div>
      <h2 class="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Certificates</h2>
    </div>
    <div class="overflow-hidden rounded-lg">
      <div id="certs-grid" class="certs-row" tabindex="0">
        <div class="carousel-controls left">
          <button id="certs-prev" aria-label="Previous" class="carousel-btn">‹</button>
        </div>
        <div class="carousel-viewport">
          <div class="carousel-track">
            ${certificatesMarkup}
          </div>
        </div>
        <div class="carousel-controls right">
          <button id="certs-next" aria-label="Next" class="carousel-btn">›</button>
        </div>
        <div class="carousel-dots" id="certs-dots" aria-hidden="false"></div>
      </div>
    </div>
  </div>
</section>
`);

/* Certificates carousel (non-looping, swipe-enabled) */
(() => {
  const container = document.getElementById('certs-grid');
  if (!container) return;
  const viewport = container.querySelector('.carousel-viewport');
  const track = container.querySelector('.carousel-track');
  let slides = Array.from(track.querySelectorAll('.certificate-card'));
  if (!slides.length) return;

  const gap = 24;
  const getVisible = () => {
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1200) return 2;
    return 3;
  };

  let visible = getVisible();
  let slideSize = 0;
  let index = 0;
  let isAnimating = false;
  let isDragging = false;
  let startX = 0;
  let prevTranslate = 0;

  const prevBtn = document.getElementById('certs-prev');
  const nextBtn = document.getElementById('certs-next');
  const dotsContainer = document.getElementById('certs-dots');

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
    slides = Array.from(track.querySelectorAll('.certificate-card'));
    slides.forEach(s => {
      s.style.flex = `0 0 ${slideSize}px`;
      s.style.maxWidth = `${slideSize}px`;
    });
    track.style.gap = `${gap}px`;
    const maxIndex = Math.max(0, slides.length - visible);
    index = Math.min(index, maxIndex);
    setTranslate(-index * (slideSize + gap), false);
    buildDots();
    updateActiveDot();
    updateButtons();
  };

  const moveTo = (newIndex) => {
    const maxIndex = Math.max(0, slides.length - visible);
    const clamped = Math.max(0, Math.min(newIndex, maxIndex));
    if (clamped === index || isAnimating) return;
    index = clamped;
    isAnimating = true;
    setTranslate(-index * (slideSize + gap), true);
    track.addEventListener('transitionend', () => { isAnimating = false; updateButtons(); updateActiveDot(); }, { once: true });
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
    const active = Math.min(index, Math.max(0, dots.length - 1));
    dots.forEach((d, i) => d.classList.toggle('active', i === active));
  };

  const updateButtons = () => {
    const maxIndex = Math.max(0, slides.length - visible);
    if (prevBtn) prevBtn.disabled = index <= 0;
    if (nextBtn) nextBtn.disabled = index >= maxIndex;
    if (prevBtn) prevBtn.classList.toggle('disabled', index <= 0);
    if (nextBtn) nextBtn.classList.toggle('disabled', index >= maxIndex);
  };

  // pointer drag
  let activePointerId = null;
  const onPointerDown = (e) => {
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
    const maxIndex = Math.max(0, slides.length - visible);
    if ((index === 0 && delta > 0) || (index === maxIndex && delta < 0)) delta *= 0.35;
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

  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);
  viewport.addEventListener('pointerdown', onPointerDown);
  viewport.addEventListener('pointermove', onPointerMove);
  viewport.addEventListener('pointerup', onPointerUp);
  viewport.addEventListener('pointercancel', onPointerUp);
  container.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); });

  resize();
  window.addEventListener('resize', resize);
})();

// Certificate modal logic
(() => {
  const modalHtml = `
  <div id="cert-modal" class="cert-modal hidden fixed inset-0 z-50 items-center justify-center p-6">
    <div class="cert-modal-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    <div class="cert-modal-content relative z-10 max-w-4xl w-full bg-[#070709] rounded-2xl border border-white/8 p-6 flex flex-col md:flex-row gap-6">
      <div class="cert-modal-img flex-shrink-0 w-full md:w-1/2 h-64 md:h-80 bg-[#0b0b0b] rounded-lg overflow-hidden flex items-center justify-center">
        <img id="cert-modal-img" src="" alt="certificate" class="max-h-full max-w-full object-contain" />
      </div>
      <div class="flex-1 text-left">
        <button id="cert-modal-close" class="ml-auto mb-2 text-white/70 hover:text-white">✕</button>
        <h3 id="cert-modal-title" class="text-2xl font-black text-white mb-1"></h3>
        <p id="cert-modal-issuer" class="text-sm text-white/60 mb-4"></p>
        <p id="cert-modal-desc" class="text-sm text-white/70 mb-4"></p>
        <div class="flex flex-wrap gap-3">
          <div class="rounded-md border border-white/8 bg-white/6 px-3 py-1 text-xs font-mono text-white/90">License: <span id="cert-modal-license" class="font-semibold ml-2"></span></div>
          <div class="rounded-md border border-white/8 bg-white/6 px-3 py-1 text-xs font-mono text-white/90">Credential: <span id="cert-modal-credential" class="font-semibold ml-2"></span></div>
        </div>
      </div>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('cert-modal-img');
  const modalTitle = document.getElementById('cert-modal-title');
  const modalIssuer = document.getElementById('cert-modal-issuer');
  const modalDesc = document.getElementById('cert-modal-desc');
  const modalLicense = document.getElementById('cert-modal-license');
  const modalCredential = document.getElementById('cert-modal-credential');
  const modalClose = document.getElementById('cert-modal-close');

  const openModal = (data) => {
    modalImg.src = data.image || '';
    modalTitle.textContent = data.title || '';
    modalIssuer.textContent = data.issuer || '';
    modalDesc.textContent = data.description || '';
    modalLicense.textContent = data.license || '';
    modalCredential.textContent = data.credential || '';
    modal.classList.remove('hidden');
    document.documentElement.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    document.documentElement.style.overflow = '';
  };

  document.addEventListener('click', (e) => {
    const target = e.target.closest('.view-cert');
    if (target) {
      const data = {
        image: target.dataset.image,
        title: target.dataset.title,
        issuer: target.dataset.issuer,
        license: target.dataset.license,
        credential: target.dataset.credential,
        description: ''
      };
      const card = target.closest('.certificate-card');
      if (card) {
        const descEl = card.querySelector('p.text-sm.text-white/70');
        if (descEl) data.description = descEl.textContent || '';
      }
      openModal(data);
    }
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('cert-modal-backdrop')) closeModal();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

})();