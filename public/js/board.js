"use strict";

import { toggleDisplay } from "./utils/classUtils.js";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.js";
import { menuButton } from "./ui/menu.js";
import { initBoardPage } from "./ui/initPage.js";
import { deleteImage } from "./ui/thumbnails.js";

const settingsForm = document.getElementById('settings-form');
const settingsBtn = document.getElementById('settings-btn');
const imgTextContainer = document.getElementById('img-text-container');
const thumbnails = document.querySelector('.thumbnails');

const thumbnailsBtn  = document.getElementById('thumbnails-btn');
const thumbnailImages = thumbnails.querySelectorAll('.thumb-image');

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

const savedImages = getLocalStorage('saved-images');

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

// 4. Save editable text to local storage

// 5. Open/close hamburger menu
hamburger.addEventListener("click", () => {
  menuButton(hamburger, navMenu);
})

// 6. Thumbnail item
thumbnails.addEventListener('click', (e) => {
  const thumb = e.target.closest('.thumb-item');
  if (!thumb) return;

  // Remove previous selection
  const selected = document.querySelectorAll('.thumb-item.selected');

  if (selected.length > 0) {
    selected.forEach(item => item.classList.remove('selected'));
  }
  thumb.classList.toggle('selected');
  
});

// 7. Thumbnail item -> Thumbnail buttons
thumbnails.addEventListener('click', e => {
  const btn = e.target.closest('button');
  const thumbItem = e.target.closest('.thumb-item');
  if (!thumbItem) return;

  const id = thumbItem.dataset.id;
  const imageTextItem = document.getElementById(id)

  if (btn?.classList.contains('move-up')) {
    // moveImage(id, 'up');
    console.log(btn.className);
  } else if (btn?.classList.contains('move-down')) {
    // moveImage(id, 'down');
    console.log(btn.className);
  } else if (btn?.classList.contains('delete')) {
    deleteImage(e, id);
  } else if (e.target.classList.contains('thumb-image')) {
    // I'm not sure if selecting the image makes sense unless it is to scroll to that area of the page
    // selectImage(id);
    console.log(imageTextItem.id);
  }
});


