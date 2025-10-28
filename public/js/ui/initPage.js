import { setLocalStorage, getLocalStorage } from "../utils/localStorage.js";

const clearSearches = document.getElementById('clear-searches');
const loadMore = document.getElementById('load-more');
const resultsTitle = document.getElementById('results-title');
const searchTerms = document.getElementById('search-terms');

// 1. For Home page DOMContentLoaded listener
export function onPageVisits() {
  if (!getLocalStorage('search-phrases') || !getLocalStorage('fetched-search-results') ) {
    setLocalStorage('search-phrases', []);
    clearSearches.classList.add('none');
    loadMore.classList.add('none');
    resultsTitle.classList.add('none');
  } else {
    console.log('I need savedSearches, images, searchTerms, addSearchTerm, addSearchText, & createImgCard');

    // const savedSearches = getLocalStorage('search-phrases');
    // const images = getLocalStorage('fetched-search-results');
    // searchTerms.textContent = '';

    // addSearchTerm(searchTerms, savedSearches);
    // addSearchText(loadMore, 'Load 12 more images for ', 'load-more-search');
    // addSearchText(resultsTitle, 'Results for ', 'h2-search-term');

    // createImgCard(images, searchGrid);
  }
}