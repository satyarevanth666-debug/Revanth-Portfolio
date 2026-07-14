const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navbar = document.getElementById('navbar');
const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

const setMenuState = (isOpen) => {
  hamburger?.classList.toggle('active', isOpen);
  mobileMenu?.classList.toggle('active', isOpen);
  navbar?.classList.toggle('mobile-open', isOpen);
};

const closeMenu = () => setMenuState(false);

hamburger?.addEventListener('click', () => {
  const isOpen = hamburger.classList.contains('active');
  setMenuState(!isOpen);
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const href = anchor.getAttribute('href');

    if (!href || href === '#' || !document.querySelector(href)) {
      return;
    }

    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

const playReel = document.querySelector('.play-reel');
playReel?.addEventListener('click', () => {
  console.log('Play reel clicked');
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
    observer.unobserve(entry.target);
  });
}, observerOptions);

document.querySelectorAll('.service-card, .skill-category, .soft-skill-card, .project-card, .education-item, .internship-card, .leadership-item, .certificate-card, .content-channel').forEach((el) => {
  observer.observe(el);
});

const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
const sections = document.querySelectorAll('section[id]');

const updateActiveLink = () => {
  let currentId = '';

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 200) {
      currentId = section.getAttribute('id') || '';
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    link.style.color = href === `#${currentId}` ? '#ff2a2a' : '';
  });
};

window.addEventListener('scroll', updateActiveLink);

document.addEventListener('DOMContentLoaded', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  }

  updateActiveLink();
  console.log('Portfolio loaded');
});
