import { menuButton } from './ui/menu.js';
import { scrollFunction, smoothScrollBackToTop } from './ui/backToTop.js';

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const backToTopButton = document.querySelector('#back-to-top-btn');

/**
 * * EVENT LISTENERS
 */
// Open/close hamburger menu
hamburger.addEventListener('click', () => {
  menuButton(hamburger, navMenu);
});

// Back To Top
window.addEventListener('scroll', scrollFunction);
backToTopButton.addEventListener('click', smoothScrollBackToTop);