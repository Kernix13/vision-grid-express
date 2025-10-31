"use strict";

import { toggleDisplay } from "./utils/classUtils.js";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.js";
import { menuButton } from "./ui/menu.js";

const settingsForm = document.getElementById('settings-form');
const settingsBtn = document.getElementById('settings-btn');
const imgTextContainer = document.getElementById('img-text-container');
const thumbnails = document.querySelector('.thumbnails');
const thumbnailsBtn  = document.getElementById('thumbnails-btn');
const thumbnailImages = thumbnails.querySelectorAll('.thumb-image');

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

/**
 * * EVENT LISTENERS
*/

// 1. Load saved images on DOMContentLoaded

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

// 6. ???