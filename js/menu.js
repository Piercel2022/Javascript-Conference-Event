const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});