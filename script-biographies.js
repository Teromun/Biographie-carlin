

document.addEventListener('DOMContentLoaded', () => { //ACCORDEON BIOGRAPHIES //

  const items = document.querySelectorAll('.accordeon .item');
  const images = document.querySelectorAll('.accordeon-img');
  

  items[0].classList.add('active');
  images[0].classList.add('active');

  const firstGras = items[0].querySelector('.gras');
  if (firstGras) {
    setTimeout(() => {
      firstGras.classList.add('show');
    }, 2000);
  }

  function fermerGrasInstantanement(gras) {
    gras.style.transition = 'none';
    gras.classList.remove('show');
    void gras.offsetWidth; 
    gras.style.transition = '';
  }



  items.forEach((item, index) => {

    const title = item.querySelector('h3');

    title.addEventListener('click', () => {

      const isAlreadyActive = item.classList.contains('active');

      if (isAlreadyActive) return;

      items.forEach(i => {
        i.classList.remove('active');
        const gras = i.querySelector('.gras');
        if (gras) fermerGrasInstantanement(gras);
      });

      images.forEach(img => img.classList.remove('active'));

      item.classList.add('active');
      images[index].classList.add('active');

      const gras = item.querySelector('.gras');
      if (gras) {
        setTimeout(() => {
          gras.classList.add('show');
        }, 2000);
      }
    });
  });
});

document.querySelectorAll('.item h3').forEach(title => {
  title.addEventListener('click', () => {
    const item = title.parentElement;

    document.querySelectorAll('.item').forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    item.classList.toggle('active');

  });
});

function switchImage(index) {
  const images = document.querySelectorAll('.accordeon-img img');

  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

document.querySelectorAll('.item h3').forEach(title => {
  title.addEventListener('click', () => {
    const item = title.parentElement;

    document.querySelectorAll('.item').forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    item.classList.toggle('active');

    const index = [...document.querySelectorAll('.item')].indexOf(item);

    switchImage(index);
  });
});

document.querySelectorAll('*').forEach(el => {
  const r = el.getBoundingClientRect();

  if (r.right > document.documentElement.clientWidth) {
    console.log(el, r.right);
  }
});
