renderSection('about-container', `
<!-- About -->
<section id="about" class="relative overflow-hidden bg-[#ff2a2a] px-6 pb-40 pt-24 md:px-12 w-full">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(0,0,0,0.14),_transparent_28%)]"></div>
  <div class="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-16 md:flex-row">
    <div class="relative mt-12 flex w-full shrink-0 flex-col items-center md:mt-0 md:w-[350px]">
      <div class="absolute -top-24 left-1/2 h-40 w-3 -translate-x-1/2 rounded-full bg-black/20"></div>
      <div class="absolute -top-6 left-1/2 z-10 h-12 w-6 -translate-x-1/2 rounded border border-black/20 bg-white/80 shadow"></div>
      <div class="relative z-20 w-full max-w-[280px] -rotate-3 rounded-[24px] border border-black/10 bg-gray-900/90 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-transform duration-500 hover:rotate-0">
        <div class="absolute -top-3 left-1/2 flex h-6 w-16 -translate-x-1/2 items-center justify-center rounded-t-xl bg-gray-900/95">
          <div class="h-2 w-8 rounded-full bg-black/40"></div>
        </div>
        <div class="aspect-[3/4] w-full overflow-hidden rounded-[18px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
          <img
            src="images/about/profile.jpg"
            alt="Your photo"
            class="h-full w-full object-cover"
            onerror="this.onerror=null; this.src='images/projects/fallback.svg';"
          />
        </div>
        <div class="pb-1 pt-3 text-center">
          <p class="text-sm font-black text-white">Satya Revanth</p>
          <p class="text-xs text-white/70">Aspiring Web & Game Developer</p>
        </div>
      </div>
    </div>

    <div class="mt-8 flex-1 md:mt-0">
      <h2 class="mb-4 text-4xl font-black text-black md:text-5xl">Hello!</h2>
      <p class="mb-12 max-w-3xl text-lg font-semibold leading-relaxed text-red-50">
        Hi, I'm <span class="mx-1 text-xl font-black uppercase tracking-wide text-black">Satya Revanth</span>, a Computer Science student with a passion for technology and innovation.
        My interests include web development, programming, and exploring emerging technologies. Through continuous learning and hands-on experience, 
        I strive to create efficient and meaningful digital solutions.I'm always excited to take on new challenges and expand my skills in the 
        ever-evolving world of technology.
      </p>
      <div class="flex flex-wrap items-center gap-3">
        <span class="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">HTML</span>
        <span class="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">CSS</span>
        <span class="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">JavaScript</span>
        <span class="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">Java</span>
        <span class="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">Python</span>
      </div>
    </div>
  </div>
  <div class="pointer-events-none absolute bottom-0 left-0 w-full translate-y-1">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="h-12 w-full fill-[#0a0a0a] md:h-20">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
    </svg>
  </div>
</section>
`);