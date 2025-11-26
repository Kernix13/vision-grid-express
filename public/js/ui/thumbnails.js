import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

export function addThumbnailsToDom() {
  const savedImages = getLocalStorage('saved-images');

  const thumbnails = document.querySelector('.thumbnails');
  thumbnails.innerHTML = '';

  savedImages.forEach((img) => {
    // Thumbnail and buttons container
    const thumbItem = document.createElement('div');
    thumbItem.setAttribute('data-id', img.id);
    thumbItem.className = 'thumb-item';

    // Thumbnail
    const thumbnail = document.createElement('img');
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

// I do not think this function should be in here
export function addSavedImagesToDom() {
  const savedImages = getLocalStorage('saved-images');
  const imgTextContainer = document.getElementById('img-text-container');
  imgTextContainer.innerHTML = '';

  if (!savedImages || savedImages.length === 0) {
    imgTextContainer.textContent = 'No saved images to display...';
    return;
  }

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
    if (i === 0) image.fetchPriority = 'high';
    imageText.append(image);

    // Create editable div
    const div = document.createElement('div');
    div.className = 'editable';
    div.setAttribute('contenteditable', true);

    // Show saved notes if they exist, otherwise show placeholder
    div.innerHTML = img.notes
      ? img.notes.replace(/\n/g, '<br>')
      : 'You can add or edit notes here...';

    imageText.append(div);
    imgTextContainer.append(imageText);
  });
}

export function moveImage(id, direction) {
  const savedImages = getLocalStorage('saved-images');
  const idx = savedImages.findIndex((img) => img.id === id);
  if (idx === -1) return;

  console.log(`id: ${id}, direction: ${direction}`);

  const newOrder = [...savedImages];

  if (direction === 'up' && idx > 0) {
    [newOrder[idx], newOrder[idx - 1]] = [newOrder[idx - 1], newOrder[idx]];
    setLocalStorage('saved-images', newOrder);
  }

  if (direction === 'down' && idx < savedImages.length - 1) {
    [newOrder[idx], newOrder[idx + 1]] = [newOrder[idx + 1], newOrder[idx]];
    setLocalStorage('saved-images', newOrder);
  }

  addThumbnailsToDom();
  addSavedImagesToDom();
}

export function selectImage(id) {
  const imageText = document.getElementById(id);
  if (!imageText) return;

  imageText.scrollIntoView({ behavior: 'smooth' });
}

export function deleteImage(id) {
  const thumbItem = document.querySelector(`[data-id="${id}"]`);
  const imageTextItem = document.getElementById(id);

  const savedImages = getLocalStorage('saved-images');
  const newSavedImages = savedImages.filter((img) => img.id !== id);

  setLocalStorage('saved-images', newSavedImages);
  thumbItem.remove();
  imageTextItem.remove();
}
