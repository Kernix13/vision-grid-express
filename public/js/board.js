import { scrollFunction, smoothScrollBackToTop } from './ui/backToTop.js';
import { setModalContent } from './ui/modal.js';
import { initBoardPage } from './ui/initPage.js';
import { menuButton } from './ui/menu.js';
import { deleteImage, moveImage, selectImage } from './ui/thumbnails.js';
import { toggleDisplay } from './utils/classUtils.js';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.js';

const settingsForm = document.getElementById('settings-form');
const settingsBtn = document.getElementById('settings-btn');
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

// 3. Show/hide thumbnails
thumbnailsBtn.addEventListener('click', () => {
	toggleDisplay(thumbnails, thumbnailsBtn, 'Thumbnails');
});
// 4. Close thumbnails on window click
imgTextContainer.addEventListener('click', () => {
	if (thumbnails.classList.contains('onscreen')) {
		thumbnails.classList.remove('onscreen');
		thumbnailsBtn.innerText = 'Show Thumbnails';
	}
});

// 5. Save editable text to local storage
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

// 6. open image in modal on click
imgTextContainer.addEventListener('click', (e) => {
	// const savedImages = getLocalStorage('saved-images');
	const regularImg = e.target.closest('.regular');
	if (!regularImg) return;

	// console.log(regularImg) // image-eNXZvDGqGbM, eNXZvDGqGbM -> id
	// I need to do the same thing as for thumbnails - add the id as data-id to the container, then the id to the image, then use that image id to add the image to the modal

	const imageText = regularImg.closest('.image-text');
	const imageTextId = imageText.id;
	console.log(imageTextId);

	modalBg.classList.add('show-modal');
	setModalContent(innerModal, regularImg, imageTextId);
});

// 8. Modal listeners: Close modal on click of: 1. close button, 2. window
close.addEventListener('click', () => modalBg.classList.remove('show-modal'));
window.addEventListener('click', (e) =>
	e.target === modalBg ? modalBg.classList.remove('show-modal') : false,
);

// 8. Thumbnail item
thumbnails.addEventListener('click', (e) => {
	const thumbItem = e.target.closest('.thumb-item');
	if (!thumbItem) return;

	// Remove previous selection
	// const selected = document.querySelectorAll('.thumb-item.selected');

	// if (selected.length > 0) {
	//   selected.forEach(item => item.classList.toggle('selected'));
	// }

	thumbItem.classList.toggle('selected');
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
		console.log(imageTextItem.id);
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

// 11. Delete saved image confirmation button listener
const confirmBtn = document.getElementById('confirm-delete-btn');
confirmBtn.addEventListener('click', () => {
	deleteImage(getLocalStorage('delete-item-id'));
	closeThumbDeleteModal();
});

// 12. Cancel and close button listener for thumbnail delete
const cancelBtn = document.getElementById('cancel-delete-btn');
cancelBtn.addEventListener('click', closeThumbDeleteModal);

const closeDeleteModal = document.getElementById('close');
closeDeleteModal.addEventListener('click', closeThumbDeleteModal);

// 7. Open/close hamburger menu
hamburger.addEventListener('click', () => {
	menuButton(hamburger, navMenu);
});

// 13. Back To Top
window.addEventListener('scroll', scrollFunction);
backToTopButton.addEventListener('click', smoothScrollBackToTop);
