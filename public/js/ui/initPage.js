import { setLocalStorage, getLocalStorage } from "../utils/localStorage.js";
import { addSearchTerm, addSearchText } from "./searchEls.js";
import { createImgCard } from "./cards.js";
import { addThumbnailsToDom } from "./thumbnails.js";

const searchTerms = document.getElementById('search-terms');
const clearSearches = document.getElementById('clear-searches');
const resultsTitle = document.getElementById('results-title');
const searchGrid = document.getElementById('search-grid');
const loadMore = document.getElementById('load-more');

// 1. For Home page DOMContentLoaded listener
export function initHomePage() {
  if (!getLocalStorage('search-phrases') || !getLocalStorage('fetched-search-results') ) {

    setLocalStorage('search-phrases', []);

    clearSearches.classList.add('none');
    loadMore.classList.add('none');
    resultsTitle.classList.add('none');
  } else {
    const savedSearches = getLocalStorage('search-phrases');
    const images = getLocalStorage('fetched-search-results');
    
    searchTerms.textContent = '';

    addSearchTerm(searchTerms, savedSearches);
    addSearchText(loadMore, "Load 12 more images for ", 'load-more-search');
    addSearchText(resultsTitle, "Results for ", 'h2-search-term');

    createImgCard(images, searchGrid);
  }
}

export function initBoardPage() {
  const savedImages = getLocalStorage('saved-images');
  if (savedImages.length > 0) {
    addThumbnailsToDom();

    const thumbImages = document.querySelectorAll('img.thumb-image')
    thumbImages.forEach(img => {
      img.addEventListener('click', () => {
        console.log('listener from initBoardPage')
      })
    });

  }
}