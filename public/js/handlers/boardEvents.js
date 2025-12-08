import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';
import { addThumbnailsToDom } from '../ui/thumbnails.js';
import { addSavedImagesToDom } from '../ui/savedImages.js';
import { setModalContent } from '../ui/modal.js';
import { selectImage, moveImage } from '../ui/thumbnails.js';
import { toggleDisplay } from '../ui/classUtils.js';

const input = document.getElementById('board-title');
const h1 = document.querySelector('.board-page-title');
const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');
const settingsForm = document.getElementById('settings-form');
const settingsBtn = document.getElementById('settings-btn');

// On visit to board.html
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

// Add page image to modal on click of any page image
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

// Save editable text to local storage for associated image object
export function saveUserText(event) {
	const savedImages = getLocalStorage('saved-images');
	const editable = event.target.closest('.editable');
	if (!editable) return;

	const parent = editable.closest('.image-text');
	const id = parent.id;
	const imgObj = savedImages.find((img) => img.id === id);

	imgObj.notes = editable.innerHTML.trim();

	setLocalStorage('saved-images', savedImages);
}

// Adds/removes 'selected' class on click of any thumbnail image andscroll to the page image
export function handleThumbnailClick(event) {
	const thumbItem = event.target.closest('.thumb-item');
	if (!thumbItem) return;

	const id = thumbItem.dataset.id;

	// Remove previous selection
	const selected = document.querySelectorAll('.thumb-item.selected');

	if (selected.length > 0) {
		selected.forEach(item => item.classList.toggle('selected'));
	}

	thumbItem.classList.toggle('selected');
	setLocalStorage('selected-thumb', thumbItem.dataset.id);
	selectImage(id);
}

export function handleThumbnailBtns(event) {
	const thumbModal = document.getElementById('thumb-modal');
	const btn = event.target.closest('button');
	const thumbItem = event.target.closest('.thumb-item');
	if (!thumbItem) return;

	const id = thumbItem.dataset.id;

	if (btn && btn.classList.contains('move-up')) {
		moveImage(id, 'up');
		thumbItem.classList.add('selected');
		selectImage(id);
	} else if (btn && btn.classList.contains('move-down')) {
		moveImage(id, 'down');
		thumbItem.classList.add('selected');
		selectImage(id);
	} else if (btn && btn.classList.contains('delete')) {
		thumbModal.classList.add('show-modal');
		thumbModal.hidden = false;
		setLocalStorage('delete-item-id', id);
	} 
}

export function handleSliderPlayBtn() {
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
}

export function handleRadioCheck(event) {
	console.log('Selected radio:', event.target.value);
	const selected = document.querySelector('input[name="lightbox-speed"]:checked');
	console.log('Currently selected:', selected.value);
}