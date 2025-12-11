import { getLocalStorage } from '../utils/localStorage.js';

export function addSavedImagesToDom() {
	const savedImages = getLocalStorage('saved-images');
	const imgTextContainer = document.getElementById('img-text-container');
	imgTextContainer.innerHTML = '';

	if (!savedImages || savedImages.length === 0) {
		// THIS IS NOT DISPLAYING BECAUSE THERE IS NO img-text-container ELEMENT!
		// I'm going to need another element or something...?!?
		imgTextContainer.textContent = 'No saved images to display...';
		return;
	}

	savedImages.forEach((img, i) => {
		// Create container for regular sized image and text
		const imageText = document.createElement('div');
		imageText.id = img.id;
		imageText.className = 'image-text';

		// Create image element
		const image = document.createElement('img');
		image.className = 'regular';
		image.alt = img.description;
		image.src = img.imageRegular;
		// The next 4 lines are to try and get Lighthouse above 80%
		if (i === 0) image.fetchPriority = 'high';
		if (i !== 0) image.loading = 'lazy';
		image.width = img.width;
		image.height = img.height;

		imageText.append(image);

		// Create editable div
		const p = document.createElement('p');
		p.className = 'editable';
		p.setAttribute('contenteditable', true);

		// Show saved notes if they exist, otherwise show placeholder
		p.innerHTML = img.notes || 'You can add or edit notes here...';

		imageText.append(p);
		imgTextContainer.append(imageText);
	});
}
