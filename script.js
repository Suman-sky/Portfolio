const roles = ['Web developer', 'Web designer'];
const images = [
  {src:'images/Pic.jpg', alt:'My Pic 1'},
  {src:'images/IMG-20261004-WA0142.jpg', alt:'My Pic 2'},
  {src:'https://picsum.photos/seed/creativecode/900/700', alt:'Creative coding setup'}
];

const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
if (menuToggle && navbar) {
  menuToggle.addEventListener('click', () => {
    const open = navbar.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
  });
  navbar.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navbar.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

const roleText = document.getElementById('roleText');
if (roleText) {
  let roleIndex = 0;
  setInterval(() => {
    roleText.style.opacity = '0';
    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleText.textContent = roles[roleIndex];
      roleText.style.opacity = '1';
    }, 250);
  }, 2500);
}

const heroImage = document.getElementById('heroImage');
const imageNumber = document.getElementById('imageNumber');
if (heroImage) {
  let imageIndex = 0;
  setInterval(() => {
    heroImage.style.opacity = '0';
    setTimeout(() => {
      imageIndex = (imageIndex + 1) % images.length;
      heroImage.src = images[imageIndex].src;
      heroImage.alt = images[imageIndex].alt;
      if (imageNumber) imageNumber.textContent = String(imageIndex + 1).padStart(2, '0');
      heroImage.style.opacity = '1';
    }, 300);
  }, 3000);
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
