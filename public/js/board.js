"use strict";

import { toggleDisplay } from "./utils/classUtils.js";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.js";
import { menuButton } from "./ui/menu.js";
import { initBoardPage } from "./ui/initPage.js";
import { deleteImage, moveImage, selectImage } from "./ui/thumbnails.js";
import { scrollFunction, smoothScrollBackToTop } from "./ui/backToTop.js";

const settingsForm = document.getElementById('settings-form');
const settingsBtn = document.getElementById('settings-btn');
const thumbnails = document.querySelector('.thumbnails');
const thumbnailsBtn  = document.getElementById('thumbnails-btn');
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const backToTopButton = document.querySelector('#back-to-top-btn');
const imgTextContainer = document.querySelector('#img-text-container');


/**
 * * EVENT LISTENERS
*/

// 1. Load saved images on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initBoardPage);

// 2. Show/Hide settings form
settingsBtn.addEventListener('click', () => {
  toggleDisplay(settingsForm, settingsBtn, 'Settings');
});

// 3. Show/hide thumbnails
thumbnailsBtn.addEventListener('click', () => {
  toggleDisplay(thumbnails, thumbnailsBtn, 'Thumbnails');
});
// Close thumbnails on window click
imgTextContainer.addEventListener('click', (e) => {
  if (thumbnails.classList.contains('onscreen')) {
    thumbnails.classList.remove('onscreen')
  }
});


// 4. Save editable text to local storage

// 5. Open/close hamburger menu
hamburger.addEventListener("click", () => {
  menuButton(hamburger, navMenu);
})

// 6. Thumbnail item
thumbnails.addEventListener('click', (e) => {
  const thumbItem = e.target.closest('.thumb-item');
  if (!thumbItem) return;

  // Remove previous selection
  const selected = document.querySelectorAll('.thumb-item.selected');

  // if (selected.length > 0) {
  //   selected.forEach(item => item.classList.toggle('selected'));
  // }

  thumbItem.classList.toggle('selected');
  
});

// 7. Thumbnail item -> Thumbnail buttons
thumbnails.addEventListener('click', e => {
  const btn = e.target.closest('button');
  const thumbItem = e.target.closest('.thumb-item');
  if (!thumbItem) return;

  const id = thumbItem.dataset.id;
  const imageTextItem = document.getElementById(id)

  if (btn?.classList.contains('move-up')) {
    moveImage(id, 'up');
    // I can't get the selected class to stick?
    thumbItem.classList.add('selected');
  } else if (btn?.classList.contains('move-down')) {
    moveImage(id, 'down');
    thumbItem.classList.add('selected');
  } else if (e.target.classList.contains('thumb-image')) {
    // Does it make sense for selectImage to scrollIntoView? Is that it?
    selectImage(id);
    console.log(imageTextItem.id);
  }
});

// Thumbnail delete button listener
thumbnails.addEventListener('click', e => {
  const thumbModal = document.getElementById('thumb-modal');
  const btn = e.target.closest('button');
  const thumbItem = e.target.closest('.thumb-item');
  if (!thumbItem) return;

  const id = thumbItem.dataset.id;

  if (btn?.classList.contains('delete')) {
    thumbModal.classList.add('show-modal');
    setLocalStorage('delete-item-id', id);
  }
});

/* 
  This function and the following 3 listeners are all for thumbnail delete btn
*/
function closeThumbDeleteModal() {
  const thumbModal = document.getElementById('thumb-modal');
  thumbModal.classList.remove('show-modal');
}

// Delete saved image confirmation button listener
const confirmBtn = document.getElementById('confirm-delete-btn');
confirmBtn.addEventListener('click', () => {
  deleteImage(getLocalStorage('delete-item-id'));
  closeThumbDeleteModal();
})

// Cancel and close button listener for thumbnail delete
const cancelBtn = document.getElementById('cancel-delete-btn');
cancelBtn.addEventListener('click', closeThumbDeleteModal);

const closeDeleteModal = document.getElementById('close');
closeDeleteModal.addEventListener('click', closeThumbDeleteModal);

// Back To Top
window.addEventListener('scroll', scrollFunction);
backToTopButton.addEventListener('click', smoothScrollBackToTop);