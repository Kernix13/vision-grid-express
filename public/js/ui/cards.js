
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