document.addEventListener('DOMContentLoaded', () => { // REDUCTION HEADER //
  const header = document.querySelector('.site-header');
  const logoImg = document.querySelector('.logo img');

  function handleScroll() {
    if (window.scrollY > 100) {
      header.classList.add('reduit');
      logoImg.src = 'images/logo-mini.webp';
    } else {
      header.classList.remove('reduit');
      logoImg.src = 'images/logo.webp';
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

document.addEventListener('DOMContentLoaded', () => {//MENU DEROULANT MOBILE

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.menu-overlay');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('ouvert');
        overlay.classList.toggle('ouvert');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('ouvert');
        overlay.classList.remove('ouvert');
    });
});