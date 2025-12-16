import { createImgCard } from '../ui/cards.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

export async function getSearchResults(searchTerm, page) {
	const searchGrid = document.getElementById('search-grid');
	const DOMAIN = 'http://localhost:8080';

	const endpoint = `/api/photos?query=${encodeURIComponent(searchTerm)}&page=${page}`;
	try {
		const response = await fetch(DOMAIN + endpoint);

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const data = await response.json();
		const results = await data.results;

		// Pull out important properties for each image + 3 added properties
		const resultsObject = await results.map((result) => {
			return {
				id: result.id,
				description: result.alt_description,
				blurHash: result.blur_hash,
				imageRegular: result.urls.regular,
				imageRaw: result.urls.raw,
				imageSmall: result.urls.small,
				imageThumb: result.urls.thumb,
				height: result.height,
				width: result.width,
				notes: '',
				affirmation: '',
				includeInSlider: true,
			};
		});

		// Save results to localStorage for use on index.html
		setLocalStorage('fetched-search-results', resultsObject);
		searchGrid.textContent = '';
		// Display image cards for each of the 12 images fetched
		createImgCard(getLocalStorage('fetched-search-results'), searchGrid);
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
}
