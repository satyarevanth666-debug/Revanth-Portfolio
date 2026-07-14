const projects = [
  {
    number: '01',
    badge: '🚀 Featured Project',
    title: 'NewsOrbit - Global News Dashboard',
    description: 'NewsOrbit is a modern AI-powered news platform that delivers real-time headlines from around the world in one place. It features country-wise news coverage, trending stories, and intelligent AI-generated summaries for faster reading. Users can quickly explore the latest updates across multiple categories without information overload. NewsOrbit makes staying informed faster, smarter, and more engaging with real-time global news.',
    image: 'images/projects/project-1.svg',
    tags: ['HTML', 'CSS', 'JavaScript', 'News API', 'MongoDB'],
    articleClass: 'project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ff2a2a]/40',
    actions: [{ label: 'Code', href: 'https://github.com', icon: true, className: 'inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-black' }]
  },
  {
    number: '02',
    badge: '🔧 In Progress',
    title: 'Project Two',
    description: 'A description of your second project — the problem, approach, and outcome.',
    image: 'images/projects/project-2.svg',
    tags: ['Python', 'TensorFlow', 'Computer Vision', 'LLMs'],
    articleClass: 'project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ff2a2a]/30',
    actions: [
      { label: 'Code', href: 'https://github.com', icon: true, className: 'inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-black' },
      { label: 'Live Demo →', href: 'https://demo.com', className: 'inline-flex items-center gap-2 rounded-full bg-[#ff2a2a] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#ff4a4a]' }
    ]
  },
  {
    number: '03',
    badge: '🔧 In Progress',
    title: 'Project Three',
    description: 'A description of your third project. Keep it concise and impact-focused.',
    image: 'images/projects/project-3.svg',
    tags: ['Solidity', 'Ethereum', 'ethers.js', 'JavaScript'],
    articleClass: 'project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] text-white shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ff2a2a]/30',
    actions: [{ label: 'Code', href: 'https://github.com', icon: true, className: 'inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-black' }]
  }
];

const projectsMarkup = renderList(projects, ({ number, badge, title, description, image, tags, articleClass, actions }) => `
  <article class="${articleClass} min-w-full md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(50%-0.75rem)]">
    <div class="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
      <img
        src="${image || 'images/projects/fallback.svg'}"
        alt="${title} thumbnail"
        loading="lazy"
        class="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        onerror="this.onerror=null; this.src='images/projects/fallback.svg';"
      />
    </div>
    <div class="p-8 md:p-10">
      <div class="mb-4 flex items-center justify-between gap-3">
        <span class="text-5xl font-black text-white/10">${number}</span>
        ${badge ? `<div class="inline-block rounded-full bg-[#ff2a2a] px-3 py-1 text-xs font-bold text-white">${badge}</div>` : ''}
      </div>
      <h3 class="mb-3 text-2xl font-black text-white">${title}</h3>
      <p class="mb-6 leading-relaxed text-white/70">${description}</p>
      <div class="mb-6 flex flex-wrap gap-2">
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
  </article>
`);

renderSection('projects-container', `
<!-- Projects -->
<section id="projects" class="relative overflow-hidden bg-[#05070b] px-6 pb-28 pt-24 text-white md:px-12">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,42,42,0.16),_transparent_26%)]"></div>
  <div class="relative z-10 mx-auto max-w-6xl">
    <div class="mb-10 text-center">
      <div class="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-5 py-1.5 text-sm font-bold text-white/70 backdrop-blur">Selected Work</div>
      <h2 class="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Projects</h2>
    </div>

    <div class="mb-4 flex items-center justify-end gap-2">
      <button type="button" data-project-nav="prev" class="rounded-full border border-white/15 bg-white/10 p-2 text-white/80 transition hover:bg-white/20">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button type="button" data-project-nav="next" class="rounded-full border border-white/15 bg-white/10 p-2 text-white/80 transition hover:bg-white/20">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>
      </button>
    </div>

    <div class="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur md:p-4">
      <div id="projects-track" class="flex gap-4 transition-transform duration-500 ease-out">
        ${projectsMarkup}
      </div>
    </div>
  </div>
</section>
`);

const projectsTrack = document.getElementById('projects-track');
const navButtons = document.querySelectorAll('[data-project-nav]');
let projectIndex = 0;

const getVisibleCards = () => {
  if (!projectsTrack) return 1;
  const width = window.innerWidth;
  if (width < 768) return 1;
  return 2;
};

const updateProjectsCarousel = () => {
  if (!projectsTrack) return;
  const cards = projectsTrack.children;
  if (!cards.length) return;
  const visibleCards = getVisibleCards();
  const maxIndex = Math.max(0, cards.length - visibleCards);
  projectIndex = Math.min(projectIndex, maxIndex);
  const offset = projectIndex * (100 / visibleCards);
  projectsTrack.style.transform = `translateX(-${offset}%)`;
};

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const direction = button.getAttribute('data-project-nav') === 'next' ? 1 : -1;
    const visibleCards = getVisibleCards();
    const maxIndex = Math.max(0, projects.length - visibleCards);
    projectIndex = Math.min(maxIndex, Math.max(0, projectIndex + direction));
    updateProjectsCarousel();
  });
});

window.addEventListener('resize', updateProjectsCarousel);
updateProjectsCarousel();
