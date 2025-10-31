"use strict";

// For DOMContentLoaded listener
import { initHomePage } from "./ui/initPage.js";
// Functions used in form event listener
import { setLocalStorage, getLocalStorage, incrementSearchPage } from "./utils/localStorage.js";
import { getSearchResults } from "./api/unsplash.js";
import { saveSearchTerm, renderSearchEls, clearSearchElements } from "./ui/searchEls.js";
import { addRemoveClass } from "./utils/classUtils.js";
// Hamburger menu listener
import { menuButton } from "./ui/menu.js";
// searchGrid listener
import { removeImageCard } from "./ui/cards.js";
import { setModalContent } from "./ui/modal.js";

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
document.addEventListener("DOMContentLoaded", initHomePage);

// 2. Search form event listener
form.addEventListener('submit', e => {
  e.preventDefault();

  if (input.value) {
    searchPage = 1;
    // Log page # to check against other page # calculations - remove later
    console.log(`Initial search for '${input.value}', page # ${searchPage}`)
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
clearSearches.addEventListener('click', (e) => {
  // These 2 lines added to clear an Aria warning in console
  e.target.inert = true;
  e.target.hidden = true;
  clearSearchElements();
});

// 4. Load More button fetch (uses fetchFromButtons)
loadMore.addEventListener('click', () => {
  const lastSearch = getLocalStorage('last-search');
  const page = incrementSearchPage(lastSearch);

  console.log(`Clicked load more for '${lastSearch}', page # ${page}`);

  searchGrid.textContent = '';
  getSearchResults(lastSearch, page, searchGrid);

  saveSearchTerm(lastSearch, searchTerms, savedSearches);
  renderSearchEls(lastSearch);

})

// 5. Search terms fetch
searchTerms.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return; 

  const searchTerm = btn.textContent;
  
  const page = incrementSearchPage(searchTerm);
  console.log(`Clicked search term for '${searchTerm}', page # ${page}`)

  searchGrid.textContent = '';
  
  getSearchResults(searchTerm, page, searchGrid);
  
  setLocalStorage('last-search', searchTerm);
  saveSearchTerm(searchTerm, searchTerms, savedSearches)
  renderSearchEls(searchTerm);
});

// 6. Search images grid: Save and Remove buttons
searchGrid.addEventListener('click', e => {
  removeImageCard(e)

  const renderedImages = searchGrid.querySelectorAll('img')
  if (renderedImages.length === 0) {
    addRemoveClass(resultsTitle, 'none', 'block');
  }
});

// 7. Search images grid: open image in modal on image click
searchGrid.addEventListener('click', (e) => {
  const img = e.target.closest('img.result-image');
  console.log(img)
  if (!img) return;

  const card = img.closest('.image-card');
  const cardId = card.id;  

  modalBg.classList.add('show-modal');
  setModalContent(innerModal, img, cardId);
});

// 8. Modal listeners: Close modal on click of: 1. close button, 2. window
close.addEventListener('click', () => modalBg.classList.remove('show-modal'));
window.addEventListener('click', e =>
  e.target == modalBg ? modalBg.classList.remove('show-modal') : false
);

// 9. Open/close hamburger menu
hamburger.addEventListener("click", () => {
  menuButton(hamburger, navMenu);
})