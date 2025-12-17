import { getSearchResults } from '../api/unsplash.js';
import { createImgCard, removeImageCard } from '../ui/cards.js';
import { addRemoveClass } from '../ui/classUtils.js';
import { setModalContent } from '../ui/modal.js';
import {
	addSearchTerm,
	renderSearchEls,
	saveSearchTerm,
} from '../ui/searchEls.js';
import { checkUserInput } from '../utils/checkUserInput.js';
import {
	getLocalStorage,
	incrementSearchPage,
	setLocalStorage,
} from '../utils/localStorage.js';

// Form input:
const input = document.getElementById('search');
// Page elements:
const searchTerms = document.getElementById('search-terms');
const clearSearches = document.getElementById('clear-searches');
const resultsTitle = document.getElementById('results-title');
const searchGrid = document.getElementById('search-grid');
const loadMore = document.getElementById('load-more');
// Image modal elements:
const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');

/**
 * * 1. Loads localStorage elements if they exist
 */
export function initHomePage() {
	const savedSearches = getLocalStorage('search-phrases');
	const images = getLocalStorage('fetched-search-results');
	if (!savedSearches || !images) {
		setLocalStorage('search-phrases', []);
	} else {
		searchTerms.textContent = '';

		// Add search phrase(s) as button(s)
		addSearchTerm(searchTerms, savedSearches);

		// Render search related heading and buttons
		renderSearchEls();

		// Render image cards
		createImgCard(images);
	}
}

/**
 * * 2. Handle & validate form input, fetch images, render results
 */
export function handleFormSubmit(event) {
	event.preventDefault();
	const savedSearches = getLocalStorage('search-phrases') || [];

	// Handle bad input characters - can I call checkUserInput in getSearchResults instead?
	const errorElement = document.querySelector('.error-message');
	if (checkUserInput(input, errorElement)) return;

	if (input.value) {
		errorElement.textContent = '';
		searchGrid.textContent = '';

		const searchPage = 1;

		// Fetch data
		getSearchResults(input.value, searchPage);

		// Save 3 values to localStorage
		setLocalStorage('last-search', input.value);
		saveSearchTerm(input.value, savedSearches);
		const newSearch = { search: input.value, page: searchPage };
		const searchPhrasesPage = getLocalStorage('search-phrases-page') || [];
		searchPhrasesPage.push(newSearch);
		setLocalStorage('search-phrases-page', searchPhrasesPage);

		// Render search related heading and buttons
		renderSearchEls();
	}

	// Show hidden elements
	addRemoveClass(clearSearches, 'inline', 'none');
	addRemoveClass(resultsTitle, 'block', 'none');
	addRemoveClass(loadMore, 'inline', 'none');

	resultsTitle.scrollIntoView({ behavior: 'smooth' });

	input.value = '';
}

/**
 * * 3. Fetch more images for Load More button click
 */
export function handleLoadMoreBtn() {
	const lastSearch = getLocalStorage('last-search');
	// Increment page number for search term clicked
	const page = incrementSearchPage(lastSearch);

	searchGrid.textContent = '';

	// Fetch data
	getSearchResults(lastSearch, page);
	// Render search related heading and buttons
	renderSearchEls();
}

/**
 * * 4. Fetch more images if a past search term button is clicked
 */
export function handleSearchTermBtn(event) {
  const savedSearches = getLocalStorage('search-phrases') || [];
  // EVENT DELEGATION: clicked button inside search-terms container
  const btn = event.target.closest('button');
  if (!btn) return;

  const searchTerm = btn.textContent;

  // Increment page number for search term clicked
  const page = incrementSearchPage(searchTerm);

  searchGrid.textContent = '';

  // Fetch data
  getSearchResults(searchTerm, page);
  // Save values to localStorage: 'last-search' & 'search-phrases'
  setLocalStorage('last-search', searchTerm);
  saveSearchTerm(searchTerm, savedSearches);
  // Render search related heading and buttons
  renderSearchEls();
}

/**
 * * 6. Search images grid: open image in modal on image click
 */
export function addCardImageToModal(event) {
	const images = getLocalStorage('fetched-search-results');
	// EVENT DELEGATION: clicked image inside search-grid container
	const img = event.target.closest('img.result-image');
	if (!img) return;

	// EVENT DELEGATION: the card for the image clicked
	const card = img.closest('.image-card');
	const cardId = card.id;

	// Get the clicked image object from LocalStorage
	const cardImgId = images.findIndex((img) => img.id === cardId);
	const cardImgObj = images[cardImgId];

	modalBg.classList.add('show-modal');
	modalBg.hidden = false;
	setModalContent(innerModal, cardImgObj.imageRegular, cardId);
}

export function removeCardOnBtnClick(event) {
	const cardBtn = event.target.closest('.results-buttons button');
		if (!cardBtn) return;
	
		removeImageCard(event);
	
		// Remove the results title if the user saves or removes last card?
		const cardImages = searchGrid.querySelectorAll('img');
		if (cardImages.length === 0) {
			addRemoveClass(resultsTitle, 'none', 'block');
		}
}