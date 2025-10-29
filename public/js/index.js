"use strict";

// For DOMContentLoaded listener
import { onPageVisits } from "./ui/initPage.js";
// Functions used in form event listener
import { setLocalStorage, getLocalStorage } from "./utils/localStorage.js";
import { getSearchResults } from "./api/unsplash.js";
import { saveSearchTerm, renderSearchEls } from "./ui/searchEls.js";
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

// 3. Open/close hamburger menu
hamburger.addEventListener("click", () => {
  menuButton(hamburger, navMenu);
})