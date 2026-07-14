const skillGroups = [
  {
    title: 'Frontend Development',
    skills: [
      { icon: '⚛️', name: 'React' },
      { icon: '🎨', name: 'Tailwind CSS' },
      { icon: '🧩', name: 'TypeScript' },
      { icon: '🌐', name: 'HTML5 / CSS3' }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { icon: '🟢', name: 'Node.js' },
      { icon: '🚂', name: 'Express.js' },
      { icon: '🔌', name: 'REST APIs' }
    ]
  },
  {
    title: 'Programming Languages',
    skills: [
      { icon: '🟨', name: 'JavaScript' },
      { icon: '🐍', name: 'Python' },
      { icon: '🦀', name: 'Rust' },
      { icon: '⛓️', name: 'Solidity' },
      { icon: '⚙️', name: 'C / C++' }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { icon: '🗄️', name: 'MongoDB' },
      { icon: '🐘', name: 'PostgreSQL' },
      { icon: '🧱', name: 'MySQL' }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { icon: '🐳', name: 'Docker' },
      { icon: '🧠', name: 'AI Tools' },
      { icon: '🛠️', name: 'VS Code' },
      { icon: '🌐', name: 'IPFS' },
      { icon: '🧪', name: 'Remix IDE' }
    ]
  },
  {
    title: 'Version Control',
    skills: [
      { icon: '🌿', name: 'Git' },
      { icon: '🐙', name: 'GitHub' },
      { icon: '🧾', name: 'GitLab' }
    ]
  }
];

const skillMarkup = renderList(skillGroups, ({ title, skills }) => `
  <div class="skill-category rounded-[16px] border border-white/10 bg-white/5 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:shadow-[0_0_18px_rgba(129,140,248,0.14)]">
    <h3 class="mb-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/70">${title}</h3>
    <div class="flex flex-wrap gap-2">
      ${renderList(skills, ({ icon, name }) => `
        <div class="flex items-center gap-2 rounded-lg border border-white/10 bg-black/25 px-2.5 py-2 transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-[0_0_10px_rgba(129,140,248,0.1)]">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-indigo-400/20 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 text-sm">
            ${icon}
          </div>
          <span class="text-[13px] font-semibold text-white/90">${name}</span>
        </div>
      `)}
    </div>
  </div>
`);

renderSection('technicalskills-container', `
<!-- TechnicalSkills -->
<section id="skills" class="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.16),_transparent_25%),linear-gradient(135deg,_#060816_0%,_#111827_45%,_#0f172a_100%)] px-6 pb-12 pt-16 md:px-10">
  <div class="pointer-events-none absolute left-10 top-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-[110px]"></div>
  <div class="pointer-events-none absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[110px]"></div>
  <div class="relative z-10 mx-auto max-w-7xl">
    <div class="mb-6 text-center">
      <div class="mb-3 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-bold text-white/70 backdrop-blur">Technical Stack</div>
      <h2 class="mb-1 text-3xl font-black uppercase tracking-tight text-white md:text-4xl">My Skillset</h2>
      <p class="mx-auto max-w-2xl text-sm text-slate-300">A compact view of the stack I build with.</p>
    </div>
    <div class="grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
      ${skillMarkup}
    </div>
  </div>
</section>
`);
