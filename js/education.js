const educationItems = [
  { title: 'B.Tech Computer Science Engineering', school: 'SRM University AP', detail: 'B-Tech CSE — SRM University AP', range: '2025 — 2029' },
  { title: 'Class XII (MPC)', school: 'Sri Chaitanya Junior College', detail: 'Scored 98.4%.', range: '2023 — 2025', score: '98.4%' },
  { title: 'Class X', school: 'Sri Chaitanya High School', detail: 'Scored 96.83% overall.', range: '2022 — 2023', score: '96.83%' }
];

const educationMarkup = renderList(educationItems, ({ title, school, detail, range, score }) => `
  <div class="education-item flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/10 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition hover:border-[#ff2a2a]/30 md:flex-row md:items-center">
    <div class="text-3xl">🎓</div>
    <div class="flex-1">
      <h3 class="text-lg font-black text-white">${title}</h3>
      <p class="text-sm text-white/70">${school}</p>
      <p class="mt-1 text-sm text-white/60">${detail}</p>
    </div>
    ${score ? `<div class="ml-3 hidden md:block"><div class="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/6 px-3 py-1 text-sm font-semibold text-white/90 font-mono">${score}</div></div>` : ''}
    <span class="text-[#ff2a2a] font-mono text-sm font-bold">${range}</span>
  </div>
`);

renderSection('education-container', `
<!-- Education -->
<section id="education" class="relative overflow-hidden bg-[#05070b] px-6 pb-28 pt-24 text-white md:px-12">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,42,42,0.12),_transparent_24%)]"></div>
  <div class="relative z-10 mx-auto max-w-4xl">
    <div class="mb-16 text-center">
      <div class="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-5 py-1.5 text-sm font-bold text-white/70 backdrop-blur">Academic</div>
      <h2 class="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Education</h2>
    </div>
    <div class="space-y-4">
      ${educationMarkup}
    </div>
  </div>
</section>
`);