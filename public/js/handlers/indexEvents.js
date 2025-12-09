import { getLocalStorage,setLocalStorage } from "../utils/localStorage.js";
import { createImgCard } from "../ui/cards.js";
import { 
  addSearchTerm, 
  addSearchText, 
  renderSearchEls,
  saveSearchTerm
} from "../ui/searchEls.js";
import { incrementSearchPage } from "../utils/localStorage.js";
import { getSearchResults } from "../api/unsplash.js";
import { setModalContent } from "../ui/modal.js";
import { checkUserInput } from "../utils/checkUserInput.js";
import { addRemoveClass } from "../ui/classUtils.js";

const input = document.getElementById('search');
const clearSearches = document.getElementById('clear-searches');
const loadMore = document.getElementById('load-more');
const resultsTitle = document.getElementById('results-title');
const searchTerms = document.getElementById('search-terms');
const searchGrid = document.getElementById('search-grid');
const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');

/**
 * * 1. Loads localStorage elements if they exist
 */ 
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

/**
 * * 2. Handle & validate form input, fetch images, render results
 */ 
export function handleFormSubmit(event) {
  event.preventDefault();
  const savedSearches = getLocalStorage('search-phrases') || [];

  // Handle bad input characters
  const errorElement = document.querySelector('.error-message');
  if (checkUserInput(input, errorElement)) return;
  
  if (input.value) {
    errorElement.textContent = '';
    searchGrid.textContent = '';
    
    let searchPage = 1;

    // Fetch data
    getSearchResults(input.value, searchPage);
    // Render page elements
    renderSearchEls(input.value);
    
    // Save values to localStorage
    saveSearchTerm(input.value, savedSearches);
    setLocalStorage('current-search', {
      search: input.value,
      page: searchPage,
    });

    const saveNewSearch = { search: input.value, page: searchPage };
    const searchPhrasesPage = getLocalStorage('search-phrases-page') || [];
    searchPhrasesPage.push(saveNewSearch);
    setLocalStorage('search-phrases-page', searchPhrasesPage);
  }

  // Show hidden elements
  addRemoveClass(clearSearches, 'inline', 'none');
  addRemoveClass(loadMore, 'inline', 'none');
  addRemoveClass(resultsTitle, 'block', 'none');

  resultsTitle.scrollIntoView({ behavior: 'smooth' });

  input.value = '';
} 

/**
 * * 3. Fetch more images for Load More button click
 */ 
export function handleLoadMoreBtn() {
  const lastSearch = getLocalStorage('last-search');
  const page = incrementSearchPage(lastSearch);
  console.log(`Clicked load more for '${lastSearch}', page # ${page}`);

  searchGrid.textContent = '';

  // Fetch data
  getSearchResults(lastSearch, page);
  // Render page elements
  renderSearchEls(lastSearch);
}

/**
 * * 4. Fetch more images if a past search term button is clicked
 */ 
export function handleSearchTermBtn(event) {
  const savedSearches = getLocalStorage('search-phrases') || [];
  const btn = event.target.closest('button');
  if (!btn) return;

  const searchTerm = btn.textContent;

  // Increment page number for search term
  const page = incrementSearchPage(searchTerm);
  console.log(`Clicked search term for '${searchTerm}', page # ${page}`);

  searchGrid.textContent = '';

  // Fetch data
  getSearchResults(searchTerm, page);
  // Render page elements
  renderSearchEls(searchTerm);
  // Save values to localStorage
  setLocalStorage('last-search', searchTerm);
  saveSearchTerm(searchTerm, savedSearches);
}

/**
 * * 6. Search images grid: open image in modal on image click
 */ 
export function addCardImageToModal(event) {
  const img = event.target.closest('img.result-image');
  if (!img) return;

  const card = img.closest('.image-card');
  const cardId = card.id;
  
  modalBg.classList.add('show-modal');
  modalBg.hidden = false;
  setModalContent(innerModal, img.src, cardId);
}

