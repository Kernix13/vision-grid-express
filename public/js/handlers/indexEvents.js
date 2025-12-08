import { getLocalStorage,setLocalStorage } from "../utils/localStorage.js";
import { createImgCard } from "../ui/cards.js";
import { addSearchTerm, addSearchText } from "../ui/searchEls.js";

const clearSearches = document.getElementById('clear-searches');
const loadMore = document.getElementById('load-more');
const resultsTitle = document.getElementById('results-title');
const searchTerms = document.getElementById('search-terms');

export function initHomePage() {
  if (
    !getLocalStorage('search-phrases') ||
    !getLocalStorage('fetched-search-results')
  ) {
    setLocalStorage('search-phrases', []);

    // I should not have empty elements in the DOM, I should be creating them
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

    createImgCard(images);
  }
}