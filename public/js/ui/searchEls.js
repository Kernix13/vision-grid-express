import { setLocalStorage, getLocalStorage } from "../utils/localStorage.js";

const searchTerms = document.getElementById('search-terms');
const loadMore = document.getElementById('load-more');
const resultsTitle = document.getElementById('results-title');

export function saveSearchTerm(str, el, arr) {
  if (str !== arr[arr.length - 1]) {
    el.textContent = '';
    if (arr.includes(str)) {
      arr.splice(arr.indexOf(str), 1)
    }
    arr.push(str);
    setLocalStorage('search-phrases', arr);
    addSearchTerm(el, arr);
  }
}

export function renderSearchEls(str) {
  setLocalStorage('last-search', str);
  addSearchText(loadMore, "Load 12 more images for ", 'load-more-search');
  addSearchText(resultsTitle, "Results for ", 'h2-search-term');
}

export function addSearchText(el, text, spanClass) {
  el.textContent = '';
  el.append(document.createTextNode(text));

  const span = document.createElement('span');
  span.className = spanClass;
  const spanText = getLocalStorage('last-search');
  span.append(document.createTextNode(spanText));

  el.append(span);
}

export function addSearchTerm(parent, arr) {
  arr.forEach(item => {
    const button = document.createElement('button');
    button.append(document.createTextNode(item));
    parent.append(button);
  })
}

export function clearSearchElements() {
  setLocalStorage('search-phrases', []);
  setLocalStorage('search-phrases-page', []);
  removeLocalStorageItem('fetched-search-results')
  removeLocalStorageItem('last-search')
  removeLocalStorageItem('current-search')

  searchTerms.textContent = '';
  searchGrid.textContent = '';

  addRemoveClass(clearSearches, 'none', 'inline');

  loadMore.textContent = '';
  addRemoveClass(loadMore, 'none', 'inline');

  resultsTitle.textContent = '';
  addRemoveClass(resultsTitle, 'none', 'inline');

  input.value = '';
}