import { addRemoveClass } from '../ui/classUtils.js';
import {
	getLocalStorage,
	removeLocalStorage,
	setLocalStorage,
} from '../utils/localStorage.js';

const searchTerms = document.getElementById('search-terms');
const clearSearches = document.getElementById('clear-searches');
const resultsTitle = document.getElementById('results-title');
const searchGrid = document.getElementById('search-grid');
const loadMore = document.getElementById('load-more');

// This should not be in this file
export function saveSearchTerm(str, arr) {
	// Make sure the search term is not the last search term
	if (str !== arr[arr.length - 1]) {
		searchTerms.textContent = '';
		// Splice the search term out of the search terms array
		if (arr.includes(str)) {
			arr.splice(arr.indexOf(str), 1);
		}
		// push the search term to the end so it renders as the last button
		arr.push(str);
		setLocalStorage('search-phrases', arr);
		addSearchTerm(searchTerms, arr);
	}
}

// Does this function make sense? NO! 🚫
export function renderSearchEls() {
	// Display load more button & button text
	loadMore.hidden = false;
	addSearchText(loadMore, 'Load 12 more images for ', 'load-more-search');

	// Show search grid title and title text
	resultsTitle.hidden = false;
	addSearchText(resultsTitle, 'Results for ', 'h2-search-term');

	// Show clear searches button and button text
	const loadMoreText = 'Start new search & clear search results';
	clearSearches.hidden = false;
	addSearchText(clearSearches, loadMoreText);
}

// Adds the textcontent and a span class for elements on the home page
export function addSearchText(el, text, spanClass) {
	el.textContent = '';
	el.textContent = text;

	// span class not needed for the clear search results button
	if (el !== clearSearches) {
		const span = document.createElement('span');
		span.className = spanClass;
		const spanText = getLocalStorage('last-search');
		span.textContent = spanText;

		el.append(span);
	}
}

// Adds each user search term/phrase to the DOM as buttons
export function addSearchTerm(parent, arr) {
	arr.forEach((item) => {
		const button = document.createElement('button');
		button.textContent = item;
		parent.append(button);
	});
}

// Buttons that clears the home page search related elements and buttons
export function clearSearchElements() {
	// 1. Reset local storage
	setLocalStorage('search-phrases-page', []);
	removeLocalStorage('fetched-search-results');
	removeLocalStorage('last-search');
	removeLocalStorage('search-phrases');

	// 2. Clear DOM content
	searchTerms.textContent = '';
	resultsTitle.textContent = '';
	searchGrid.textContent = '';
	loadMore.textContent = '';
	clearSearches.textContent = '';

	// 3. Hide UI elements
	addRemoveClass(clearSearches, 'none', 'inline');
	addRemoveClass(loadMore, 'none', 'inline');
	addRemoveClass(resultsTitle, 'none', 'block');
}
