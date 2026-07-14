const contentChannels = [
  { platform: 'Blog', href: 'https://blog.example.com', text: 'Deep dives on smart contracts and system design.' },
  { platform: 'YouTube', href: 'https://youtube.com', text: 'Walkthroughs of dApps and full-stack builds.' },
  { platform: 'Twitter / X', href: 'https://x.com', text: 'Daily notes from the trenches of building.' }
];

const contentMarkup = renderList(contentChannels, ({ platform, href, text }) => `
  <a href="${href}" target="_blank" class="content-channel block rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:border-[#ff2a2a]/40">
    <p class="mb-2 text-xs font-mono font-bold uppercase text-[#ff2a2a]">${platform}</p>
    <h3 class="mb-1 text-lg font-black text-slate-900">@yourhandle</h3>
    <p class="text-sm leading-relaxed text-slate-600">${text}</p>
  </a>
`);

renderSection('contentcreator-container', `
<!-- ContentCreator -->
<section id="content" class="relative overflow-hidden bg-[linear-gradient(135deg,_#f8fafc_0%,_#fff7ed_60%,_#eef2ff_100%)] px-6 pb-28 pt-24 md:px-12">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.12),_transparent_24%)]"></div>
  <div class="relative z-10 mx-auto max-w-5xl">
    <div class="mb-16 text-center">
      <div class="mb-6 inline-block rounded-full border border-slate-200 bg-white/80 px-5 py-1.5 text-sm font-bold text-slate-600 shadow-sm">Content</div>
      <h2 class="mb-4 text-4xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">I Write & Create</h2>
      <p class="mx-auto max-w-xl text-slate-600">I share what I learn through writing and short-form content on engineering, blockchain, and building in public.</p>
    </div>
    <div class="grid gap-4 md:grid-cols-3">
      ${contentMarkup}
    </div>
  </div>
</section>
`);