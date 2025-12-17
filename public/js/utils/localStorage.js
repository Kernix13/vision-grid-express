export function setLocalStorage(key, val) {
	return localStorage.setItem(key, JSON.stringify(val));
}

export function getLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

export function removeLocalStorage(key) {
	return localStorage.removeItem(key);
}

export function incrementSearchPage(searchTerm) {
	const searchPhrasesPage = getLocalStorage('search-phrases-page');
	const searchPhrase = searchPhrasesPage.find(
		(obj) => obj.search === searchTerm,
	);
	searchPhrase.page += 1;

	setLocalStorage('search-phrases-page', searchPhrasesPage);
	return searchPhrase.page;
}
