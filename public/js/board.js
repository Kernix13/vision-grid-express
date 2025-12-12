import {
	addPageImageToModal,
	handleRadioCheck,
	handleSliderPlayBtn,
	handleThumbnailBtns,
	handleThumbnailClick,
	initBoardPage,
	saveUserText,
} from './handlers/boardEvents.js';
import {
	scrollFunction,
	smoothScrollBackToTop,
	toggleMenu,
} from './handlers/globalEvents.js';
import { toggleDisplay } from './ui/classUtils.js';
import { closeDeleteModal, deleteImage } from './ui/thumbnails.js';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.js';
import { copyrightYear } from './utils/currentYear.js';

const settingsForm = document.getElementById('settings-form');
const settingsBtn = document.getElementById('settings-btn');
const input = document.getElementById('board-title');
const playSlider = document.getElementById('play-slider');
const allTimes = document.querySelectorAll('input[name="lightbox-speed"]');
const h1 = document.querySelector('.board-page-title');
const thumbnails = document.querySelector('.thumbnails');
const thumbnailsBtn = document.getElementById('thumbnails-btn');
const imgTextContainer = document.querySelector('#img-text-container');
const close = document.getElementById('close-btn');
const modalBg = document.getElementById('modal-bg');
const cancelBtn = document.getElementById('cancel-delete-btn');
const deleteClose = document.getElementById('delete-close');
const hamburger = document.getElementById('hamburger');
const backToTopButton = document.querySelector('#back-to-top-btn');

/**
 * * GLOBAL UI LISTENERS
 */
// 1. Load saved images on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initBoardPage);

// 2. Open/close hamburger menu
hamburger.addEventListener('click', toggleMenu);

// 3. Show Back To Top button
window.addEventListener('scroll', scrollFunction);

// 4. Back To Top button listener
backToTopButton.addEventListener('click', smoothScrollBackToTop);

/**
 * * Page image, editable text element, & image modal listeners
 */
// 5. Save editable text to local storage for each image object
imgTextContainer.addEventListener('focusout', saveUserText);

// 6. Add page image to modal on click of any page image
imgTextContainer.addEventListener('click', addPageImageToModal);

// 7. Close image modal on close button click
close.addEventListener('click', () => {
	modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
});

// 8. Close image modal on window click
window.addEventListener('click', (e) => {
	if (e.target === modalBg) {
		modalBg.classList.remove('show-modal');
		modalBg.hidden = true;
	}
});

// 9. Close image modal on Escape key keydown
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
});

/**
 * * Thumbnails listners
 */
// 10. Show/hide thumbnails strip & change button label
thumbnailsBtn.addEventListener('click', () => {
	toggleDisplay(thumbnails, thumbnailsBtn, 'Thumbnails');
	thumbnails.removeAttribute('inert');
	thumbnails.setAttribute('aria-hidden', 'false');
});

// 11. Add/remove 'selected' class on click of any thumbnail image + scroll to page image
thumbnails.addEventListener('click', handleThumbnailClick);

// 12. Handle a click on one of the 3 buttons for each thumbnail
thumbnails.addEventListener('click', handleThumbnailBtns);

// 13. Close thumbnails on click of img-text-container element
imgTextContainer.addEventListener('click', () => {
	if (thumbnails.classList.contains('onscreen')) {
		thumbnails.classList.remove('onscreen');
		thumbnailsBtn.innerText = 'Show Thumbnails';
	}
});

// 14. Delete saved image if thumbnails Delete button clicked
const confirmBtn = document.getElementById('confirm-delete-btn');
confirmBtn.addEventListener('click', () => {
	deleteImage(getLocalStorage('delete-item-id'));
	closeDeleteModal();
});

// 15. & 16. Cancel and close button listener for thumbnail delete modal
cancelBtn.addEventListener('click', closeDeleteModal);
deleteClose.addEventListener('click', closeDeleteModal);

/**
 * * Settings form listners
 */
// 17. Show/Hide settings form & change button label
settingsBtn.addEventListener('click', () => {
	toggleDisplay(settingsForm, settingsBtn, 'Settings');
	settingsForm.removeAttribute('inert');
	settingsForm.setAttribute('aria-hidden', 'false');
});

// 18. Set the H1 text to value set by user in settings form input field
input.addEventListener('input', () => {
	const value = input.value;
	h1.textContent = value;
	setLocalStorage('board-title', value);
});

// 19. Image slider Play button listener... WIP
playSlider.addEventListener('click', handleSliderPlayBtn);

// 20. Radio buttons listener for image slider timing... WIP
allTimes.forEach((time) => {
	time.addEventListener('change', handleRadioCheck);
});

/**
 * * Set Copyright year in footer
 */
const year = document.getElementById('year');
year.textContent = copyrightYear();