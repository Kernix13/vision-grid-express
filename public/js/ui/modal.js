import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');

// Add image + other elements to modal on image or play button click
export function setModalContent(element, imgSrc, id) {
  element.textContent = '';

  const image = document.createElement('img');
  image.src = imgSrc;
  image.className = 'modal-image';

  const btnsContainer = document.createElement('div');
  btnsContainer.className = 'modal-buttons';

  let images = [];
  let modalImg = {};
  const page = window.location.pathname;

  // Load modal elements based on the page
  if (page === '/board.html') {
    // Add prev/next navigation only if play btn has not been clicked
    if (!innerModal.classList.contains('play')) {
      modalNav(btnsContainer, id, innerModal);
    }
    images = getLocalStorage('saved-images');
    modalImg = images.find(img => img.id === id);

    // quoteContainer - img and editable blockquote
    const quoteContainer = document.createElement('div');
    quoteContainer.className = 'img-quote';
    quoteContainer.append(image);

    editableQuote(quoteContainer, modalImg);
    element.append(quoteContainer);
  } else {
    modalNav(btnsContainer, id, innerModal);
    images = getLocalStorage('fetched-search-results');
    modalImg = images.find(img => img.id === id);

    element.append(image);
    modalSaveRemove(btnsContainer, id, innerModal);
  }

  // To determine landscape vs portrait, adds a class, may not be useful
  detectAspectRatio(modalImg, element);
  element.append(btnsContainer);
  console.log('setModalContent in modal.js');
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

		// 'saved-images' for board page, 'fetched-search-results' for index
		if (page === '/board.html') {
			images = getLocalStorage('saved-images');
		} else {
			images = getLocalStorage('fetched-search-results');
		}

		// Get the localStorage index for the image opened in the modal
		const currentIndex = images.findIndex((img) => img.id === imgId);

		// Disable nav btns for first or last image
		if (currentIndex === 0 && btn.classList.contains('prev')) {
			btn.disabled = true;
		}
		if (currentIndex === images.length - 1 && btn.classList.contains('next')) {
			btn.disabled = true;
		}

		btn.addEventListener('click', () => {
			// Decrement or increment the index based on the button clicked
			const nextIndex = currentIndex + item.direction;
			if (nextIndex < 0 || nextIndex >= images.length) return;

			let domImage;
			const nextImageObj = images[nextIndex];
			// Images for both pages are in a div container that has the image id, this is needed to get the img src
			const domImageContainer = document.getElementById(nextImageObj.id);

			// Get the img src value
			if (page === '/board.html') {
				domImage = domImageContainer.querySelector('.regular').src;
			} else {
				domImage = domImageContainer.querySelector('.result-image').src;
			}
			// Recursive call of setModalContent
			setModalContent(modalElement, domImage, nextImageObj.id);
		});

		btnsElement.append(btn);
	});
}

/* HELPER FUNCTION 2: Save and Remove buttons from modal + nav to next item */
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

			if (item === 'Save') {
				const savedImages = getLocalStorage('saved-images') || [];
				savedImages.push(image);
				setLocalStorage('saved-images', savedImages);
			}

			// Remove from fetched results and DOM
			const updatedFetched = images.filter((img) => img.id !== imgId);
			setLocalStorage('fetched-search-results', updatedFetched);

			const card = document.getElementById(imgId);
			if (card) card.remove();

			// Get the index for next image to load into the modal when image removed
			const advanceToIndex = imageIndex === 0 ? 0 : imageIndex - 1;

			// Load new image in modal after image is removed
			const updatedImages = getLocalStorage('fetched-search-results');
			if (updatedImages.length > 0) {
				// Same logic from modalNav
				const nextImageObj = updatedImages[advanceToIndex];
				const domImageContainer = document.getElementById(nextImageObj.id);
				const domImage = domImageContainer.querySelector('.result-image');

				// Recursively call setModalContent
				setModalContent(modalElement, domImage.src, nextImageObj.id);
			}

			// Close modal if last image has been removed
			if (updatedImages.length === 1) {
				modalBg.classList.remove('show-modal');
			}
		});

		btnsElement.append(btn);
	});
}

/* HELPER FUNCTION 3: Detect aspect ratio of image (mainly for the CSS) */
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

	// Set blockquote text to localStorage from modal, save first 115 chars
	const MAX_LENGTH = 115;
	quote.addEventListener('focusout', () => {
		const savedImages = getLocalStorage('saved-images');
		const image = savedImages.find((img) => img.id === quote.dataset.id);
		if (!image) return;

		image.affirmation = quote.textContent.trim().slice(0, MAX_LENGTH);
		setLocalStorage('saved-images', savedImages);
	});
}
