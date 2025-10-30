import { getLocalStorage, setLocalStorage } from "../utils/localStorage.js";

const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');

// WHAT IMAGE SIZE AM I LOADING? It should be .regular, I think it is .small
export function setModalContent(element, item, id) {
  element.textContent = '';

  // Main image
  const image = document.createElement('img');
  image.src = item.src; // Consider using item.urls.regular for Unsplash
  image.id = id;
  image.className = 'modal-image';
  element.append(image);

  // Button container
  const btnsContainer = document.createElement('div');
  btnsContainer.className = 'modal-buttons';

  // Add navigation + save/remove
  modalNav(btnsContainer, id, innerModal);
  modalSaveRemove(btnsContainer, id, innerModal);

  element.append(btnsContainer);

  // Detect aspect ratio for layout
  image.onload = () => {
    element.classList.remove('portrait', 'landscape');
    if (image.naturalHeight > image.naturalWidth) {
      element.classList.add('portrait');
    } else {
      element.classList.add('landscape');
    }
  };
}

/* HELPER FUNCTION 1 */
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
      const images = getLocalStorage('fetched-search-results');
      const currentIndex = images.findIndex(img => img.id === id);
      const nextIndex = currentIndex + item.direction;

      if (nextIndex < 0 || nextIndex >= images.length) return;

      const nextImageObj = images[nextIndex];
      const domImageContainer = document.getElementById(nextImageObj.id);
      const domImage = domImageContainer.querySelector('img.result-image');

      setModalContent(innerModal, domImage, nextImageObj.id);
    });

    btnsContainer.append(btn);
  });
}

/* HELPER FUNCTION 2 */
function modalSaveRemove(btnsContainer, id, innerModal) {
  const arr = ['Save', 'Remove'];

  arr.forEach(item => {
    const btn = document.createElement('button');
    btn.className = `modal-${item.toLowerCase()}`;
    btn.textContent = item;

    btn.addEventListener('click', () => {
      const images = getLocalStorage('fetched-search-results');
      const imageItem = images.find(img => img.id === id);
      const imageItemIndex = images.findIndex(img => img.id === id);
      const advanceToIndex =
        imageItemIndex > 0 ? imageItemIndex - 1 : imageItemIndex + 1;

      if (item === 'Save') {
        const savedImages = getLocalStorage('saved-images') || [];
        if (imageItem) {
          savedImages.push(imageItem);
          setLocalStorage('saved-images', savedImages);
        }
      }

      // Remove from fetched results and DOM
      const updatedFetched = images.filter(img => img.id !== id);
      setLocalStorage('fetched-search-results', updatedFetched);

      const card = document.getElementById(id);
      if (card) card.remove();

      // Advance or close modal
      const updatedImages = getLocalStorage('fetched-search-results');
      if (updatedImages.length > 0) {
        const nextImageObj = updatedImages[advanceToIndex];
        const domImageContainer = document.getElementById(nextImageObj.id);
        const domImage = domImageContainer.querySelector('img.result-image');

        setModalContent(innerModal, domImage, nextImageObj.id);
      }
    });

    btnsContainer.append(btn);
  });
}