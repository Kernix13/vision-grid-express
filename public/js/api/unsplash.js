import { createImgCard } from '../ui/cards.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

export async function getSearchResults(searchTerm, page, element) {
	const searchGrid = document.getElementById('search-grid');
	const DOMAIN = 'http://localhost:8080';
	const badCharacters = [
		'',
		' ',
		'_',
		'-',
		'>',
		'.',
		'|',
		';',
		'[',
		']',
		'{',
		'}',
		'(',
		')',
		'*',
		'`',
		'~',
		'"',
		':',
	];

	const endpoint = `/api/photos?query=${encodeURIComponent(searchTerm)}&page=${page}`;
	try {
		if (badCharacters.includes(searchTerm)) {
			// Alert? Popup/modal? Add another hidden element to display error? Below input element? Then add return;
		}
		const response = await fetch(DOMAIN + endpoint);

		if (!response.ok) throw new Error(`Response status: ${response.status}`);

		const data = await response.json();
		const results = await data.results;
		console.log(results);
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
			};
		});

		setLocalStorage('fetched-search-results', resultsObject);
		searchGrid.textContent = '';
		createImgCard(getLocalStorage('fetched-search-results'), element);
		console.log(data);
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
}
