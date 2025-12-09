import { 
	initHomePage, 
	handleLoadMoreBtn, 
	handleSearchTermBtn,
	addCardImageToModal,
	handleFormSubmit
} from './handlers/indexEvents.js';
import { scrollFunction } from './handlers/globalEvents.js';
import { removeImageCard } from './ui/cards.js';
import { toggleMenu } from './handlers/globalEvents.js';
import { clearSearchElements } from './ui/searchEls.js';
import { addRemoveClass } from './ui/classUtils.js';

const form = document.getElementById('search-form');
const searchTerms = document.getElementById('search-terms');
const clearSearches = document.getElementById('clear-searches');
const loadMore = document.getElementById('load-more');
const searchGrid = document.getElementById('search-grid');
const resultsTitle = document.getElementById('results-title');
const close = document.getElementById('close');
const modalBg = document.getElementById('modal-bg');
const hamburger = document.getElementById('hamburger');

/**
 * * GLOBAL UI LISTENERS
 */
// 1. Loads localStorage fetched image objects if they exist
document.addEventListener('DOMContentLoaded', initHomePage);

// 2. Open/close hamburger menu
hamburger.addEventListener('click', () => {
	toggleMenu();
});

// 3. Back To Top button
window.addEventListener('scroll', scrollFunction);

/**
 * * Unsplash API fetch listeners
 */
// 4. Handle & validate form input, fetch images, render results
form.addEventListener('submit', handleFormSubmit);

// 5. Fetch more images for current search term on Load More button click
loadMore.addEventListener('click', handleLoadMoreBtn);

// 6. Fetch more images on click of a past search term button
searchTerms.addEventListener('click', handleSearchTermBtn);

/**
 * * Results/grid card image, card buttons, & image modal listeners
 */
// 7. Open image in modal on card image click
searchGrid.addEventListener('click', addCardImageToModal);

// 8. Remove card when Save/Remove button is clicked
searchGrid.addEventListener('click', (e) => {
	removeImageCard(e);

	// Remove the results title if the user saves or removes every image?
	const cardImages = searchGrid.querySelectorAll('img');
	if (cardImages.length === 0) addRemoveClass(resultsTitle, 'none', 'block');
});

// 9. Close modal listener on close button click
close.addEventListener('click', () => {
	modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
});

// 10. Close modal listener on window click 
window.addEventListener('click', (e) => {
	if (e.target === modalBg) {
    modalBg.classList.remove('show-modal');
    modalBg.hidden = true;
  }
});

// 11. Close modal listener on Escape key keydown
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
});

/**
 * * Page/search reset listener
 */
// 7. Clear save searches and related buttons & elements from DOM
clearSearches.addEventListener('click', (e) => {
	// These 2 lines added to clear an Aria warning in console
	e.target.inert = true;
	e.target.hidden = true;

	clearSearchElements();
	document.querySelector('.error-message').textContent = '';
});