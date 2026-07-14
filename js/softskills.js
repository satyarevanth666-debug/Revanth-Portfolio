const softSkills = [
  { icon: '🧩', title: 'Problem Solving', text: 'Breaking down complex tasks into clean, logical, and modular pieces.' },
  { icon: '🚀', title: 'Self-driven', text: 'Curious and eager to learn emerging technologies.' },
  { icon: '🤝', title: 'Team Collaboration', text: 'Collaborating across fields and participating in hackathons.' },
  { icon: '🌟', title: 'Adaptability', text: 'Quick to pick up new frameworks and languages.' }
];

const softSkillsMarkup = renderList(softSkills, ({ icon, title, text }) => `
  <div class="soft-skill-card rounded-2xl border border-white/10 bg-[#f6eadc] p-6 text-center text-slate-900 shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition hover:border-[#ff2a2a]/40">
    <div class="mb-3 text-4xl">${icon}</div>
    <h3 class="mb-2 text-sm font-black text-slate-900">${title}</h3>
    <p class="text-xs leading-relaxed text-slate-700">${text}</p>
  </div>
`);

renderSection('softskills-container', `
<!-- SoftSkills -->
<section id="soft-skills" class="relative overflow-hidden bg-[#05070b] px-6 pb-28 pt-24 text-white md:px-12">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,42,42,0.12),_transparent_24%)]"></div>
  <div class="relative z-10 mx-auto max-w-6xl">
    <div class="mb-16 text-center">
      <div class="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-5 py-1.5 text-sm font-bold text-white/70 backdrop-blur">Human Skills</div>
      <h2 class="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Soft Skills</h2>
    </div>
    <div class="grid gap-4 md:grid-cols-4">
      ${softSkillsMarkup}
    </div>
  </div>
</section>
`);