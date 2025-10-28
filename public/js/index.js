"use strict";

import { setLocalStorage, getLocalStorage, removeLocalStorage } from "./utils/localStorage.js";
import { menuButton, closeMenu } from "./ui/menu.js";
import { onPageVisits } from "./ui/initPage.js";
import { getSearchResults } from "./api/unsplash.js";

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
let page = 0;
const savedSearches = getLocalStorage('search-phrases') || [];

// async function fetchData() {
//   const DOMAIN = 'http://localhost:8080';
//   try {
//     const response = await fetch(DOMAIN + '/api/photos');
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

/**
 * * EVENT LISTENERS
*/

// 1. Set initial state on visit to home page
document.addEventListener("DOMContentLoaded", onPageVisits);

// 2. Search form event listener
form.addEventListener('submit', async e => {
  e.preventDefault();

  if (input.value) {
    page = 1;
    searchGrid.textContent = '';

    const results = await getSearchResults(input.value, page);
    if (results) {
      console.log(input.value)
      // call your render function here, e.g. renderSearchResults(results)
    }

    setLocalStorage('current-search', {
      search: input.value,
      page: page,
    });

    const newSearch = { search: input.value, page: page };
    const searchPhrasesPages = getLocalStorage('search-phrases-page') || [];
    searchPhrasesPages.push(newSearch);
    setLocalStorage('search-phrases-page', searchPhrasesPages);
  }

  input.value = '';
});