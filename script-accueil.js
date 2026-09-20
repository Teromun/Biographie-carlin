document.addEventListener('DOMContentLoaded', () => { // CARROUSEL IMAGE INDEX //
  const carrousel = document.querySelector('.inner .carrousel');
  if (!carrousel) return;

  const slides = carrousel.querySelectorAll('.carrousel-slide');
  let current = 0;
  const intervalMs = 5000;

  function goToNext() {
    const next = (current + 1) % slides.length;

    slides[current].classList.remove('active');
    slides[current].classList.add('prev');

    slides[next].classList.add('active');

    setTimeout(() => {
      slides[current].classList.remove('prev');
    }, 1000);

    current = next;
  }

  setInterval(goToNext, intervalMs);
});

document.addEventListener('DOMContentLoaded', () => { // CARROUSEL AVIS INDEX //
  const container = document.querySelector('.comm-container');
  const comms = container.querySelectorAll('.comm');
  const flecheDroite = document.querySelector('.fleche-droite');
  const flecheGauche = document.querySelector('.fleche-gauche');
  const dotsWrapper = document.querySelector('.dots');

  let current = 0;

  comms.forEach((_, i) => {
    const point = document.createElement('span');
    point.classList.add('point');
    if (i === 0) point.classList.add('actif');
    point.addEventListener('click', () => goToSlide(i));
    dotsWrapper.appendChild(point);
  });
  const dots = dotsWrapper.querySelectorAll('.point');

  function updateDots(index) {
    dots.forEach(d => d.classList.remove('actif'));
    dots[index].classList.add('actif');
  }

  function goToNext() {
    goToSlide((current + 1) % comms.length);
  }

  function goToPrev() {
    goToSlide((current - 1 + comms.length) % comms.length);
  }

  function goToSlide(nextIndex) {
    if (nextIndex === current) return;
    const direction = nextIndex > current ? 'droite' : 'gauche';
    changeSlide(nextIndex, direction);
  }

  function changeSlide(nextIndex, direction) {
    const sortante = comms[current];
    const entrante = comms[nextIndex];

    const enterFrom = direction === 'droite' ? '100%' : '-100%';
    const exitTo = direction === 'droite' ? '-100%' : '100%';

    entrante.style.transition = 'none';
    entrante.style.transform = `translateX(${enterFrom})`;
    void entrante.offsetWidth;
    entrante.style.transition = '';

    requestAnimationFrame(() => {
      sortante.classList.remove('actif');
      sortante.style.transform = `translateX(${exitTo})`;

      entrante.classList.add('actif');
      entrante.style.transform = 'translateX(0)';
    });

    updateDots(nextIndex);
    current = nextIndex;
  }

  flecheDroite.addEventListener('click', goToNext);
  flecheGauche.addEventListener('click', goToPrev);
});
