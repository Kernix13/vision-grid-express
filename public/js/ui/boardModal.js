import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

const innerModal = document.querySelector('.modal');

// WHAT IMAGE SIZE AM I LOADING? It should be .regular, I think it is .small
export function setModalContent(element, item, id) {
  const savedImages = getLocalStorage('saved-images');

  element.textContent = '';

  const boardModalImg = savedImages.find(img => img.id === id);

  const image = document.createElement('img');

  image.src = item.src;
  image.className = 'modal-image';

  // Button container
  const btnsContainer = document.createElement('div');
  btnsContainer.className = 'modal-buttons';

  // Add navigation + save/remove functionality
  modalNav(btnsContainer, id, innerModal);

  const quoteContainer = document.createElement('div');
  quoteContainer.className = 'img-quote';
  quoteContainer.append(image);

  editableQuote(quoteContainer, boardModalImg);
  element.append(quoteContainer);
  detectAspectRatio(boardModalImg, element);

  element.append(btnsContainer);
}

/* HELPER FUNCTION 1: prev and next buttons */
function modalNav(btnsContainer, id, innerModal) {
  const navItems = [
    { name: 'prev', symbol: '<', direction: -1 },
    { name: 'next', symbol: '>', direction: 1 },
  ];

  navItems.forEach(item => {
    const btn = document.createElement('button');
    btn.className = `nav ${item.name}`;
    btn.textContent = item.symbol;

    btn.addEventListener('click', () => {
      // saved-images for board page, fetched-search-results for index
      const images = getLocalStorage('saved-images');
      const currentIndex = images.findIndex(img => img.id === id);
      const nextIndex = currentIndex + item.direction;

      if (nextIndex < 0 || nextIndex >= images.length) return;

      const nextImageObj = images[nextIndex];
      const domImageContainer = document.getElementById(nextImageObj.id);
      const domImage = domImageContainer.querySelector('.regular');

      // Change 1. domImage,
      setModalContent(innerModal, domImage, nextImageObj.id);
    });

    btnsContainer.append(btn);
  });
}

/* HELPER FUNCTION 3: Detect aspect ratio of image */
function detectAspectRatio(img, el) {
  const w = Number(img.width);
  const h = Number(img.height);
  const ratio = Number((w / h).toFixed(2));
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

/* HELPER FUNCTION 4: Create editable blockquote */
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
    const image = savedImages.find(img => img.id === quote.dataset.id);
    if (!image) return;

    image.affirmation = quote.textContent.trim();
    setLocalStorage('saved-images', savedImages);
  });
}