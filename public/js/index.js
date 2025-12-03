import { getSearchResults } from './api/unsplash.js';
import { scrollFunction, smoothScrollBackToTop } from './ui/backToTop.js';
import { removeImageCard } from './ui/cards.js';
import { initHomePage } from './ui/initPage.js';
import { menuButton } from './ui/menu.js';
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
const navMenu = document.getElementById('nav-menu');
const backToTopButton = document.querySelector('#back-to-top-btn');

// Why do I have these in the global scope? Do I need them here?
let searchPage = 0;
const savedSearches = getLocalStorage('search-phrases') || [];
const badCharacters = [' ',	'_',	'-',	'>',	'.',	'|',	';',	'[',	']',	'{',	'}',	'(',	')',	'*',	'`',	'~',	'"',	':'];

/**
 * * EVENT LISTENERS
 */

// 1. Set initial state on visit to home page
document.addEventListener('DOMContentLoaded', initHomePage);

// 2. Search form event listener (way too much inside this listener)
form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Handle bad input characters - create function in other file
	const errorElement = document.querySelector('.error-message');
	if (input.value === '' || badCharacters.includes(input.value)) {
		const errorMsg = input.value === '' 
			? "Please enter a search term"
			: "Invalid search term - please try again";
		errorElement.textContent = errorMsg;
		input.value = '';
		input.blur();
		return;
	}

	// Get user's search phrase
	if (input.value) {
		errorElement.textContent = '';
		searchGrid.textContent = '';
		
		searchPage = 1;

		// Fetch
		getSearchResults(input.value, searchPage, searchGrid);
		
		saveSearchTerm(input.value, searchTerms, savedSearches);
		renderSearchEls(input.value);
		setLocalStorage('current-search', {
			search: input.value,
			page: searchPage,
		});

		const saveNewSearch = { search: input.value, page: searchPage };
		const searchPhrasesPage = getLocalStorage('search-phrases-page') || [];
		searchPhrasesPage.push(saveNewSearch);
		setLocalStorage('search-phrases-page', searchPhrasesPage);
	}

	addRemoveClass(clearSearches, 'inline', 'none');
	addRemoveClass(loadMore, 'inline', 'none');
	addRemoveClass(resultsTitle, 'block', 'none');

	resultsTitle.scrollIntoView({ behavior: 'smooth' });

	input.value = '';
});

// 3. Load More button fetch
loadMore.addEventListener('click', () => {
	const lastSearch = getLocalStorage('last-search');
	const page = incrementSearchPage(lastSearch);

	console.log(`Clicked load more for '${lastSearch}', page # ${page}`);

	searchGrid.textContent = '';

	getSearchResults(lastSearch, page, searchGrid);
	saveSearchTerm(lastSearch, searchTerms, savedSearches);
	renderSearchEls(lastSearch);
});

// 4. Search terms fetch
searchTerms.addEventListener('click', (e) => {
	const btn = e.target.closest('button');
	if (!btn) return;

	const searchTerm = btn.textContent;

	const page = incrementSearchPage(searchTerm);
	console.log(`Clicked search term for '${searchTerm}', page # ${page}`);

	searchGrid.textContent = '';

	getSearchResults(searchTerm, page, searchGrid);
	setLocalStorage('last-search', searchTerm);
	saveSearchTerm(searchTerm, searchTerms, savedSearches);
	renderSearchEls(searchTerm);
});

// 6. Search images grid: Save and Remove buttons
searchGrid.addEventListener('click', (e) => {
	removeImageCard(e);

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
	setModalContent(innerModal, img, cardId);
});

// 8. Clear save searches and related buttons from the DOM
clearSearches.addEventListener('click', (e) => {
	// These 2 lines added to clear an Aria warning in console
	e.target.inert = true;
	e.target.hidden = true;
	clearSearchElements();
});

// 9. Close modal listeners on click of: 1. close button, 2. window, 3. Escape key
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
	menuButton(hamburger, navMenu);
});

// 10. Back To Top
window.addEventListener('scroll', scrollFunction);
