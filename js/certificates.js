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
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      ${certificatesMarkup}
    </div>
  </div>
</section>
`);

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