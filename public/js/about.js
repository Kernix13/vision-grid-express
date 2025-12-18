import {
	scrollFunction,
	smoothScrollBackToTop,
	toggleMenu,
} from './handlers/globalEvents.js';
import { copyrightYear } from './utils/currentYear.js';

const hamburger = document.getElementById('hamburger');
const backToTopButton = document.getElementById('back-to-top-btn');

/**
 * * EVENT LISTENERS
 */
// 1. Open/close hamburger menu
hamburger.addEventListener('click', toggleMenu);

// 2. Show Back To Top button
window.addEventListener('scroll', scrollFunction);

// 3. Back To Top button listener
backToTopButton.addEventListener('click', smoothScrollBackToTop);

/**
 * * Set Copyright year in footer
 */
document.getElementById('year').textContent = copyrightYear();
