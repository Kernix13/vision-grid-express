export function setLocalStorage(key, val) {
	console.trace('setLocalStorage: ', key)
	return localStorage.setItem(key, JSON.stringify(val));
}

export function getLocalStorage(key) {
	console.trace('getLocalStorage: ', key)
	const item = localStorage.getItem(key);
	return item === null ? null : JSON.parse(item);
}

export function removeLocalStorage(key) {
	console.trace('removeLocalStorage: ', key)
	localStorage.removeItem(key);
}

export function incrementSearchPage(searchTerm) {
	console.trace('incrementSearchPage: ', searchTerm)
	const searchPhrasesPage = getLocalStorage('search-phrases-page');
	const searchPhrase = searchPhrasesPage.find(
		(obj) => obj.search === searchTerm,
	);
	searchPhrase.page += 1;

	setLocalStorage('search-phrases-page', searchPhrasesPage);
	return searchPhrase.page;
}
