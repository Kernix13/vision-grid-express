import { getLocalStorage } from "../utils/localStorage.js";

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
    // The next 4 lines are to try and get Lighthouse above 80%
    if (i === 0) image.fetchPriority = 'high';
    if (i !== 0) image.loading = 'lazy';
    image.width = img.width;
    image.height = img.height;

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