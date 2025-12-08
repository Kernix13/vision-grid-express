import { initHomePage } from './handlers/indexEvents.js';
import { getSearchResults } from './api/unsplash.js';
import { checkUserInput } from './utils/checkUserInput.js';
import { scrollFunction } from './handlers/globalEvents.js';
import { removeImageCard } from './ui/cards.js';
import { toggleMenu } from './handlers/globalEvents.js';
import { setModalContent } from './ui/modal.js';
import {
	clearSearchElements,
	renderSearchEls,
	saveSearchTerm,
} from './ui/searchEls.js';
import { addRemoveClass } from './ui/classUtils.js';
import {
	getLocalStorage,
	incrementSearchPage,
	setLocalStorage,
} from './utils/localStorage.js';

const form = document.getElementById('search-form');
const input = document.getElementById('search');
const searchTerms = document.getElementById('search-terms');
const clearSearches = document.getElementById('clear-searches');
const loadMore = document.getElementById('load-more');
const searchGrid = document.getElementById('search-grid');
const resultsTitle = document.getElementById('results-title');
const close = document.getElementById('close');
const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');
const hamburger = document.getElementById('hamburger');

/**
 * * EVENT LISTENERS
 */

// 1. Loads localStorage elements if they exist
document.addEventListener('DOMContentLoaded', initHomePage);

// 2. Handle & validate form input, fetch images, render results
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const savedSearches = getLocalStorage('search-phrases') || [];

	// Handle bad input characters
	const errorElement = document.querySelector('.error-message');
	if (checkUserInput(input, errorElement)) return;
	
	if (input.value) {
		errorElement.textContent = '';
		searchGrid.textContent = '';
		
		let searchPage = 1;

		// Fetch data
		getSearchResults(input.value, searchPage);
		// Render page elements
		renderSearchEls(input.value);
		
		// Save values to localStorage
		saveSearchTerm(input.value, savedSearches);
		setLocalStorage('current-search', {
			search: input.value,
			page: searchPage,
		});

		const saveNewSearch = { search: input.value, page: searchPage };
		const searchPhrasesPage = getLocalStorage('search-phrases-page') || [];
		searchPhrasesPage.push(saveNewSearch);
		setLocalStorage('search-phrases-page', searchPhrasesPage);
	}

	// Show hidden elements
	addRemoveClass(clearSearches, 'inline', 'none');
	addRemoveClass(loadMore, 'inline', 'none');
	addRemoveClass(resultsTitle, 'block', 'none');

	resultsTitle.scrollIntoView({ behavior: 'smooth' });

	input.value = '';
});

// 3. Fetch more images for current search term on Load More button click
loadMore.addEventListener('click', () => {
	const lastSearch = getLocalStorage('last-search');
	const page = incrementSearchPage(lastSearch);
	console.log(`Clicked load more for '${lastSearch}', page # ${page}`);

	searchGrid.textContent = '';

	// Fetch data
	getSearchResults(lastSearch, page);
	// Render page elements
	renderSearchEls(lastSearch);
});

// 4. Fetch more images if a past search term button is clicked
searchTerms.addEventListener('click', (e) => {
	const savedSearches = getLocalStorage('search-phrases') || [];
	const btn = e.target.closest('button');
	if (!btn) return;

	const searchTerm = btn.textContent;

	// Increment page number for search term
	const page = incrementSearchPage(searchTerm);
	console.log(`Clicked search term for '${searchTerm}', page # ${page}`);

	searchGrid.textContent = '';

	// Fetch data
	getSearchResults(searchTerm, page);
	// Render page elements
	renderSearchEls(searchTerm);
	// Save values to localStorage
	setLocalStorage('last-search', searchTerm);
	saveSearchTerm(searchTerm, savedSearches);
});

// 6. Search images grid: Handle clicks on Save or Remove buttons and removes the clicked image card from the DOM. Removes H2 when last card is removed
searchGrid.addEventListener('click', (e) => {
	removeImageCard(e);

	// Do I want to remove the results title if the user saves or removes every image?
	const renderedImages = searchGrid.querySelectorAll('img');
	if (renderedImages.length === 0) {
		addRemoveClass(resultsTitle, 'none', 'block');
	}
});

// 7. Search images grid: open image in modal on image click
searchGrid.addEventListener('click', (e) => {
	const img = e.target.closest('img.result-image');
	if (!img) return;

	const card = img.closest('.image-card');
	const cardId = card.id;
	
	modalBg.classList.add('show-modal');
	modalBg.hidden = false;
	setModalContent(innerModal, img.src, cardId);
});

// 8. Clear save searches and related buttons from the DOM
clearSearches.addEventListener('click', (e) => {
	// These 2 lines added to clear an Aria warning in console
	e.target.inert = true;
	e.target.hidden = true;
	// Resets localStorage for Home page related items
	clearSearchElements();
	document.querySelector('.error-message').textContent = '';
});

// 9. Close modal listeners on: 1. close button click, 2. window click, 3. Escape key keydown
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

