import { toggleDisplay } from '../ui/classUtils.js';
import { setModalContent } from '../ui/modal.js';
import { addSavedImagesToDom, playImageSlider } from '../ui/savedImages.js';
import {
	addThumbnailsToDom,
	moveImage,
	selectImage,
} from '../ui/thumbnails.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

const input = document.getElementById('board-title');
const h1 = document.querySelector('.board-page-title');
const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');
const settingsForm = document.getElementById('settings-form');
const settingsBtn = document.getElementById('settings-btn');
const radioBtns = document.querySelectorAll('.radio-option input');

/**
 * * 1. Load saved images on DOMContentLoaded
 */
export function initBoardPage() {
	const savedImages = getLocalStorage('saved-images');
	if (!savedImages) {
		setLocalStorage('saved-images', []);

		const imgTextContainer = document.getElementById('img-text-container');
		imgTextContainer.innerHTML = '';
		imgTextContainer.textContent = 'No saved images to display...';
	} else {
		addThumbnailsToDom();
		addSavedImagesToDom();

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
	const editable = event.target.closest('.editable');
	if (!editable) return;

	const imageText = editable.closest('.image-text');
	const id = imageText.id;
	const imgObj = savedImages.find((img) => img.id === id);

	// I had to use innerHTML to preserve line breaks in the editable element
	imgObj.notes = editable.innerHTML.trim();

	setLocalStorage('saved-images', savedImages);
}

/**
 * * 6. Add page image to modal on click of any page image
 */
export function addPageImageToModal(event) {
	const regularImg = event.target.closest('.regular');
	if (!regularImg) return;

	const imageText = regularImg.closest('.image-text');
	const imageTextId = imageText.id;
	console.log(imageTextId);

	modalBg.classList.add('show-modal');
	modalBg.hidden = false;
	setModalContent(innerModal, regularImg.src, imageTextId);
}

/**
 * * 11. Adds/removes 'selected' class on click of any thumbnail image
 */
export function handleThumbnailClick(event) {
	const thumbItem = event.target.closest('.thumb-item');
	if (!thumbItem) return;

	const id = thumbItem.dataset.id;
	const selected = document.querySelector('.thumb-item.selected');

	// Deselect the previously selected thumbnail, if there is one
	if (selected) {
		selected.classList.remove('selected');
	}

	thumbItem.classList.add('selected');
	setLocalStorage('selected-thumb', thumbItem.dataset.id);
	selectImage(id);
}

/**
 * * 12. Handle a click on one of the 3 buttons for each thumbnail
 */
export function handleThumbnailBtns(event) {
	const thumbModal = document.getElementById('thumb-modal');
	const btn = event.target.closest('button');
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
