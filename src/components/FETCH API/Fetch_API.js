export function generateUrl() {
  return `https://movies-api-siit.herokuapp.com/movies`;
}

export function getMovies() {
  const url = generateUrl();

  fetch(url)
    .then(response => response.json())
    .then(movieData => console.log(movieData));
}
