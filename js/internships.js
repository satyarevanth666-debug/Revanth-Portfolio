const achievements = [
  { badge: 'Hackathon', title: 'Participant', subtitle: 'Hackathon Participant', tags: ['React', 'Node.js', 'MongoDB'] },
  { badge: 'MUN * Quiz', title: '2nd Runner Up', subtitle: 'MUN * Quiz Win', tags: ['Public Speaking', 'Debate'] }
];

const achievementsMarkup = renderList(achievements, ({ badge, title, subtitle, tags }) => `
  <div class="internship-card rounded-2xl border border-slate-200 bg-[#f6eadc] p-6 text-slate-900 shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition-all hover:border-[#ff2a2a]/40">
    <div class="mb-3 text-3xl">🏆</div>
    <p class="mb-2 font-mono text-xs font-bold uppercase text-[#ff2a2a]">${badge}</p>
    <h3 class="mb-1 text-xl font-black text-slate-900">${title}</h3>
    <p class="mb-4 text-sm text-slate-700">${subtitle}</p>
    <div class="flex flex-wrap gap-1.5">
      ${renderList(tags, (tag) => `<span class="rounded-full bg-white/70 px-2 py-0.5 text-xs text-slate-700">${tag}</span>`)}
    </div>
  </div>
`);

renderSection('internships-container', `
<!-- Internships -->
<section id="internships" class="relative overflow-hidden bg-[#05070b] px-6 pb-28 pt-24 text-white md:px-12">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,42,42,0.12),_transparent_24%)]"></div>
  <div class="relative z-10 mx-auto max-w-6xl">
    <div class="mb-16 text-center">
      <div class="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-5 py-1.5 text-sm font-bold text-white/70 backdrop-blur">Achievements</div>
      <h2 class="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Hackathons & Wins</h2>
    </div>
    <div class="grid gap-6 md:grid-cols-3">
      ${achievementsMarkup}
    </div>
  </div>
</section>
`);