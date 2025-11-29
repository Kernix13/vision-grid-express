export function setLocalStorage(str, val) {
	return localStorage.setItem(str, JSON.stringify(val));
}

export function getLocalStorage(str) {
	return JSON.parse(localStorage.getItem(str));
}

export function removeLocalStorage(str) {
	return localStorage.removeItem(str);
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
