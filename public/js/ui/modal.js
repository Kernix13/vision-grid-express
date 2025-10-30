import { getLocalStorage, setLocalStorage } from "../utils/localStorage.js";

const modalBg = document.getElementById('modal-bg');
const innerModal = document.querySelector('.modal');

// WHAT IMAGE SIZE AM I LOADING? It should be .regular, I think it is .small
export function setModalContent(element, item, id) {
  element.textContent = '';

  const image = document.createElement('img');
  image.src = item.src; 
  image.id = id;
  image.className = 'modal-image';
  element.append(image);

  // Button container
  const btnsContainer = document.createElement('div');
  btnsContainer.className = 'modal-buttons';

  // Add navigation + save/remove functionality
  modalNav(btnsContainer, id, innerModal);
  modalSaveRemove(btnsContainer, id, innerModal);

  element.append(btnsContainer);

  // Detect aspect ratio for image layout
  image.onload = () => {
    const { naturalWidth: w, naturalHeight: h } = image;
    const ratio = w / h; 
    const tolerance = 0.15; 
    
    element.classList.remove('portrait', 'landscape', 'square');

    if (Math.abs(1 - ratio) <= tolerance) {
      element.classList.add('square');
    } else if (w > h) {
      element.classList.add('landscape');
    } else {
      element.classList.add('portrait');
    }

  };
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
      const images = getLocalStorage('fetched-search-results');
      const currentIndex = images.findIndex(img => img.id === id);
      const nextIndex = currentIndex + item.direction;

      if (nextIndex < 0 || nextIndex >= images.length) return;

      const nextImageObj = images[nextIndex];
      const domImageContainer = document.getElementById(nextImageObj.id);
      const domImage = domImageContainer.querySelector('.result-image');

      setModalContent(innerModal, domImage, nextImageObj.id);
    });

    btnsContainer.append(btn);
  });
}

/* HELPER FUNCTION 2: Save and Remove buttons */
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
      let advanceToIndex;
      // I don't think this logic is correct - refactor
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
      const updatedFetched = images.filter(img => img.id !== id);
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