
export function createImgCard(arr, element) {
  arr.forEach(obj => {
    const imgCard = document.createElement('div');
    imgCard.className = 'image-card';
    imgCard.id = obj.id;
  
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';
  
    const image = document.createElement('img');
    image.className = 'result-image';
    image.src = obj.imageSmall;
    image.alt = obj.description;
  
    imgContainer.append(image)
  
    const btnsContainer = document.createElement('div');
    btnsContainer.className = 'results-buttons';
  
    const saveBtn = document.createElement('button');
    saveBtn.className = 'save';
    saveBtn.append(document.createTextNode('Save'));

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove';
    removeBtn.append(document.createTextNode('Remove'));
  
    btnsContainer.append(saveBtn);
    btnsContainer.append(removeBtn);
  
    imgCard.append(imgContainer);
    imgCard.append(btnsContainer);
  
    element.append(imgCard)
  })
}

export function removeImageCard(event) {
  const images = getLocalStorage('fetched-search-results');
  const savedImages = getLocalStorage('saved-images') || [];
  if (event.target.classList.contains('save') || event.target.classList.contains('remove')) {
    const imageCard = event.target.closest('.image-card'); 
    const id = imageCard.id;

    // Save button only
    if (event.target.className === 'save') {
      const savedImg = images.find(img => img.id === id);
      if (!savedImg) return; 
      savedImages.push(savedImg);
      setLocalStorage('saved-images', savedImages);
    }

    // End Save only, Remove from fetched list and UI
    const filteredImages = images.filter(img => img.id !== id);
    setLocalStorage('fetched-search-results', filteredImages);

    imageCard.remove();
  }
}