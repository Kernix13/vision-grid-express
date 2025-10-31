import { getLocalStorage } from "../utils/localStorage.js";

const thumbnails = document.querySelector('.thumbnails');
const savedImages = getLocalStorage('saved-images');

export function addThumbnailsToDom() {

  savedImages.forEach(img => {
    // Create thumbnails
    const thumbnail = document.createElement('img')
    thumbnail.src = img.imageThumb;
    thumbnail.alt = img.description;
    thumbnail.id = img.id;
    thumbnail.className = 'thumb-image';

    thumbnails.append(thumbnail);
  });
  console.dir(thumbnails);
}