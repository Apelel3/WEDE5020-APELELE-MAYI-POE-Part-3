// main.js - Apelele Hair Collection
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle functionality
  const headerInner = document.querySelector('.header-inner');
  const nav = document.querySelector('.site-nav');

  if (headerInner && nav) {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle.innerHTML = '<span class="hamburger-icon">&#9776;</span>';
    
    headerInner.insertBefore(menuToggle, nav);

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      const expanded = nav.classList.contains('nav-open');
      menuToggle.setAttribute('aria-expanded', expanded);
    });
  }

  // Highlight current page link dynamically
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.site-nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href.replace('../', ''))) {
      link.setAttribute('aria-current', 'page');
    }
  });
});