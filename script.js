// Navbar scroll shadow + active link tracking
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function onScroll() {
  // shadow
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // active nav link
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinksEl.classList.remove('open'));
});

// Scroll-reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.card, .timeline-item, .award-item, .pub-item').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
