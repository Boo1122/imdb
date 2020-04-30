function generateURL() {
  const url = `https://movies-app-siit.herokuapp.com/movies?Title=${titleInput.value}&Year=${yearInput.value}&Language=${languageInput.value}&Country=${countryInput.value}`;

  return url;
}

export function searchableFields() {
  const titleInput = document.getElementById("titleInput");
  const yearInput = document.getElementById("yearInput");
  const runtimeInput = document.getElementById("runtimeInput");
  const action = document.getElementById("action");
  const animation = document.getElementById("animation");
  const comedy = document.getElementById("comedy");
  const horror = document.getElementById("horror");
  const sciFi = document.getElementById("sciFi");
  const languageInput = document.getElementById("languageInput");
  const countryInput = document.getElementById("countryInput");
  const imdbRatingInput = document.getElementById("imdbRatingInput");
  const imdbVotesInput = document.getElementById("imdbVotesInput");
  const imdbIDInput = document.getElementById("imdbIDInput");

  const movieInput = document.getElementById("movieInput");
  const tvSeries = document.getElementById("TV-Series");

  const lastSearch = document.getElementById("last-search");

  const url = generateURL();

  fetch(url)
    .then((response) => response.json())
    .then((searchableFields) => {
      console.log(searchableFields);
    });
}
