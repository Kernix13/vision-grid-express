import { toggleMenu } from './handlers/globalEvents.js';
import { scrollFunction } from './handlers/globalEvents.js';

const hamburger = document.getElementById('hamburger');
const backToTopButton = document.querySelector('#back-to-top-btn');

/**
 * * EVENT LISTENERS
 */
// Open/close hamburger menu
hamburger.addEventListener('click', () => {
  toggleMenu();
});

// Back To Top
window.addEventListener('scroll', scrollFunction);