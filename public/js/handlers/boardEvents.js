import { getLocalStorage } from '../utils/localStorage.js';
import { addThumbnailsToDom } from '../ui/thumbnails.js';
import { addSavedImagesToDom } from '../ui/savedImages.js';

const input = document.getElementById('board-title');
const h1 = document.querySelector('.board-page-title');

export function initBoardPage() {
	const savedImages = getLocalStorage('saved-images');
	if (savedImages.length > 0) {
		addThumbnailsToDom();
		addSavedImagesToDom();
	}

	const boardTitle = getLocalStorage('board-title') || 'Your Project Board';
  h1.textContent = boardTitle;
  input.value = boardTitle;
}
