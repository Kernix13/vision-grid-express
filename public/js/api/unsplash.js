export async function getSearchResults(searchTerm = 'dogs running', page = 1) {
  const DOMAIN = 'http://localhost:8080';
  const endpoint = `/api/photos?query=${encodeURIComponent(searchTerm)}&page=${page}`;
  try {
    const response = await fetch(DOMAIN + endpoint);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}