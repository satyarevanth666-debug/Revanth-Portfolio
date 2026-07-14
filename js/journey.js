const journeyItems = [
  { year: '2024', title: 'Started B.Tech CSE', text: 'Began my Computer Science journey with a focus on systems and web.' },
  { year: '2025', title: 'Discovered Blockchain', text: 'Fell into Ethereum, Solidity, and smart contract development.' },
  { year: '2025', title: 'First Hackathon Win', text: 'Placed at a national hackathon building a decentralized dApp.' },
  { year: '2026', title: 'Building & Shipping', text: 'Actively shipping open-source dApps and writing technical content.' }
];

const journeyMarkup = renderList(journeyItems, ({ year, title, text }) => `
  <div class="relative rounded-2xl border border-slate-300 bg-white/80 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.06)]">
    <div class="absolute -left-[42px] top-6 h-4 w-4 rounded-full bg-[#ff2a2a] ring-4 ring-[#f6eadc]"></div>
    <span class="font-mono text-sm font-bold text-[#ff2a2a]">${year}</span>
    <h3 class="mt-1 text-xl font-black text-slate-900">${title}</h3>
    <p class="mt-2 leading-relaxed text-slate-600">${text}</p>
  </div>
`);

renderSection('journey-container', `
<!-- Journey -->
<section id="journey" class="relative overflow-hidden bg-[#f6eadc] px-6 pb-28 pt-24 text-slate-900 md:px-12">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,42,42,0.08),_transparent_24%)]"></div>
  <div class="relative z-10 mx-auto max-w-4xl">
    <div class="mb-16 text-center">
      <div class="mb-6 inline-block rounded-full border border-slate-300 bg-white/70 px-5 py-1.5 text-sm font-bold text-slate-700 shadow-sm">Timeline</div>
      <h2 class="text-4xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">My Journey</h2>
    </div>
    <div class="relative space-y-6 border-l-2 border-[#ff2a2a]/25 pl-8">
      ${journeyMarkup}
    </div>
  </div>
</section>
`);