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
      <div class="mt-3 flex flex-wrap gap-3">
        <div class="rounded-md border border-white/8 bg-white/6 px-3 py-1 text-xs font-mono text-white/90">License: <span class="font-semibold ml-2">${licenseId}</span></div>
        <div class="rounded-md border border-white/8 bg-white/6 px-3 py-1 text-xs font-mono text-white/90">Credential: <span class="font-semibold ml-2">${credentialId}</span></div>
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
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      ${certificatesMarkup}
    </div>
  </div>
</section>
`);