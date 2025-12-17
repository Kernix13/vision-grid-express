import { toggleDisplay } from '../ui/classUtils.js';
import { setModalContent } from '../ui/modal.js';
import { addSavedImagesToDom, playImageSlider } from '../ui/savedImages.js';
import {
	addThumbnailsToDom,
	moveImage,
	selectImage,
} from '../ui/thumbnails.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

// Button to toggle visibility of the settings form:
const settingsBtn = document.getElementById('settings-btn');
// Settings form and form elements:
const settingsForm = document.getElementById('settings-form');
const input = document.getElementById('board-title');
const h1 = document.querySelector('.board-page-title');
const radioBtns = document.querySelectorAll('.radio-option input');
// Image modal elements:
const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');

/**
 * * 1. Load saved images on DOMContentLoaded
 */
export function initBoardPage() {
	const savedImages = getLocalStorage('saved-images');
	if (!savedImages || savedImages.length === 0) {
		setLocalStorage('saved-images', []);

		const imgTextContainer = document.getElementById('img-text-container');
		imgTextContainer.textContent = 'No saved images to display...';
	} else {
		addSavedImagesToDom();
		addThumbnailsToDom();

		const time = getLocalStorage('slider-time');

		radioBtns.forEach((radio) => {
			if (time && radio.value === time) {
				radio.setAttribute('checked', '');
			}
		});
	}

	const boardTitle = getLocalStorage('board-title') || 'Your Project Board';
	h1.textContent = boardTitle;
	input.value = boardTitle;
}

/**
 * * 5. Save editable text to local storage for each image object
 */
export function saveUserText(event) {
	const savedImages = getLocalStorage('saved-images');
	// EVENT DELEGATION: .editable inside #img-text-container
	const editable = event.target.closest('.editable');
	if (!editable) return;

	// EVENT DELEGATION: container element for saved image and editable element
	const imageText = editable.closest('.image-text');
	const id = imageText.id;
	// Get the image object in LS that was clicked on
	const imgObj = savedImages.find((img) => img.id === id);

	// ChatGPT: Use innerHTML to preserve line breaks in the editable element
	imgObj.notes = editable.innerHTML.trim();

	setLocalStorage('saved-images', savedImages);
}

/**
 * * 6. Add page image to modal on click of any page image
 */
export function addPageImageToModal(event) {
	// EVENT DELEGATION: image inside #img-text-container
	const regularImg = event.target.closest('.regular');
	if (!regularImg) return;

	// EVENT DELEGATION: container element for saved image and editable element
	const imageText = regularImg.closest('.image-text');
	const imageTextId = imageText.id;

	modalBg.classList.add('show-modal');
	modalBg.hidden = false;
	setModalContent(innerModal, regularImg.src, imageTextId);
}

/**
 * * 11. Add/removes 'selected' class on click of any thumbnail image
 */
export function handleThumbnailClick(event) {
	// EVENT DELEGATION: image inside .thumbnails container
	const thumbItem = event.target.closest('.thumb-item');
	if (!thumbItem) return;

	// Get the id of the image from the data-id value
	const id = thumbItem.dataset.id;
	const selected = document.querySelector('.thumb-item.selected');

	// Deselect the previously selected thumbnail, if there is one
	if (selected) {
		selected.classList.remove('selected');
	}

	thumbItem.classList.add('selected');
	setLocalStorage('selected-thumb', thumbItem.dataset.id);
	// Scroll to the page image for the thumbnail clicked
	selectImage(id);
}

/**
 * * 12. Handle a click on one of the 3 buttons for each thumbnail
 */
export function handleThumbnailBtns(event) {
	const thumbModal = document.getElementById('thumb-modal');
	// EVENT DELEGATION: clicked button inside .thumbnails container
	const btn = event.target.closest('button');
	if (!btn) return;
	// EVENT DELEGATION: image tied to button click inside .thumb-item container
	const thumbItem = event.target.closest('.thumb-item');
	if (!thumbItem) return;

	const id = thumbItem.dataset.id;

	if (btn?.classList.contains('move-up')) {
		moveImage(id, 'up');
		thumbItem.classList.add('selected');
		selectImage(id);
	} else if (btn?.classList.contains('move-down')) {
		moveImage(id, 'down');
		thumbItem.classList.add('selected');
		selectImage(id);
	} else if (btn?.classList.contains('delete')) {
		thumbModal.classList.add('show-modal');
		thumbModal.hidden = false;
		setLocalStorage('delete-item-id', id);
	}
}

/**
 * * 19. Play image slider on play button click
 */
export function handleSliderPlayBtn() {
	const savedImages = getLocalStorage('saved-images');
	if (!savedImages || savedImages.length === 0) return;
	innerModal.classList.add('play');
	modalBg.classList.add('show-modal');
	modalBg.hidden = false;

	playImageSlider();
	toggleDisplay(settingsForm, settingsBtn, 'Settings');
}

/**
 * * 20. Radio buttons listener
 */
export function handleRadioCheck(event) {
	event.target.checked = true;
	event.target.setAttribute('checked', '');
	setLocalStorage('slider-time', event.target.value);
}
