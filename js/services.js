const services = [
  {
    number: '01',
    title: 'Research',
    description: 'Understanding goals, requirements, and technical constraints to lay a rock-solid foundation.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes.',
    offset: 'md:translate-y-8'
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Building scalable backends and responsive frontends with modern stacks and best practices.'
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Testing, performance optimization, and seamless deployment with ongoing support.',
    offset: 'md:translate-y-8'
  }
];

const servicesMarkup = renderList(services, ({ number, title, description, offset = '' }) => `
  <div class="service-card group rounded-[2rem] p-2 border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:bg-[#ff2a2a] hover:shadow-[0_20px_50px_rgba(255,42,42,0.35)] transition-all duration-500 ${offset}">
    <div class="rounded-[1.5rem] p-8 bg-[#f4f4f4] group-hover:bg-red-700/40 transition-colors duration-500">
      <span class="text-xl font-bold italic text-gray-400 group-hover:text-red-200">${number}</span>
      <h3 class="text-2xl font-black mt-2 mb-3 text-gray-900 group-hover:text-white">${title}</h3>
      <p class="text-sm text-gray-500 group-hover:text-red-100 leading-relaxed">${description}</p>
    </div>
  </div>
`);

renderSection('services-container', `
<!-- Services -->
<section id="process" class="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden text-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
  <div class="max-w-6xl mx-auto">
    <div class="mb-16 max-w-xl">
      <div class="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 bg-white">My Process</div>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">Here's how I turn ideas into real-world applications</h2>
      <p class="text-gray-500 text-base md:text-lg font-medium">A structured, creative, and highly technical approach to turn ideas into robust applications.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${servicesMarkup}
    </div>
    <p class="mt-10 text-center text-2xl text-gray-600" style="font-family: 'Caveat', cursive">Ready to ship!</p>
  </div>
</section>
`);
