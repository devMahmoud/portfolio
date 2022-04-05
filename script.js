const hamburgerBtn = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('navbar-links')[0];
const logo = document.getElementsByClassName('logo')[0];
const mailIicon = document.getElementsByClassName('mail-icon')[0];
const header = document.getElementById('header');

const menuToggle = () => {
  header.classList.toggle('header-mobile-menu-opened');
  navLinks.classList.toggle('active-navbar');
  logo.classList.toggle('inactive');
  hamburgerBtn.classList.toggle('toggle-button-opened');
  mailIicon.classList.toggle('inactive');
};

hamburgerBtn.addEventListener('click', menuToggle);

navLinks.addEventListener('click', menuToggle);