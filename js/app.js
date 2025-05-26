// Preloader
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  preloader.style.opacity = '0';
  setTimeout(() => preloader.style.display = 'none', 500);
  
  // Video fallback check
  if (document.querySelector('video').error) {
    document.querySelector('.hero-video').classList.add('no-video');
  }
});

// Initialize ScrollReveal
ScrollReveal().reveal('.hero-content', { 
  delay: 300,
  distance: '50px',
  origin: 'bottom'
});

ScrollReveal().reveal('.about-img, .about-text', {
  delay: 400,
  distance: '100px',
  origin: 'left',
  interval: 100
});

ScrollReveal().reveal('.service-card', {
  delay: 300,
  distance: '50px',
  origin: 'bottom',
  interval: 200
});

ScrollReveal().reveal('.project-item', {
  delay: 300,
  distance: '50px',
  origin: 'bottom',
  interval: 200
});

ScrollReveal().reveal('.team-card', {
  delay: 300,
  distance: '50px',
  origin: 'bottom',
  interval: 200
});

// Lightbox functionality
document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    document.querySelector('.lightbox-img').src = imgSrc;
    document.querySelector('.lightbox').style.display = 'flex';
  });
});

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.lightbox').style.display = 'none';
});
