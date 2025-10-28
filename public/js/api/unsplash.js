import { setLocalStorage, getLocalStorage } from "../utils/localStorage.js";
import { createImgCard } from "../ui/cards.js";

export async function getSearchResults(searchTerm, page, element) {
  const DOMAIN = 'http://localhost:8080';
  const endpoint = `/api/photos?query=${encodeURIComponent(searchTerm)}&page=${page}`;
  try {
    const response = await fetch(DOMAIN + endpoint);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const data = await response.json();
    const results = await data.results;
    const resultsObject = await results.map(result => {
      return {
        id: result.id,
        description: result.alt_description,
        blurHash: result.blur_hash,
        imageRegular: result.urls.regular,
        imageRaw: result.urls.raw,
        imageSmall: result.urls.small,
        imageThumb: result.urls.thumb,
        notes: ''
      }
    })

    setLocalStorage('fetched-search-results', resultsObject);
    createImgCard(getLocalStorage('fetched-search-results'), element)
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}