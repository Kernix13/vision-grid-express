import { getLocalStorage, setLocalStorage } from "../utils/localStorage.js";

const savedImages = getLocalStorage('saved-images');

export function addThumbnailsToDom() {
  
  const thumbnails = document.querySelector('.thumbnails');
  thumbnails.innerHTML = ''; 

  savedImages.forEach(img => {
    // Thumbnail and buttons container
    const thumbItem = document.createElement('div');
    thumbItem.setAttribute('data-id', img.id);
    thumbItem.className = 'thumb-item';

    // Thumbnail
    const thumbnail = document.createElement('img')
    thumbnail.src = img.imageThumb;
    thumbnail.alt = img.description || 'Thumbnail';
    thumbnail.className = 'thumb-image';

    // Buttons container
    const thumbBtns = document.createElement('div');
    thumbBtns.className = 'thumb-btns';

    // Up, Down, and Delete buttons - consider using fontawesome:
    // arrow-up, arrow-down, trash
    const upBtn = document.createElement('button');
    upBtn.textContent = '↑';
    upBtn.className = 'move-up';
    upBtn.setAttribute('title', 'Move image up');
    upBtn.setAttribute('aria-label', 'Move image up');

    const downBtn = document.createElement('button');
    downBtn.textContent = '↓';
    downBtn.className = 'move-down';
    downBtn.setAttribute('title', 'Move image down');
    downBtn.setAttribute('aria-label', 'Move image down');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete';
    deleteBtn.setAttribute('title', 'Delete image');
    deleteBtn.setAttribute('aria-label', 'Delete image');

    thumbBtns.append(upBtn, downBtn, deleteBtn);
    thumbItem.append(thumbnail, thumbBtns);
    thumbnails.append(thumbItem);
  });
}

export function deleteImage(event, id) {
  // I will have to refactor this when I create a confirmation modal
  const thumbItem = event.target.closest('.thumb-item');
  const imageTextItem = document.getElementById(id)

  const savedImages = getLocalStorage('saved-images');
  const newSavedImages = savedImages.filter(img => img.id !== id);

  setLocalStorage('saved-images', newSavedImages);
  thumbItem.remove();
  imageTextItem.remove();
}

export function moveImage(id, direction) {
  const savedImages = getLocalStorage('saved-images');
  const index = savedImages.findIndex(img => img.id === id);
  if (index === -1) return;

  console.log(`id: ${id}, direction: ${direction}`)
  /* Below here:
     1. if block for 'up'
     2. if block for 'down'
     3. save new 'saved-images' to localStorage
     4. Do I have to call addThumbnailsToDom & addSavedImagesToDom? 
  */
}