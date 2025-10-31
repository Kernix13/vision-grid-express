import { getLocalStorage } from "../utils/localStorage.js";

const imgTextContainer = document.getElementById('img-text-container');
const savedImages = getLocalStorage('saved-images');

export function addSavedImagesToDom() {
  if (!savedImages || savedImages.length === 0) {
    imgTextContainer.append(document.createTextNode('No saved images to display...'));
    return;
  }

  savedImages.forEach(img => {

    // Create container for regular sized image and text
    const imageText = document.createElement('div');
    imageText.id = img.id;
    imageText.className = 'image-text';

    // Create image element
    const image = document.createElement('img');
    image.className = 'regular';
    image.id = `image-${img.id}`;
    image.alt = img.description;
    image.src = img.imageRegular;
    imageText.append(image);

    // Create editable div
    const div = document.createElement('div');
    div.className = 'editable';
    div.id = `text-${img.id}`;
    div.setAttribute('contenteditable', true);

    // Show saved notes if they exist, otherwise show placeholder
    div.innerHTML =
      img.notes && img.notes.trim() !== ''
        ? img.notes.replace(/\n/g, '<br>')
        : 'You can add or edit notes here...';

    imageText.append(div);
    imgTextContainer.append(imageText);
  });
}