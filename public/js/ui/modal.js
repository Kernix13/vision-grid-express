import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');

// WHAT IMAGE SIZE AM I LOADING? It should be .regular, I think it is .small
export function setModalContent(element, item, id) {
	element.textContent = '';

	const image = document.createElement('img');
	image.src = item.src;
	image.className = 'modal-image';

	// Button container
	const btnsContainer = document.createElement('div');
	btnsContainer.className = 'modal-buttons';

	// Add navigation + save/remove functionality
	modalNav(btnsContainer, id, innerModal);

	const page = window.location.pathname;
	console.log(page); // /index.html or / or /board.html
	let images = [];
	let modalImg = {};

	if (page === '/board.html') {
		images = getLocalStorage('saved-images');
		modalImg = images.find((img) => img.id === id);
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
function modalNav(btnsContainer, id, innerModal) {
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
		
		const currentIndex = images.findIndex((img) => img.id === id);
		
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
				domImage = domImageContainer.querySelector('.regular');
			} else {
				domImage = domImageContainer.querySelector('.result-image');
			}

			setModalContent(innerModal, domImage, nextImageObj.id);
		});

		btnsContainer.append(btn);
	});
}

/* HELPER FUNCTION 2: Detect aspect ratio of image */
function detectAspectRatio(img, el) {
	// Calculate ratio
	const w = Number(img.width);
	const h = Number(img.height);
	const ratio = Number((w / h).toFixed(2));
	// Set an arbitrary tolerance (only needed for square-ish)
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

/* HELPER FUNCTION 3: Save and Remove buttons + nav to next item */
// This is a huge function because of btn.addEventListener. Refactor?
function modalSaveRemove(btnsContainer, id, innerModal) {
	const arr = ['Save', 'Remove'];

	arr.forEach((item) => {
		const btn = document.createElement('button');
		btn.className = `modal-${item.toLowerCase()}`;
		btn.textContent = item;

		// This is the prev
		btn.addEventListener('click', () => {
			const images = getLocalStorage('fetched-search-results');
			const imageItem = images.find((img) => img.id === id);
			const imageItemIndex = images.findIndex((img) => img.id === id);
			let advanceToIndex;
			// Is this logic is correct?
			if (imageItemIndex === 0) {
				advanceToIndex = 0;
			} else if (imageItemIndex > 0) {
				advanceToIndex = imageItemIndex - 1;
			} else {
				advanceToIndex = imageItemIndex + 1;
			}

			if (item === 'Save') {
				const savedImages = getLocalStorage('saved-images') || [];
				if (imageItem) {
					savedImages.push(imageItem);
					setLocalStorage('saved-images', savedImages);
				}
			}

			// Remove from fetched results and DOM
			const updatedFetched = images.filter((img) => img.id !== id);
			setLocalStorage('fetched-search-results', updatedFetched);

			const card = document.getElementById(id);
			if (card) card.remove();

			// Advance or close modal
			const updatedImages = getLocalStorage('fetched-search-results');
			if (updatedImages.length > 0) {
				const nextImageObj = updatedImages[advanceToIndex];
				const domImageContainer = document.getElementById(nextImageObj.id);
				const domImage = domImageContainer.querySelector('.result-image');

				setModalContent(innerModal, domImage, nextImageObj.id);
			}

			if (updatedImages.length === 1) {
				modalBg.classList.remove('show-modal');
			}
		});

		btnsContainer.append(btn);
	});
}

/* HELPER FUNCTION 5: Create editable blockquote */
function editableQuote(el, image) {
	const quote = document.createElement('blockquote');
	quote.className = 'editable-quote';
	quote.dataset.id = image.id;
	quote.setAttribute('contenteditable', true);

	const placeholder =
		'Write your affirmation or goal statement here. Note: the max character length is 115 and this sentence here is 115.';

	quote.textContent = image.affirmation || placeholder;
	el.append(quote);

	quote.addEventListener('focusout', () => {
		const savedImages = getLocalStorage('saved-images');
		const image = savedImages.find((img) => img.id === quote.dataset.id);
		if (!image) return;

		image.affirmation = quote.textContent.trim();
		setLocalStorage('saved-images', savedImages);
	});
}
