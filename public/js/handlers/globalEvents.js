import { stopImageSlider } from '../ui/savedImages.js';

const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const backToTopButton = document.querySelector('#back-to-top-btn');

console.log('I always run');
// If device is 962px (menu media query) or less wide, add aria-expanded attribute
function setAriaExpanded() {
	const width = document.documentElement.clientWidth;
	if (width <= 962) {
		hamburger.setAttribute('aria-expanded', false);
	}
}
setAriaExpanded();

/**
 * * Close Home and Board page modal
 */
export function closeModal() {
	modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
	innerModal.classList.remove('play');
	stopImageSlider();
}

/**
 * * Toggle mobile menu - this function is from previous projects
 */
export function toggleMenu() {
	/* Toggle active class */
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');

	/* Toggle aria-expanded & aria-hidden values */
	const menuOpen = navMenu.classList.contains('active');
	hamburger.setAttribute('aria-expanded', menuOpen);
	navMenu.setAttribute('aria-hidden', !menuOpen);
}

/**
 * * Code from CodePen: https://codepen.io/Coding_Journey/pen/LMrLQV
 * Display or hide back-to-top btn based on scrollY
 */
export function scrollFunction() {
	if (window.scrollY > 600) {
		// Show backToTopButton
		if (!backToTopButton.classList.contains('btnEntrance')) {
			backToTopButton.classList.remove('btnExit');
			backToTopButton.classList.add('btnEntrance');
			backToTopButton.style.display = 'block';
		}
	} else {
		// Hide backToTopButton
		if (backToTopButton.classList.contains('btnEntrance')) {
			backToTopButton.classList.remove('btnEntrance');
			backToTopButton.classList.add('btnExit');
			setTimeout(() => {
				backToTopButton.style.display = 'none';
			}, 125);
		}
	}
}

/**
 * Control scroll animation
 */
export function smoothScrollBackToTop() {
	const duration = 1250;
	let start = null;

	const startPosition = window.scrollY;
	const distanceToTop = -1 * startPosition;

	window.requestAnimationFrame(step);

	/**
	 * Synchronize animation using timestamp
	 */
	function step(timestamp) {
		if (!start) start = timestamp;

		const progress = timestamp - start;
		window.scrollTo(
			0,
			easeInOutCubic(progress, startPosition, distanceToTop, duration),
		);

		if (progress < duration) window.requestAnimationFrame(step);
	}
}

/**
 *
 * Cubic-bezier function for scroll animation
 */
function easeInOutCubic(prog, startPos, dist, dur) {
	prog /= dur / 2;
	if (prog < 1) {
		return (dist / 2) * prog * prog * prog + startPos;
	}
	prog -= 2;
	return (dist / 2) * (prog * prog * prog + 2) + startPos;
}
