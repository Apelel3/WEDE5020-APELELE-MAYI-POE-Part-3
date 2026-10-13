// lightbox.js - Apelele Hair Collection
document.addEventListener('DOMContentLoaded', () => {
  // Create lightbox container dynamically
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox-modal';
  lightbox.className = 'lightbox-modal';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-close" aria-label="Close lightbox">&times;</span>
      <img class="lightbox-img" src="" alt="Enlarged view">
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  // Select images to apply lightbox effect (.service-image, .hero-graphic)
  const images = document.querySelectorAll('.service-image, .hero-graphic');

  images.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Enlarged image';
    });
  });

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      closeLightbox();
    }
  });
});