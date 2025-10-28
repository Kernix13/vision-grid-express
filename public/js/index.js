"use strict";

import { setLocalStorage, getLocalStorage, removeLocalStorage } from "./utils/localStorage.js";
import { menuButton, closeMenu } from "./ui/menu.js";
import { onPageVisits } from "./ui/initPage.js";
import { getSearchResults } from "./api/unsplash.js";
import { saveSearchTerm, renderSearchEls } from "./ui/searchEls.js";
import { addRemoveClass } from "./utils/classUtils.js";
import { createImgCard } from "./ui/cards.js";

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
/* Modal - HOME & MAYBE BOARD PAGE (though with changes)  */
const close = document.getElementById('close');
const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');
// Mobile menu elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Why do I have these in the global scope? 
let searchPage = 0;
const savedSearches = getLocalStorage('search-phrases') || [];

/**
 * * EVENT LISTENERS
*/

// 1. Set initial state on visit to home page
document.addEventListener("DOMContentLoaded", onPageVisits);
const images = getLocalStorage('fetched-search-results') || [];
// 2. Search form event listener
form.addEventListener('submit', e => {
  e.preventDefault();

  if (input.value) {
    searchPage = 1;
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

    const newSearch = { search: input.value, page: searchPage };
    const searchPhrasesPages = getLocalStorage('search-phrases-page') || [];
    searchPhrasesPages.push(newSearch);
    setLocalStorage('search-phrases-page', searchPhrasesPages);
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

// 4.Close mobile menu (only useful for on-page anchor links) 
navLinks.forEach(n => n.addEventListener("click", () => {
  closeMenu(hamburger, navMenu);
}))