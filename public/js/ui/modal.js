import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');

export function setModalContent(element, imgSrc, id) {
	element.textContent = '';

	const image = document.createElement('img');
	image.src = imgSrc;
	image.className = 'modal-image';

	const btnsContainer = document.createElement('div');
	btnsContainer.className = 'modal-buttons';

	// Add prev/next navigation which calls setModalContent
	// This needs to be in the if statement
	modalNav(btnsContainer, id, innerModal);

	let images = [];
	let modalImg = {};
	const page = window.location.pathname;

	if (page === '/board.html') {
		images = getLocalStorage('saved-images');
		modalImg = images.find((img) => img.id === id);

		// quoteContainer is a bad name - it has the img and blockquote elements
		const quoteContainer = document.createElement('div');
		quoteContainer.className = 'img-quote';
		quoteContainer.append(image);

		editableQuote(quoteContainer, modalImg);
		element.append(quoteContainer);
	} else {
		images = getLocalStorage('fetched-search-results');
		modalImg = images.find((img) => img.id === id);

		element.append(image);
		modalSaveRemove(btnsContainer, id, innerModal);
	}

	detectAspectRatio(modalImg, element);
	element.append(btnsContainer);
}

/* HELPER FUNCTION 1: prev and next buttons */
function modalNav(btnsElement, imgId, modalElement) {
	const navItems = [
		{ name: 'prev', symbol: '<', direction: -1 },
		{ name: 'next', symbol: '>', direction: 1 },
	];

	navItems.forEach((item) => {
		const page = window.location.pathname;
		let images = [];
		const btn = document.createElement('button');
		btn.className = `nav ${item.name}`;
		btn.textContent = item.symbol;

		// saved-images for board page, fetched-search-results for index
		if (page === '/board.html') {
			images = getLocalStorage('saved-images');
		} else {
			images = getLocalStorage('fetched-search-results');
		}

		const currentIndex = images.findIndex((img) => img.id === imgId);

		if (currentIndex === 0 && btn.classList.contains('prev')) {
			btn.disabled = true;
		}
		if (currentIndex === images.length - 1 && btn.classList.contains('next')) {
			btn.disabled = true;
		}

		btn.addEventListener('click', () => {
			const nextIndex = currentIndex + item.direction;
			if (nextIndex < 0 || nextIndex >= images.length) return;

			let domImage;
			const nextImageObj = images[nextIndex];
			const domImageContainer = document.getElementById(nextImageObj.id);

			if (page === '/board.html') {
				domImage = domImageContainer.querySelector('.regular').src;
			} else {
				domImage = domImageContainer.querySelector('.result-image').src;
			}
			setModalContent(modalElement, domImage, nextImageObj.id);
		});

		btnsElement.append(btn);
	});
}

/* HELPER FUNCTION 2: Save and Remove buttons + nav to next item */
// This is a huge function because of btn.addEventListener. Refactor?
function modalSaveRemove(btnsElement, imgId, modalElement) {
	const arr = ['Save', 'Remove'];

	arr.forEach((item) => {
		const btn = document.createElement('button');
		btn.className = `modal-${item.toLowerCase()}`;
		btn.textContent = item;

		btn.addEventListener('click', () => {
			const images = getLocalStorage('fetched-search-results');
			const image = images.find((img) => img.id === imgId);
			const imageIndex = images.findIndex((img) => img.id === imgId);

			// Get the index to load into the modal when image removed
			const advanceToIndex = imageIndex === 0 ? 0 : imageIndex - 1;

			if (item === 'Save') {
				const savedImages = getLocalStorage('saved-images') || [];
				if (image) {
					savedImages.push(image);
					setLocalStorage('saved-images', savedImages);
				}
			}

			// Remove from fetched results and DOM
			const updatedFetched = images.filter((img) => img.id !== imgId);
			setLocalStorage('fetched-search-results', updatedFetched);

			const card = document.getElementById(imgId);
			if (card) card.remove();

			// Advance or close modal
			const updatedImages = getLocalStorage('fetched-search-results');
			if (updatedImages.length > 0) {
				const nextImageObj = updatedImages[advanceToIndex];
				const domImageContainer = document.getElementById(nextImageObj.id);
				const domImage = domImageContainer.querySelector('.result-image');

				// Recursive call of setModalContent because this Fx is called there
				setModalContent(modalElement, domImage.src, nextImageObj.id);
			}

			if (updatedImages.length === 1) {
				modalBg.classList.remove('show-modal');
			}
		});

		btnsElement.append(btn);
	});
}

/* HELPER FUNCTION 3: Detect aspect ratio of image */
function detectAspectRatio(img, el) {
  // Convert localStorage values to number
  const w = Number(img.width);
  const h = Number(img.height);
  // Calculate aspect ratio
  const ratio = Number((w / h).toFixed(2));
  // Set an arbitrary tolerance (only needed for square-ish images)
  const tolerance = 0.15;

  el.classList.remove('portrait', 'landscape', 'square');

  if (Math.abs(1 - ratio) <= tolerance) {
    el.classList.add('square');
  } else if (w > h) {
    el.classList.add('landscape');
  } else {
    el.classList.add('portrait');
  }
}

/* HELPER FUNCTION 4: Create editable blockquote in board page modal */
function editableQuote(el, image) {
	const quote = document.createElement('blockquote');
	quote.className = 'editable-quote';
	quote.dataset.id = image.id;
	quote.setAttribute('contenteditable', true);

	const placeholder =
		'Write your affirmation or goal statement here. Note: the max character length is 115 and this sentence here is 115.';

	// Load localStorage text or default/placeholder if empty 
	quote.textContent = image.affirmation || placeholder;
	el.append(quote);

	// Set blockquote text to localStorage while modal open
	quote.addEventListener('focusout', () => {
		const savedImages = getLocalStorage('saved-images');
		const image = savedImages.find((img) => img.id === quote.dataset.id);
		if (!image) return;

		image.affirmation = quote.textContent.trim();
		setLocalStorage('saved-images', savedImages);
	});
}
