export async function fetchImages(gameseries) {
  const response = await fetch(
    `https://amiiboapi.com/api/amiibo/?gameseries=${gameseries}`
  );
  const data = await response.json();
  const amiiboArray = data.amiibo;
  const images = amiiboArray.map((amiibo) => amiibo.image);
  return images;
}
