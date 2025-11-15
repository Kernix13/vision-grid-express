import { setLocalStorage, getLocalStorage } from "../utils/localStorage.js";
import { addSearchTerm, addSearchText } from "./searchEls.js";
import { createImgCard } from "./cards.js";
import { addThumbnailsToDom } from "./thumbnails.js";
// import { addSavedImagesToDom } from "./savedimages.js";

const searchTerms = document.getElementById('search-terms');
const clearSearches = document.getElementById('clear-searches');
const resultsTitle = document.getElementById('results-title');
const searchGrid = document.getElementById('search-grid');
const loadMore = document.getElementById('load-more');

const imgTextContainer = document.getElementById('img-text-container');

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
    addSavedImagesToDom();
  }
}

function addSavedImagesToDom() {
  const savedImages = getLocalStorage('saved-images');
  if (!savedImages || savedImages.length === 0) {
    imgTextContainer.append(document.createTextNode('No saved images to display...'));
    return;
  }

  savedImages.forEach(img => {

    // Create container for regular sized image and text
    const imageText = document.createElement('div');
    imageText.id = img.id;
    imageText.className = 'image-text';

    // Create image element
    const image = document.createElement('img');
    image.className = 'regular';
    image.id = `image-${img.id}`;
    image.alt = img.description;
    image.src = img.imageRegular;
    imageText.append(image);

    // Create editable div
    const div = document.createElement('div');
    div.className = 'editable';
    div.id = `text-${img.id}`;
    div.setAttribute('contenteditable', true);

    // Show saved notes if they exist, otherwise show placeholder
    div.innerHTML =
      img.notes
        ? img.notes.replace(/\n/g, '<br>')
        : 'You can add or edit notes here...';

    imageText.append(div);
    imgTextContainer.append(imageText);
  });
}