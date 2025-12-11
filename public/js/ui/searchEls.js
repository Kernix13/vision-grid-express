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

// Does this function make sense?
export function renderSearchEls(str) {
	setLocalStorage('last-search', str);

	loadMore.hidden = false;
	addSearchText(loadMore, 'Load 12 more images for ', 'load-more-search');

	resultsTitle.hidden = false;
	addSearchText(resultsTitle, 'Results for ', 'h2-search-term');

	const loadMoreText = 'Start new search & clear search results';
	clearSearches.hidden = false;
	addSearchText(clearSearches, loadMoreText);
}

export function addSearchText(el, text, spanClass) {
	el.textContent = '';
	el.textContent = text;

	if (el !== clearSearches) {
		const span = document.createElement('span');
		span.className = spanClass;
		const spanText = getLocalStorage('last-search');
		span.textContent = spanText;

		el.append(span);
	}
}

export function addSearchTerm(parent, arr) {
	arr.forEach((item) => {
		const button = document.createElement('button');
		button.textContent = item;
		parent.append(button);
	});
}

export function clearSearchElements() {
	setLocalStorage('search-phrases-page', []);
	
	removeLocalStorage('fetched-search-results');
	removeLocalStorage('last-search');
	removeLocalStorage('current-search');
	removeLocalStorage('search-phrases');

	searchTerms.textContent = '';
	resultsTitle.textContent = '';
	searchGrid.textContent = '';
	loadMore.textContent = '';

	addRemoveClass(clearSearches, 'none', 'inline');
	addRemoveClass(loadMore, 'none', 'inline');
	addRemoveClass(resultsTitle, 'none', 'block');
}
