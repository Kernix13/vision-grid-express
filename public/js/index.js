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
 * * EVENT LISTENERS
 */

// 1. Loads localStorage elements if they exist
document.addEventListener('DOMContentLoaded', initHomePage);

// 2. Handle & validate form input, fetch images, render results
form.addEventListener('submit', handleFormSubmit);

// 3. Fetch more images for current search term on Load More button click
loadMore.addEventListener('click', handleLoadMoreBtn);

// 4. Fetch more images if a past search term button is clicked
searchTerms.addEventListener('click', handleSearchTermBtn);

// 5. Remove card when card button is clicked
searchGrid.addEventListener('click', (e) => {
	removeImageCard(e);

	// Remove the results title if the user saves or removes every image?
	const cardImages = searchGrid.querySelectorAll('img');
	if (cardImages.length === 0) addRemoveClass(resultsTitle, 'none', 'block');
});

// 6. Search images grid: open image in modal on image click
searchGrid.addEventListener('click', addCardImageToModal);

// 7. Clear save searches and related buttons from the DOM
clearSearches.addEventListener('click', (e) => {
	// These 2 lines added to clear an Aria warning in console
	e.target.inert = true;
	e.target.hidden = true;

	clearSearchElements();
	document.querySelector('.error-message').textContent = '';
});

// 8. Close modal listeners on: 1. close button click, 2. window click, 3. Escape key keydown
close.addEventListener('click', () => {
	modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
});

window.addEventListener('click', (e) => {
	if (e.target === modalBg) {
    modalBg.classList.remove('show-modal');
    modalBg.hidden = true;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
});

// 9. Open/close hamburger menu
hamburger.addEventListener('click', () => {
	toggleMenu();
});

// 10. Back To Top button
window.addEventListener('scroll', scrollFunction);