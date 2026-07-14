renderSection('navbar-container', `
<!-- Navbar -->
<nav id="navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent py-6">
  <div class="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
    <a href="#" class="text-white text-2xl font-black tracking-tight whitespace-nowrap">Your Name</a>
    <div class="hidden md:flex space-x-8">
      <a href="#home" class="nav-link text-white/80 hover:text-white font-medium relative group transition-colors">Home<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span></a>
      <a href="#about" class="nav-link text-white/80 hover:text-white font-medium relative group transition-colors">About<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span></a>
      <a href="#skills" class="nav-link text-white/80 hover:text-white font-medium relative group transition-colors">Skills<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span></a>
      <a href="#projects" class="nav-link text-white/80 hover:text-white font-medium relative group transition-colors">Projects<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span></a>
      <a href="#journey" class="nav-link text-white/80 hover:text-white font-medium relative group transition-colors">Journey<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span></a>
      <a href="#contact" class="nav-link text-white/80 hover:text-white font-medium relative group transition-colors">Contact<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span></a>
    </div>
    <div class="hidden md:block">
      <a href="#contact" class="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 backdrop-blur-md transition-all">Hire Me</a>
    </div>
    <button id="hamburger" class="md:hidden text-white p-2" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  <div id="mobileMenu" class="md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden max-h-0 opacity-0">
    <div class="flex flex-col px-6 space-y-4 bg-[#ff2a2a] py-4 shadow-2xl">
      <a href="#home" class="mobile-link text-white font-bold text-lg border-b border-white/20 pb-2">Home</a>
      <a href="#about" class="mobile-link text-white font-bold text-lg border-b border-white/20 pb-2">About</a>
      <a href="#skills" class="mobile-link text-white font-bold text-lg border-b border-white/20 pb-2">Skills</a>
      <a href="#projects" class="mobile-link text-white font-bold text-lg border-b border-white/20 pb-2">Projects</a>
      <a href="#journey" class="mobile-link text-white font-bold text-lg border-b border-white/20 pb-2">Journey</a>
      <a href="#contact" class="mobile-link text-white font-bold text-lg border-b border-white/20 pb-2">Contact</a>
      <a href="#contact" class="mobile-cta mt-2 inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black text-center">Hire Me</a>
    </div>
  </div>
</nav>
`);