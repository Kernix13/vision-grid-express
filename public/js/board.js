import { getLocalStorage, setLocalStorage } from './utils/localStorage.js';
import { 
	initBoardPage, 
	addPageImageToModal, 
	saveUserText, 
	handleThumbnailClick, 
	handleThumbnailBtns,
	handleSliderPlayBtn,
	handleRadioCheck
} from './handlers/boardEvents.js';
import { toggleMenu } from './handlers/globalEvents.js';
import { deleteImage, closeDeleteModal } from './ui/thumbnails.js';
import { toggleDisplay } from './ui/classUtils.js';
import { scrollFunction } from './handlers/globalEvents.js';

const settingsForm = document.getElementById('settings-form');
const settingsBtn = document.getElementById('settings-btn');
const input = document.getElementById('board-title');
const playSlider = document.getElementById('play-slider');
const allTimes = document.querySelectorAll('input[name="lightbox-speed"]');
const h1 = document.querySelector('.board-page-title');
const thumbnails = document.querySelector('.thumbnails');
const thumbnailsBtn = document.getElementById('thumbnails-btn');
const hamburger = document.getElementById('hamburger');
const imgTextContainer = document.querySelector('#img-text-container');
const close = document.getElementById('close-btn');
const modalBg = document.getElementById('modal-bg');
const cancelBtn = document.getElementById('cancel-delete-btn');
const deleteClose = document.getElementById('delete-close');

/**
 * * EVENT LISTENERS
 */

// 1. Load saved images on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initBoardPage);

// 2. Show/Hide settings form
settingsBtn.addEventListener('click', () => {
	toggleDisplay(settingsForm, settingsBtn, 'Settings');
	settingsForm.removeAttribute('inert');
	settingsForm.setAttribute('aria-hidden', 'false');
});

// 3. Sets the H1 textContent to value set by user in settings form
input.addEventListener('input', () => {
	const value = input.value;
  h1.textContent = value;
  setLocalStorage('board-title', value);
});

// 4. Show/hide thumbnails strip and changes button textContent
thumbnailsBtn.addEventListener('click', () => {
	toggleDisplay(thumbnails, thumbnailsBtn, 'Thumbnails');
	thumbnails.removeAttribute('inert');
	thumbnails.setAttribute('aria-hidden', 'false');
});

// 5. Close thumbnails on click img-text-container element
imgTextContainer.addEventListener('click', () => {
	if (thumbnails.classList.contains('onscreen')) {
		thumbnails.classList.remove('onscreen');
		thumbnailsBtn.innerText = 'Show Thumbnails';
	}
});

// 6. Save editable text to local storage for associated image object
imgTextContainer.addEventListener('focusout', saveUserText);

// 7. Add page image to modal on click of any page image
imgTextContainer.addEventListener('click', addPageImageToModal);

// 8. Adds/removes 'selected' class on click of any thumbnail image and scrolls to that page image
thumbnails.addEventListener('click', handleThumbnailClick);

// 9. Handle a click on one of the 3 buttons for each thumbnail
thumbnails.addEventListener('click', handleThumbnailBtns);

// 10. Play button... WIP
playSlider.addEventListener('click', handleSliderPlayBtn);

// 11. Radio buttons listener... WIP
allTimes.forEach(time => {
  time.addEventListener('change', handleRadioCheck);
});

// 12. Delete saved image if Delete button clicked 
const confirmBtn = document.getElementById('confirm-delete-btn');
confirmBtn.addEventListener('click', () => {
	deleteImage(getLocalStorage('delete-item-id'));
	closeDeleteModal();
});

// 13. & 14. Cancel and close button listener for thumbnail delete
cancelBtn.addEventListener('click', closeDeleteModal);
deleteClose.addEventListener('click', closeDeleteModal);

// 15. Close modal listeners on: 1. close button click, 2. window click, 3. Escape key keydown
close.addEventListener('click', () => {
	modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
});

window.addEventListener('click', (e) => {
	if (e.target === modalBg) {
    modalBg.classList.remove('show-modal');
    modalBg.hidden = true;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
});

// 16. Open/close hamburger menu
hamburger.addEventListener('click', () => {
	toggleMenu();
});

// 17. Back To Top button
window.addEventListener('scroll', scrollFunction);
