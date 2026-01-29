import { getLocalStorage } from '../utils/localStorage.js';
import { setModalContent } from './modal.js';

const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');
const radioBtns = document.querySelectorAll('.radio-option input');

// Add user saved images to the page on board.html
export function addSavedImagesToDom() {
	const savedImages = getLocalStorage('saved-images');
	const imgTextContainer = document.getElementById('img-text-container');
	imgTextContainer.innerHTML = '';

	savedImages.forEach((img, i) => {
		// Create container for regular sized image and editable text element
		const imageText = document.createElement('div');
		imageText.id = img.id;
		imageText.className = 'image-text';

		// Create image element
		const image = document.createElement('img');
		image.className = 'regular';
		image.alt = img.description;
		image.src = img.imageSmall;

		const imageMedium = `${img.imageRaw}&w=640&fit=max&auto=format`;

		image.srcset = `
			${img.imageSmall} 400w,
			${imageMedium} 640w
		`;
		image.sizes = '(max-width: 769px) 100vw, (max-width: 1374px) 50vw, 625px';

		// The next 4 lines are to try and get Lighthouse above 80%
		if (i === 0) image.fetchPriority = 'high';
		if (i !== 0) image.loading = 'lazy';
		image.width = img.width;
		image.height = img.height;

		imageText.append(image);

		// Create editable paragraph element
		const p = document.createElement('p');
		p.className = 'editable';
		p.setAttribute('contenteditable', true);

		// Show saved notes if they exist, otherwise show placeholder
		p.innerHTML = img.notes || 'You can add or edit notes here...';

		imageText.append(p);
		imgTextContainer.append(imageText);
	});
}

// Global variable for stopImageSlider which is called in closeModal
let sliderInterval = null;

export function playImageSlider() {
	const savedImages = getLocalStorage('saved-images');
	// Get the user setting or use 6 seconds as default for slider
	const sliderTime = getLocalStorage('slider-time') || 6;
	let idx = 0;

	const timing = sliderTime * 1000;

	// I needed the first image outside of setInterval or else innerModal collapses
	setModalContent(
		innerModal,
		savedImages[idx].imageRegular,
		savedImages[idx].id,
	);

	sliderInterval = setInterval(() => {
		idx++;
		if (idx >= savedImages.length) idx = 0;

		setModalContent(
			innerModal,
			savedImages[idx].imageRegular,
			savedImages[idx].id,
		);
	}, timing);
}

export function stopImageSlider() {
	clearInterval(sliderInterval);
	radioBtns.forEach((time) => {
		if (time.checked) {
			time.removeAttribute('checked');
		}
	});
}

export function closeModal() {
	modalBg.classList.remove('show-modal');
	modalBg.hidden = true;
	if (innerModal.classList.contains('play')) {
		innerModal.classList.remove('play');
		stopImageSlider();
	}
}
