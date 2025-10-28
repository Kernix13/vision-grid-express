export async function fetchData() {
  const DOMAIN = 'http://localhost:8080';
  try {
    const response = await fetch(DOMAIN + '/api/photos');
    if (!response.ok) {
      throw new Error('Failed to fetch image.');
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
fetchData();