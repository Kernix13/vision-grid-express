"use strict";

import { setLocalStorage, getLocalStorage, removeLocalStorage } from "./utils/localStorage.js";
import { menuButton, closeMenu } from "./ui/menu.js";
import { onPageVisits } from "./ui/initPage.js";

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

async function fetchData() {
  const DOMAIN = 'http://localhost:8080';
  try {
    const response = await fetch(DOMAIN + '/api/photos');
    if (!response.ok) {
      throw new Error('Failed to fetch image.');
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
fetchData();

/**
 * * EVENT LISTENERS
*/

// 1. Set initial state on visit to home page
document.addEventListener("DOMContentLoaded", onPageVisits);