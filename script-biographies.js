

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

    // fermer les autres
    document.querySelectorAll('.item').forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    // ouvrir / fermer celui-ci
    item.classList.toggle('active');

  });
});
// Fonction de fondu entre les images
function switchImage(index) {
  const images = document.querySelectorAll('.accordeon-img img');

  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

// Accordéon + changement d'image
document.querySelectorAll('.item h3').forEach(title => {
  title.addEventListener('click', () => {
    const item = title.parentElement;

    // fermer les autres items
    document.querySelectorAll('.item').forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    // ouvrir / fermer celui-ci
    item.classList.toggle('active');

    // récupérer l'index du <li> cliqué
    const index = [...document.querySelectorAll('.item')].indexOf(item);

    // changer l'image selon cet index
    switchImage(index);
  });
});

