import {
	scrollFunction,
	smoothScrollBackToTop,
	toggleMenu,
} from './handlers/globalEvents.js';
import {
	addCardImageToModal,
	handleFormSubmit,
	handleLoadMoreBtn,
	handleSearchTermBtn,
	initHomePage,
	removeCardOnBtnClick,
} from './handlers/indexEvents.js';
import { clearSearchElements } from './ui/searchEls.js';
import { copyrightYear } from './utils/currentYear.js';

// Input search form and page elements:
const form = document.getElementById('search-form');
const searchTerms = document.getElementById('search-terms');
const clearSearches = document.getElementById('clear-searches');
const searchGrid = document.getElementById('search-grid');
const loadMore = document.getElementById('load-more');
// Image modal elements:
const close = document.getElementById('close');
const modalBg = document.getElementById('modal-bg');
// Menu and B2T elements
const hamburger = document.getElementById('hamburger');
const backToTopButton = document.getElementById('back-to-top-btn');

/**
 * * GLOBAL UI LISTENERS
 */
// 1. Load localStorage fetched image objects if they exist
document.addEventListener('DOMContentLoaded', initHomePage);

// 2. Open/close hamburger menu
hamburger.addEventListener('click', toggleMenu);

// 3. Show Back To Top button
window.addEventListener('scroll', scrollFunction);

// 4. Back To Top button listener
backToTopButton.addEventListener('click', smoothScrollBackToTop);

/**
 * * Unsplash API fetch listeners
 */
// 5. Handle & validate form input, fetch images, render results
form.addEventListener('submit', handleFormSubmit);

// 6. Fetch more images for current search term on Load More button click
loadMore.addEventListener('click', handleLoadMoreBtn);

// 7. Fetch more images on click of a past search term button
searchTerms.addEventListener('click', handleSearchTermBtn);

/**
 * * Results/grid card image, card buttons, & image modal listeners
 */
// 8. Open image in modal on card image click
searchGrid.addEventListener('click', addCardImageToModal);

// 9. Remove card when Save/Remove button is clicked
searchGrid.addEventListener('click', removeCardOnBtnClick);

// 10. Close image modal listener on close button click
close.addEventListener('click', () => {
	modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
});

// 11. Close image modal listener on window click
window.addEventListener('click', (e) => {
	if (e.target === modalBg) {
		modalBg.classList.remove('show-modal');
		modalBg.hidden = true;
	}
});

// 12. Close image modal listener on Escape key keydown
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		modalBg.classList.remove('show-modal');
		modalBg.hidden = true;
	}
});

/**
 * * Page/search reset listener
 */
// 13. Clear search results and related elements from DOM & localSttorage
clearSearches.addEventListener('click', (e) => {
	// These 2 lines added to clear an Aria warning in console
	e.target.inert = true;
	e.target.hidden = true;

	clearSearchElements();
	document.querySelector('.error-message').textContent = '';
});

/**
 * * Set Copyright year in footer
 */
document.getElementById('year').textContent = copyrightYear();
