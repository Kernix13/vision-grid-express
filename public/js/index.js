"use strict";

// For DOMContentLoaded listener
import { onPageVisits } from "./ui/initPage.js";
// Functions used in form event listener
import { setLocalStorage, getLocalStorage } from "./utils/localStorage.js";
import { getSearchResults } from "./api/unsplash.js";
import { saveSearchTerm, renderSearchEls, clearSearchElements } from "./ui/searchEls.js";
import { addRemoveClass } from "./utils/classUtils.js";
// Hamburger menu listener
import { menuButton } from "./ui/menu.js";

// Form
const form = document.getElementById('search-form');
const input = document.getElementById('search');
// Search terms and buttons
const searchTerms = document.getElementById('search-terms');
const clearSearches = document.getElementById('clear-searches');
const loadMore = document.getElementById('load-more');
// Search grid
const searchGrid = document.getElementById('search-grid');
const resultsTitle = document.getElementById('results-title');
// Mobile menu elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
// Modal 1 - HOME PAGE
const close = document.getElementById('close');
const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');

// Why do I have these in the global scope? Do I need them here?
let searchPage = 0;
const savedSearches = getLocalStorage('search-phrases') || [];

/**
 * * EVENT LISTENERS
*/

// 1. Set initial state on visit to home page
document.addEventListener("DOMContentLoaded", onPageVisits);

// 2. Search form event listener
form.addEventListener('submit', e => {
  e.preventDefault();

  if (input.value) {
    searchPage = 1;
    // Log page # to check against other page # calculations - remove later
    console.log(`Initial search for '${input.value}', page ${searchPage}`)
    searchGrid.textContent = '';

    getSearchResults(input.value, searchPage, searchGrid);
    console.log(input.value)

    saveSearchTerm(input.value, searchTerms, savedSearches)
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

// 3. Clear save searches and related buttons from the DOM
// Issue #7: Create function for clear-searches button
// branch: ui/clear-searches | commit msg: "ui: clear ui of all search elements"
clearSearches.addEventListener('click', (e) => {
  // These 2 lines added to clear an Aria warning in console
  e.target.inert = true;
  e.target.hidden = true;
  clearSearchElements();
});

// 4. Load More button fetch (uses fetchFromButtons)
// Issue #8: Create function to fetch more results for current search
// branch: core/load-more-fetch | commit msg: "core: fetch more results on load-more click" 
loadMore.addEventListener('click', () => {
  console.log('load-more button clicked');
})

// 5. Search terms fetch
// Issue #9: Create function to fetch more results for search phrases buttons
// branch: core/search-terms-fetch | commit msg: "core: fetch more results on search terms click"

// 6. Search images grid: Save and Remove buttons
// Issue #6: Create function to remove a result card from the DOM
// branch: ui/remove-card | commit msg: "remove card from DOM, save image object to storage" 

// 7. Search images grid: open image in modal on image click
// Issue #5: Create functionality for modal
// branch: core/image-modal | commit msg: "core: open image in modal on image click"

// 8. Modal listeners: Close modal on click of: 1. close button, 2. window

// 9. Open/close hamburger menu
hamburger.addEventListener("click", () => {
  menuButton(hamburger, navMenu);
})