import { scrollFunction } from './ui/backToTop.js';
import { initBoardPage } from './ui/initPage.js';
import { setModalContent } from './ui/modal.js';
import { toggleMenu } from './ui/menu.js';
import { deleteImage, moveImage, selectImage, closeDeleteModal } from './ui/thumbnails.js';
import { toggleDisplay } from './ui/classUtils.js';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.js';

const settingsForm = document.getElementById('settings-form');
const settingsBtn = document.getElementById('settings-btn');
const input = document.getElementById('board-title');
const playSlider = document.getElementById('play-slider');
const sliderTime = document.getElementById('slider-time');
const allTimes = document.querySelectorAll('input[name="lightbox-speed"]');
const h1 = document.querySelector('.board-page-title');
const thumbnails = document.querySelector('.thumbnails');
const thumbnailsBtn = document.getElementById('thumbnails-btn');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const imgTextContainer = document.querySelector('#img-text-container');
const close = document.getElementById('close-btn');
const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');

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

// 3. Play button...
playSlider.addEventListener('click', () => {
	console.log('Start Slider button clicked');
	// I need a boolean in setModalContent so as not to load the modal with the nav buttons:
	let isSlider = true;

	// I need to start with the 1st saved image then loop thru all of them
	const savedImages = getLocalStorage('saved-images');

	// I need to get the first get first DOM image and load it for now
	const pageImages = document.querySelectorAll('img.regular');
	const imageTextEls = document.querySelectorAll('.image-text');
	modalBg.classList.add('show-modal');
	modalBg.hidden = false;

	// setModalContent is bad for this because of the second argument: img.src
	// I need to pass that in I need to refactor the Fx and all functions calls
	setModalContent(innerModal, pageImages[0].src, imageTextEls[0].id);

	console.log(savedImages[0].imageRegular === pageImages[0].src)
	console.log(savedImages[0].id === imageTextEls[0].id)
	toggleDisplay(settingsForm, settingsBtn, 'Settings');
})

// Radio buttons listener here I think - not sure what to do with it
const sliderSpeed = sliderTime.querySelector('input[name="lightbox-speed"]:checked'
).value;
console.log(sliderSpeed)

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
imgTextContainer.addEventListener('focusout', (e) => {
	const savedImages = getLocalStorage('saved-images');
	const editable = e.target.closest('.editable');
	if (!editable) return;

	const parent = editable.closest('.image-text');
	const id = parent.id;
	const imgObj = savedImages.find((img) => img.id === id);

	imgObj.notes = editable.innerHTML.trim();

	setLocalStorage('saved-images', savedImages);
});

// 7. Add image to modal on click of any page image
imgTextContainer.addEventListener('click', (e) => {
	const regularImg = e.target.closest('.regular');
	if (!regularImg) return;

	const imageText = regularImg.closest('.image-text');
	const imageTextId = imageText.id;
	console.log(imageTextId);

	modalBg.classList.add('show-modal');
	modalBg.hidden = false;
	setModalContent(innerModal, regularImg.src, imageTextId);
});

// 8. Adds/removes 'selected' class on click of any thumbnail
thumbnails.addEventListener('click', (e) => {
	const thumbItem = e.target.closest('.thumb-item');
	if (!thumbItem) return;

	// Remove previous selection
	const selected = document.querySelectorAll('.thumb-item.selected');

	if (selected.length > 0) {
	  selected.forEach(item => item.classList.toggle('selected'));
	}

	thumbItem.classList.toggle('selected');
	setLocalStorage('selected-thumb', thumbItem.dataset.id);
});

// 9. Handle a click on a thumbnail image, or one of the 3 buttons for each thumbnail
thumbnails.addEventListener('click', (e) => {
	const thumbModal = document.getElementById('thumb-modal');
	const btn = e.target.closest('button');
	const thumbItem = e.target.closest('.thumb-item');
	if (!thumbItem) return;

	const id = thumbItem.dataset.id;

	if (btn && btn.classList.contains('move-up')) {
		moveImage(id, 'up');
		thumbItem.classList.add('selected');
	} else if (btn && btn.classList.contains('move-down')) {
		moveImage(id, 'down');
		thumbItem.classList.add('selected');
	} else if (btn && btn.classList.contains('delete')) {
		thumbModal.classList.add('show-modal');
		thumbModal.hidden = false;
		setLocalStorage('delete-item-id', id);
	} else {
		selectImage(id);
	}
});

// 10. Delete saved image if Delete button clicked 
const confirmBtn = document.getElementById('confirm-delete-btn');
confirmBtn.addEventListener('click', () => {
	deleteImage(getLocalStorage('delete-item-id'));
	closeDeleteModal();
});

// 11. Cancel and close button listener for thumbnail delete
const cancelBtn = document.getElementById('cancel-delete-btn');
cancelBtn.addEventListener('click', closeDeleteModal);

const deleteClose = document.getElementById('delete-close');
deleteClose.addEventListener('click', closeDeleteModal);

// 12. Close modal listeners on: 1. close button click, 2. window click, 3. Escape key keydown
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

// 13. Open/close hamburger menu
hamburger.addEventListener('click', () => {
	toggleMenu(hamburger, navMenu);
});

// 14. Back To Top button
window.addEventListener('scroll', scrollFunction);
