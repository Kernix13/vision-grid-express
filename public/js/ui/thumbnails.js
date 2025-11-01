import { getLocalStorage } from "../utils/localStorage.js";

const thumbnails = document.querySelector('.thumbnails');
const savedImages = getLocalStorage('saved-images');

export function addThumbnailsToDom() {



  savedImages.forEach(img => {
    const thumbItem = document.createElement('div');
    thumbItem.setAttribute('data-id', img.id);
    thumbItem.className = 'thumb-item';

    // Create thumbnails
    const thumbnail = document.createElement('img')
    thumbnail.src = img.imageThumb;
    thumbnail.alt = img.description;
    thumbnail.className = 'thumb-image';

    thumbItem.append(thumbnail)

    // Change "controls" to something else
    const thumbControls = document.createElement('div');
    thumbControls.className = 'thumb-controls';

    const upBtn = document.createElement('button');
    upBtn.textContent = '↑';
    upBtn.className = 'move-up';
    upBtn.setAttribute('title', 'Move image up');
    upBtn.setAttribute('aria-label', 'Move image up');

    thumbControls.append(upBtn);

    const downBtn = document.createElement('button');
    downBtn.textContent = '↓';
    downBtn.className = 'move-down';
    downBtn.setAttribute('title', 'Move image down');
    downBtn.setAttribute('aria-label', 'Move image down');

    thumbControls.append(downBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete';
    deleteBtn.setAttribute('title', 'Delete image');
    deleteBtn.setAttribute('aria-label', 'Delete image');

    thumbControls.append(deleteBtn);

    thumbItem.append(thumbControls);
    thumbnails.append(thumbItem);
  });
}