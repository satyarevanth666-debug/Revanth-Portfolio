document.getElementById('contact-container').innerHTML = `
<!-- Contact -->
<section id="contact" class="relative overflow-hidden bg-[#05070b] px-6 pb-32 pt-24 text-white md:px-12">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,42,42,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_30%)]"></div>
  <div class="relative mx-auto max-w-5xl rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-12">
    <div class="mb-10 max-w-2xl">
      <div class="mb-4 inline-block rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-bold text-white/70">Get In Touch</div>
      <h2 class="mb-4 text-4xl font-black tracking-tight text-white md:text-6xl">Let's talk.</h2>
      <p class="text-lg leading-relaxed text-white/75">Have an opportunity, project, or idea? Drop a message and I'll get back within 24–48 hours.</p>
    </div>
    <form class="space-y-8" onsubmit="event.preventDefault(); alert('Sent successfully!');">
      <div class="grid gap-6 md:grid-cols-2">
        <input required placeholder="Your name" class="w-full rounded-2xl border border-white/10 bg-[#11141a] px-4 py-3 text-lg text-white placeholder-white/45 outline-none transition focus:border-white/25 focus:bg-[#151923]" />
        <input required type="email" placeholder="Your email" class="w-full rounded-2xl border border-white/10 bg-[#11141a] px-4 py-3 text-lg text-white placeholder-white/45 outline-none transition focus:border-white/25 focus:bg-[#151923]" />
      </div>
      <textarea required rows="5" placeholder="Type your message here" class="w-full resize-none rounded-2xl border border-white/10 bg-[#11141a] px-4 py-3 text-lg text-white placeholder-white/45 outline-none transition focus:border-white/25 focus:bg-[#151923]"></textarea>
      <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <p 
         class="max-w-sm text-sm text-white/70">For urgent inquiries, email <a href="mailto:satyarevanth666@gmail.com" class="font-semibold text-[#ff6b6b] underline-offset-4 transition hover:underline">satyarevanth666@gmail.com</a></p>
        <p class="max-w-sm text-sm text-white/70">For urgent inquiries, phone <a href="tel:+918978972826" class="font-semibold text-[#ff6b6b] underline-offset-4 transition hover:underline">+91 89789 72826</a></p>
        <button type="submit" class="group flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 py-3 font-bold text-white transition hover:bg-white/15 hover:shadow-[0_0_16px_rgba(255,255,255,0.08)]">
          Send Message
          <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>
    </form>
  </div>
</section>
`;