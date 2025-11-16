"use strict";

import { toggleDisplay } from "./utils/classUtils.js";
import { getLocalStorage } from "./utils/localStorage.js";
import { menuButton } from "./ui/menu.js";
import { initBoardPage } from "./ui/initPage.js";
import { deleteImage, moveImage, selectImage } from "./ui/thumbnails.js";

const settingsForm = document.getElementById('settings-form');
const settingsBtn = document.getElementById('settings-btn');
const thumbnails = document.querySelector('.thumbnails');

const thumbnailsBtn  = document.getElementById('thumbnails-btn');

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");


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
    moveImage(e, id, 'up');
    // I can't get the selected class to stick?
    thumbItem.classList.add('selected');
  } else if (btn?.classList.contains('move-down')) {
    moveImage(e, id, 'down');
    thumbItem.classList.add('selected');
  } else if (btn?.classList.contains('delete')) {
    deleteImage(e, id);
  } else if (e.target.classList.contains('thumb-image')) {
    // Does it make sense for selectImage to scrollIntoView? Is that it?
    selectImage(id);
    console.log(imageTextItem.id);
  }
});


