import { scrollFunction, smoothScrollBackToTop } from './ui/backToTop.js';
import { setModalContent } from './ui/modal.js';
import { initBoardPage } from './ui/initPage.js';
import { menuButton } from './ui/menu.js';
import { deleteImage, moveImage, selectImage } from './ui/thumbnails.js';
import { toggleDisplay } from './utils/classUtils.js';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.js';

const settingsForm = document.getElementById('settings-form');
const settingsBtn = document.getElementById('settings-btn');
const input = document.getElementById('board-title');
const h1 = document.querySelector('.board-page-title');
const thumbnails = document.querySelector('.thumbnails');
const thumbnailsBtn = document.getElementById('thumbnails-btn');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const backToTopButton = document.querySelector('#back-to-top-btn');
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
});

// 3. 
input.addEventListener('input', () => {
	const value = input.value;
  h1.textContent = value;
  setLocalStorage('board-title', value);
});

// 4. Show/hide thumbnails
thumbnailsBtn.addEventListener('click', () => {
	toggleDisplay(thumbnails, thumbnailsBtn, 'Thumbnails');
});
// 5. Close thumbnails on window click
imgTextContainer.addEventListener('click', () => {
	if (thumbnails.classList.contains('onscreen')) {
		thumbnails.classList.remove('onscreen');
		thumbnailsBtn.innerText = 'Show Thumbnails';
	}
});

// 6. Save editable text to local storage
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

// 7. open image in modal on click
imgTextContainer.addEventListener('click', (e) => {
	const regularImg = e.target.closest('.regular');
	if (!regularImg) return;

	const imageText = regularImg.closest('.image-text');
	const imageTextId = imageText.id;
	console.log(imageTextId);

	modalBg.classList.add('show-modal');
	modalBg.hidden = false;
	setModalContent(innerModal, regularImg, imageTextId);
});

// 8. Thumbnail item
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

// 9. Thumbnail item -> Thumbnail buttons
thumbnails.addEventListener('click', (e) => {
	const btn = e.target.closest('button');
	const thumbItem = e.target.closest('.thumb-item');
	if (!thumbItem) return;

	const id = thumbItem.dataset.id;
	const imageTextItem = document.getElementById(id);

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
	}
});

// 10. Thumbnail delete button listener
thumbnails.addEventListener('click', (e) => {
	const thumbModal = document.getElementById('thumb-modal');
	const btn = e.target.closest('button');
	const thumbItem = e.target.closest('.thumb-item');
	if (!thumbItem) return;

	const id = thumbItem.dataset.id;

	if (btn?.classList.contains('delete')) {
		thumbModal.classList.add('show-modal');
		thumbModal.hidden = false;
		setLocalStorage('delete-item-id', id);
	}
});

/* 
  This function and the following 3 listeners are all for thumbnail delete btn
*/
function closeThumbDeleteModal() {
	const thumbModal = document.getElementById('thumb-modal');
	thumbModal.classList.remove('show-modal');
	thumbModal.hidden = true;
}

// 11. Delete saved image confirmation button listener
const confirmBtn = document.getElementById('confirm-delete-btn');
confirmBtn.addEventListener('click', () => {
	deleteImage(getLocalStorage('delete-item-id'));
	closeThumbDeleteModal();
});

// 12. Cancel and close button listener for thumbnail delete
const cancelBtn = document.getElementById('cancel-delete-btn');
cancelBtn.addEventListener('click', closeThumbDeleteModal);

const closeDeleteModal = document.getElementById('remove-close');
closeDeleteModal.addEventListener('click', closeThumbDeleteModal);

// 13. Modal listeners: Close modal on click of: 1. close button, 2. window, 3. Escape key
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

// 14. Open/close hamburger menu
hamburger.addEventListener('click', () => {
	menuButton(hamburger, navMenu);
});

// 15. Back To Top
window.addEventListener('scroll', scrollFunction);
backToTopButton.addEventListener('click', smoothScrollBackToTop);
