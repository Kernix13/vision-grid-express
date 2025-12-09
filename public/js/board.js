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
 * * GLOBAL UI LISTENERS
 */
// 1. Load saved images on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initBoardPage);

// 2. Open/close hamburger menu
hamburger.addEventListener('click', () => {
	toggleMenu();
});

// 3. Back To Top button
window.addEventListener('scroll', scrollFunction);

/**
 * * Page image, editable text element, & image modal listeners
 */
// 4. Save editable text to local storage for each image object
imgTextContainer.addEventListener('focusout', saveUserText);

// 5. Add page image to modal on click of any page image
imgTextContainer.addEventListener('click', addPageImageToModal);

// 6. Close image modal on close button click
close.addEventListener('click', () => {
	modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
});

// 7. Close image modal on window click
window.addEventListener('click', (e) => {
	if (e.target === modalBg) {
    modalBg.classList.remove('show-modal');
    modalBg.hidden = true;
  }
});

// 8. Close image modal on Escape key keydown
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
});

/**
 * * Thumbnails listners
 */
// 9. Show/hide thumbnails strip & change button label
thumbnailsBtn.addEventListener('click', () => {
	toggleDisplay(thumbnails, thumbnailsBtn, 'Thumbnails');
	thumbnails.removeAttribute('inert');
	thumbnails.setAttribute('aria-hidden', 'false');
});

// 10. Add/remove 'selected' class on click of any thumbnail image + scroll to page image
thumbnails.addEventListener('click', handleThumbnailClick);

// 11. Handle a click on one of the 3 buttons for each thumbnail
thumbnails.addEventListener('click', handleThumbnailBtns);

// 12. Close thumbnails on click of img-text-container element
imgTextContainer.addEventListener('click', () => {
	if (thumbnails.classList.contains('onscreen')) {
		thumbnails.classList.remove('onscreen');
		thumbnailsBtn.innerText = 'Show Thumbnails';
	}
});

// 13. Delete saved image if thumbnails Delete button clicked 
const confirmBtn = document.getElementById('confirm-delete-btn');
confirmBtn.addEventListener('click', () => {
	deleteImage(getLocalStorage('delete-item-id'));
	closeDeleteModal();
});

// 14. & 15. Cancel and close button listener for thumbnail delete
cancelBtn.addEventListener('click', closeDeleteModal);
deleteClose.addEventListener('click', closeDeleteModal);

/**
 * * Settings form listners
 */
// 16. Show/Hide settings form & change button label
settingsBtn.addEventListener('click', () => {
	toggleDisplay(settingsForm, settingsBtn, 'Settings');
	settingsForm.removeAttribute('inert');
	settingsForm.setAttribute('aria-hidden', 'false');
});

// 17. Set the H1 text to value set by user in settings form input field
input.addEventListener('input', () => {
	const value = input.value;
  h1.textContent = value;
  setLocalStorage('board-title', value);
});

// 18. Image slider Play button listener... WIP
playSlider.addEventListener('click', handleSliderPlayBtn);

// 19. Radio buttons listener for image slider timing... WIP
allTimes.forEach(time => {
  time.addEventListener('change', handleRadioCheck);
});





