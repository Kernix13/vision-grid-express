import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from '../utils/localStorage.js';
import { addRemoveClass } from '../utils/classUtils.js';

const searchTerms = document.getElementById('search-terms');
const clearSearches = document.getElementById('clear-searches');
const resultsTitle = document.getElementById('results-title');
const searchGrid = document.getElementById('search-grid');
const loadMore = document.getElementById('load-more');

export function saveSearchTerm(str, el, arr) {
  if (str !== arr[arr.length - 1]) {
    el.textContent = '';
    if (arr.includes(str)) {
      arr.splice(arr.indexOf(str), 1);
    }
    arr.push(str);
    setLocalStorage('search-phrases', arr);
    addSearchTerm(el, arr);
  }
}

// Does this function make sense?
export function renderSearchEls(str) {
  setLocalStorage('last-search', str);
  addSearchText(loadMore, 'Load 12 more images for ', 'load-more-search');
  addSearchText(resultsTitle, 'Results for ', 'h2-search-term');

  const loadMoreText = 'Start new search & clear search results';
  addSearchText(clearSearches, loadMoreText, 'clear-searches');
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
  setLocalStorage('search-phrases', []);
  setLocalStorage('search-phrases-page', []);

  removeLocalStorage('fetched-search-results');
  removeLocalStorage('last-search');
  removeLocalStorage('current-search');

  searchTerms.textContent = '';
  searchGrid.textContent = '';

  addRemoveClass(clearSearches, 'none', 'inline');

  loadMore.textContent = '';
  addRemoveClass(loadMore, 'none', 'inline');

  resultsTitle.textContent = '';
  addRemoveClass(resultsTitle, 'none', 'block');
}
