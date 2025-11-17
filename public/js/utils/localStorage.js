export const setLocalStorage = (str, obj) => localStorage.setItem(str, JSON.stringify(obj));

export const getLocalStorage = str => JSON.parse(localStorage.getItem(str));

export const removeLocalStorage = str => localStorage.removeItem(str);

export function incrementSearchPage(searchTerm) {
  const searchPhrasesPage = getLocalStorage('search-phrases-page');
  const searchPhrase = searchPhrasesPage.find(obj => obj.search === searchTerm);
  searchPhrase.page += 1;

  setLocalStorage('search-phrases-page', searchPhrasesPage);
  return searchPhrase.page;
}