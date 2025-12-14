import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

export function createImgCard(arr) {
	const searchGrid = document.getElementById('search-grid');
	arr.forEach((obj, i) => {
		const imgCard = document.createElement('div');
		imgCard.className = 'image-card';
		imgCard.id = obj.id;

		const imgContainer = document.createElement('div');
		imgContainer.className = 'img-container';

		const image = document.createElement('img');
		image.className = 'result-image';
		image.src = obj.imageSmall;
		image.alt = obj.description;
		if (i === 0) image.fetchPriority = 'high';
		if (i !== 0) image.loading = 'lazy';

		imgContainer.append(image);

		const btnsContainer = document.createElement('div');
		btnsContainer.className = 'results-buttons';

		const saveBtn = document.createElement('button');
		saveBtn.className = 'save';
		saveBtn.textContent = 'Save';

		const removeBtn = document.createElement('button');
		removeBtn.className = 'remove';
		removeBtn.textContent = 'Remove';

		btnsContainer.append(saveBtn);
		btnsContainer.append(removeBtn);

		imgCard.append(imgContainer);
		imgCard.append(btnsContainer);

		searchGrid.append(imgCard);
	});
}

export function removeImageCard(event) {
	const images = getLocalStorage('fetched-search-results');
	const savedImages = getLocalStorage('saved-images') || [];
	if (
		event.target.classList.contains('save') ||
		event.target.classList.contains('remove')
	) {
		const imageCard = event.target.closest('.image-card');
		if (!imageCard) return;
		const id = imageCard.id;

		// Save button only
		if (event.target.className === 'save') {
			const savedImg = images.find((img) => img.id === id);
			if (!savedImg) return;
			savedImages.push(savedImg);
			setLocalStorage('saved-images', savedImages);
		}

		// End Save only, Remove from fetched list and UI
		const filteredImages = images.filter((img) => img.id !== id);
		setLocalStorage('fetched-search-results', filteredImages);

		imageCard.classList.add('remove');

		imageCard.addEventListener('transitionend', () => {
			imageCard.remove();
		});
	}
}
