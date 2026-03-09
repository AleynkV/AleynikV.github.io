/* ============================================================
   VALENTIN ALEYNIK — PORTFOLIO  |  main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav scroll shadow ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* ── Hamburger menu ── */
  const hamburger = document.getElementById('hamburger');
  const overlay   = document.getElementById('nav-overlay');
  hamburger.addEventListener('click', () => overlay.classList.toggle('open'));
  overlay.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => overlay.classList.remove('open'));
  });

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => sectionObserver.observe(s));

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => revealObserver.observe(r));

});
