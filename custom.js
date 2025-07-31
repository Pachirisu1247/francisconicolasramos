document.addEventListener("DOMContentLoaded", function() {
  const searchBtn = document.querySelector('#quarto-search button');
  if (searchBtn && !searchBtn.getAttribute('aria-label')) {
    searchBtn.setAttribute('aria-label', 'Search site');
  }

  const navToggle = document.querySelector('.navbar-toggler');
  if (navToggle && !navToggle.getAttribute('aria-label')) {
    navToggle.setAttribute('aria-label', 'Toggle navigation menu');
  }
});
