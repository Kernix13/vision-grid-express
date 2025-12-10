import { getSearchResults } from '../api/unsplash.js';
import { createImgCard } from '../ui/cards.js';
import { addRemoveClass } from '../ui/classUtils.js';
import { setModalContent } from '../ui/modal.js';
import {
	addSearchTerm,
	addSearchText,
	renderSearchEls,
	saveSearchTerm,
} from '../ui/searchEls.js';
import { checkUserInput } from '../utils/checkUserInput.js';
import {
	getLocalStorage,
	incrementSearchPage,
	setLocalStorage,
} from '../utils/localStorage.js';

const input = document.getElementById('search');
const clearSearches = document.getElementById('clear-searches');
const loadMore = document.getElementById('load-more');
const resultsTitle = document.getElementById('results-title');
const searchTerms = document.getElementById('search-terms');
const searchGrid = document.getElementById('search-grid');
const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');

/**
 * * 1. Loads localStorage elements if they exist
 */
export function initHomePage() {
	if (
		!getLocalStorage('search-phrases') ||
		!getLocalStorage('fetched-search-results')
	) {
		setLocalStorage('search-phrases', []);

		// Should I have empty elements in the DOM, or should I be creating them?
		// These elements show even with no page search elements
		clearSearches.classList.add('none');
		loadMore.classList.add('none');
		resultsTitle.classList.add('none');
	} else {
		const savedSearches = getLocalStorage('search-phrases');
		const images = getLocalStorage('fetched-search-results');

		searchTerms.textContent = '';

		// Add search phrase as button
		addSearchTerm(searchTerms, savedSearches);

		loadMore.hidden = false;
		addSearchText(loadMore, 'Load 12 more images for ', 'load-more-search');

		resultsTitle.hidden = false;
		addSearchText(resultsTitle, 'Results for ', 'h2-search-term');

		const loadMoreText = 'Start new search & clear search results';
		clearSearches.hidden = false;
		addSearchText(clearSearches, loadMoreText);

		createImgCard(images);
	}
}

/**
 * * 2. Handle & validate form input, fetch images, render results
 */
export function handleFormSubmit(event) {
	event.preventDefault();
	const savedSearches = getLocalStorage('search-phrases') || [];

	// Handle bad input characters
	const errorElement = document.querySelector('.error-message');
	if (checkUserInput(input, errorElement)) return;

	if (input.value) {
		errorElement.textContent = '';
		searchGrid.textContent = '';

		const searchPage = 1;

		// Fetch data
		getSearchResults(input.value, searchPage);
		// Render page elements
		renderSearchEls(input.value);

		// Save 3 values to localStorage
		// 1. 'search-phrases':
		saveSearchTerm(input.value, savedSearches);
		// 2. 'current-search'
		setLocalStorage('current-search', {
			search: input.value,
			page: searchPage,
		});
		// 3. 'search-phrases-page'
		const newSearch = { search: input.value, page: searchPage };
		const searchPhrasesPage = getLocalStorage('search-phrases-page') || [];
		searchPhrasesPage.push(newSearch);
		setLocalStorage('search-phrases-page', searchPhrasesPage);
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
	const page = incrementSearchPage(lastSearch);

	searchGrid.textContent = '';

	// Fetch data
	getSearchResults(lastSearch, page);
	// Render page elements
	renderSearchEls(lastSearch);
}

/**
 * * 4. Fetch more images if a past search term button is clicked
 */
export function handleSearchTermBtn(event) {
	const savedSearches = getLocalStorage('search-phrases') || [];
	const btn = event.target.closest('button');
	if (!btn) return;

	const searchTerm = btn.textContent;

	// Increment page number for search term clicked
	const page = incrementSearchPage(searchTerm);

	searchGrid.textContent = '';

	// Fetch data
	getSearchResults(searchTerm, page);
	// Render page elements
	renderSearchEls(searchTerm);
	// Save values to localStorage: 'last-search' & 'search-phrases'
	setLocalStorage('last-search', searchTerm);
	saveSearchTerm(searchTerm, savedSearches);
}

/**
 * * 6. Search images grid: open image in modal on image click
 */
export function addCardImageToModal(event) {
	const images = getLocalStorage('fetched-search-results');
	const img = event.target.closest('img.result-image');
	if (!img) return;
	
	const card = img.closest('.image-card');
	const cardId = card.id;
	
	// Get the clicked image object from LocalStorage
	const cardImgId = images.findIndex(img => img.id === cardId)
	const cardImgObject = images[cardImgId]

	modalBg.classList.add('show-modal');
	modalBg.hidden = false;
	setModalContent(innerModal, cardImgObject.imageRegular, cardId);
}
