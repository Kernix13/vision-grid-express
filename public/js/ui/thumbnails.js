import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';
import { addSavedImagesToDom } from './savedImages.js';

// Add thumbnail version user saved images to the page on board.html
export function addThumbnailsToDom() {
	const savedImages = getLocalStorage('saved-images');

	const thumbnails = document.querySelector('.thumbnails');
	thumbnails.innerHTML = '';

	savedImages.forEach((img) => {
		// Container for thumbnail and button container
		const thumbItem = document.createElement('div');
		thumbItem.setAttribute('data-id', img.id);
		thumbItem.className = 'thumb-item';
		const selected = getLocalStorage('selected-thumb') || '';

		// 'selected' class shows the buttons for the thumbnail image
		if (thumbItem.dataset.id === selected) {
			thumbItem.classList.add('selected');
		}

		// Thumbnail image
		const thumbnail = document.createElement('img');
		thumbnail.src = img.imageThumb;
		thumbnail.alt = img.description || 'Thumbnail';
		thumbnail.className = 'thumb-image';

		// Buttons container
		const thumbBtns = document.createElement('div');
		thumbBtns.className = 'thumb-btns';

		// move-up, move-down, and delete buttons
		const upBtn = createThumbnailBtn('↑', 'move-up', 'Move image up');
		const downBtn = createThumbnailBtn('↓', 'move-down', 'Move image down');
		const deleteBtn = createThumbnailBtn('x', 'delete', 'Delete image');

		// thumbnail checkbox (functionality not implemented yet)
		const showInSlider = document.createElement('input');
		showInSlider.type = 'checkbox';
		showInSlider.className = 'show-in-slider';
		showInSlider.name = 'show-in-slider';
		showInSlider.checked = img.includeInSlider;
		showInSlider.setAttribute('title', 'Show image in lightbox');
		showInSlider.setAttribute(
			'aria-label',
			'Include this image in the slideshow',
		);

		thumbBtns.append(upBtn, downBtn, showInSlider, deleteBtn);
		thumbItem.append(thumbnail, thumbBtns);
		thumbnails.append(thumbItem);
	});
}

// More the thumbnail & page image up or down
export function moveImage(id, direction) {
	const savedImages = getLocalStorage('saved-images');
	const idx = savedImages.findIndex((img) => img.id === id);
	if (idx === -1) return;

	// Move the image up
	if (direction === 'up' && idx > 0) {
		// Swap positions in the array then resave to LS
		[savedImages[idx], savedImages[idx - 1]] = [
			savedImages[idx - 1],
			savedImages[idx],
		];
		setLocalStorage('saved-images', savedImages);
	}

	// Move the image down
	if (direction === 'down' && idx < savedImages.length - 1) {
		// Swap positions in the array then resave to LS
		[savedImages[idx], savedImages[idx + 1]] = [
			savedImages[idx + 1],
			savedImages[idx],
		];
		setLocalStorage('saved-images', savedImages);
	}

	// re-render page and thumbnails images based on new order
	addThumbnailsToDom();
	addSavedImagesToDom();
}

// Scroll to page image when thumbnail is clicked
export function selectImage(id) {
	const imageText = document.getElementById(id);
	if (!imageText) return;

	imageText.scrollIntoView({ behavior: 'smooth' });
}

// Function that removes the page image and thumbnail with delete modal confirmation
export function deleteImage(id) {
	const thumbItem = document.querySelector(`[data-id="${id}"]`);
	const imageTextItem = document.getElementById(id);

	const savedImages = getLocalStorage('saved-images');
	const newSavedImages = savedImages.filter((img) => img.id !== id);

	setLocalStorage('saved-images', newSavedImages);
	thumbItem.remove();
	imageTextItem.remove();
}

export function closeDeleteModal() {
	const thumbModal = document.getElementById('thumb-modal');
	thumbModal.classList.remove('show-modal');
	thumbModal.hidden = true;
}

// HELPER FUNCTION: used in addThumbnailsToDom
function createThumbnailBtn(str1, str2, str3) {
	const btn = document.createElement('button');
	btn.textContent = str1;
	btn.className = str2;
	btn.setAttribute('title', str3);
	btn.setAttribute('aria-label', str3);
	return btn;
}
