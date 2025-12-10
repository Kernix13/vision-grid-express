import { toggleDisplay } from '../ui/classUtils.js';
import { setModalContent } from '../ui/modal.js';
import { addSavedImagesToDom } from '../ui/savedImages.js';
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

/**
 * * 1. Load saved images on DOMContentLoaded
 */
export function initBoardPage() {
	const savedImages = getLocalStorage('saved-images');
	if (savedImages.length > 0) {
		addThumbnailsToDom();
		addSavedImagesToDom();
	}

	const boardTitle = getLocalStorage('board-title') || 'Your Project Board';
	h1.textContent = boardTitle;
	input.value = boardTitle;
}

/**
 * * 5. Save editable text to local storage for associated image object
 */
export function saveUserText(event) {
	const savedImages = getLocalStorage('saved-images');
	const editable = event.target.closest('.editable');
	if (!editable) return;

	const parent = editable.closest('.image-text');
	const id = parent.id;
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
 * * 19. Play button... WIP
 */
export function handleSliderPlayBtn() {
	console.log('Start Slider button clicked');
	// I need a boolean in setModalContent so as not to load the modal with the nav buttons:
	const isSlider = true;

	// I need to start with the 1st saved image then loop thru all of them
	const savedImages = getLocalStorage('saved-images');

	// I need to get the first get first DOM image and load it for now
	const pageImages = document.querySelectorAll('img.regular');
	const imageTextEls = document.querySelectorAll('.image-text');
	modalBg.classList.add('show-modal');
	modalBg.hidden = false;

	setModalContent(innerModal, pageImages[0].src, imageTextEls[0].id);

	console.log(savedImages[0].imageRegular === pageImages[0].src);
	console.log(savedImages[0].id === imageTextEls[0].id);
	toggleDisplay(settingsForm, settingsBtn, 'Settings');
}

/**
 * * 20. Radio buttons listener... WIP
 */
export function handleRadioCheck(event) {
	console.log('Selected radio:', event.target.value);
	const selected = document.querySelector(
		'input[name="lightbox-speed"]:checked',
	);
	console.log('Currently selected:', selected.value);
}
