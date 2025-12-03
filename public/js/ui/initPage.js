import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';
import { createImgCard } from './cards.js';
import { addSearchTerm, addSearchText } from './searchEls.js';
import { addThumbnailsToDom } from './thumbnails.js';
import { addSavedImagesToDom } from './savedImages.js';

const searchTerms = document.getElementById('search-terms');
const clearSearches = document.getElementById('clear-searches');
const resultsTitle = document.getElementById('results-title');
const searchGrid = document.getElementById('search-grid');
const loadMore = document.getElementById('load-more');
const input = document.getElementById('board-title');
const h1 = document.querySelector('.board-page-title');

// 1. For Home page DOMContentLoaded listener
export function initHomePage() {
	if (
		!getLocalStorage('search-phrases') ||
		!getLocalStorage('fetched-search-results')
	) {
		setLocalStorage('search-phrases', []);

		clearSearches.classList.add('none');
		loadMore.classList.add('none');
		resultsTitle.classList.add('none');
	} else {
		const savedSearches = getLocalStorage('search-phrases');
		const images = getLocalStorage('fetched-search-results');

		searchTerms.textContent = '';

		addSearchTerm(searchTerms, savedSearches);
		addSearchText(loadMore, 'Load 12 more images for ', 'load-more-search');
		addSearchText(resultsTitle, 'Results for ', 'h2-search-term');

		const loadMoreText = 'Start new search & clear search results';
		addSearchText(clearSearches, loadMoreText, 'clear-searches');

		createImgCard(images, searchGrid);
	}
}

export function initBoardPage() {
	const savedImages = getLocalStorage('saved-images');
	if (savedImages.length > 0) {
		addThumbnailsToDom();
		addSavedImagesToDom();
	}

	const boardTitle = getLocalStorage('board-title') || 'Your Project Board';
  h1.textContent = boardTitle;
	// I can't believe I used 'input' and it works?!?
  input.value = boardTitle;
}
