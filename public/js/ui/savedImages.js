import { getLocalStorage } from '../utils/localStorage.js';
import { setModalContent } from './modal.js';

const innerModal = document.querySelector('.modal');
const radioBtns = document.querySelectorAll('.radio-option input');

export function addSavedImagesToDom() {
	const savedImages = getLocalStorage('saved-images');
	const imgTextContainer = document.getElementById('img-text-container');
	imgTextContainer.innerHTML = '';

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

let sliderInterval = null;

export function playImageSlider() {
  const images = getLocalStorage('saved-images');
	const sliderTime = getLocalStorage('slider-time') || 6;
  let idx = 0;

	let timing = sliderTime * 1000;

	// I needed the first image out of setInterval because...
  setModalContent(innerModal, images[idx].imageRegular, images[idx].id);

  sliderInterval = setInterval(() => {
    idx++;
    if (idx >= images.length) idx = 0;

    setModalContent(innerModal, images[idx].imageRegular, images[idx].id);
  }, timing);
}

export function stopImageSlider() {
  clearInterval(sliderInterval);
	radioBtns.forEach(time => {
		if (time.checked) {
			time.removeAttribute('checked')
		}
	})
}