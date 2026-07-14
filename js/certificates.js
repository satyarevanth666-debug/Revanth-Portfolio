const certificates = [
  { icon: '🎓', title: 'Class XII — 98.4%', subtitle: 'Andhra Pradesh Board' },
  { icon: '🎓', title: 'Class X — 96.83%', subtitle: 'Andhra Pradesh Board' },
  { icon: '⛓️', title: 'CGPA - 9.74', subtitle: 'SRM University AP' }
];

const certificatesMarkup = renderList(certificates, ({ icon, title, subtitle }) => `
  <div class="certificate-card rounded-2xl border border-white/10 bg-white/10 p-6 text-center shadow-[0_14px_40px_rgba(0,0,0,0.16)] backdrop-blur-md transition hover:border-[#ff2a2a]/40">
    <div class="text-4xl mb-3">${icon}</div>
    <h3 class="text-white font-black text-sm mb-1">${title}</h3>
    <p class="text-white/50 text-xs">${subtitle}</p>
  </div>
`);

renderSection('certificates-container', `
<!-- Certificates -->
<section id="certificates" class="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,42,42,0.16),_transparent_24%),linear-gradient(135deg,_#060816_0%,_#111827_45%,_#0f172a_100%)] px-6 pb-28 pt-24 md:px-12">
  <div class="pointer-events-none absolute right-8 top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-[90px]"></div>
  <div class="relative z-10 mx-auto max-w-6xl">
    <div class="mb-16 text-center">
      <div class="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-5 py-1.5 text-sm font-bold text-slate-200 backdrop-blur">Credentials</div>
      <h2 class="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Certificates</h2>
    </div>
    <div class="grid gap-4 md:grid-cols-4">
      ${certificatesMarkup}
    </div>
  </div>
</section>
`);