const leadershipItems = [
  { title: 'Class Representative', place: 'SRM University AP', text: 'Oversaw academic and extracurricular activities for my batch.' }
];

const leadershipMarkup = renderList(leadershipItems, ({ title, place, text }) => `
  <div class="leadership-item rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
    <h3 class="text-xl font-black text-slate-900">${title}</h3>
    <p class="mb-3 font-mono text-sm font-bold text-[#ff2a2a]">${place}</p>
    <p class="leading-relaxed text-slate-600">${text}</p>
  </div>
`);

renderSection('leadership-container', `
<!-- Leadership -->
<section id="leadership" class="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,42,42,0.12),_transparent_24%),linear-gradient(135deg,_#f8fafc_0%,_#fff8f3_60%,_#eef2ff_100%)] px-6 pb-28 pt-24 md:px-12">
  <div class="relative z-10 mx-auto max-w-5xl">
    <div class="mb-16 text-center">
      <div class="mb-6 inline-block rounded-full border border-slate-200 bg-white/80 px-5 py-1.5 text-sm font-bold text-slate-600 shadow-sm">Beyond Code</div>
      <h2 class="text-4xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">Leadership</h2>
    </div>
    <div class="grid gap-6 md:grid-cols-2">
      ${leadershipMarkup}
    </div>
  </div>
</section>
`);