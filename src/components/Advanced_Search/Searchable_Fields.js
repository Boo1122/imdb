export function generateURL() {
  const title = document.getElementById("titleInput");
  const year = document.getElementById("yearInput");
  const runtime = document.getElementById("runtimeInput");
  const action = document.getElementById("action");
  const animation = document.getElementById("animation");
  const comedy = document.getElementById("comedy");
  const horror = document.getElementById("horror");
  const sciFi = document.getElementById("sciFi");
  const language = document.getElementById("languageInput");
  const country = document.getElementById("countryInput");
  const imdbRating = document.getElementById("imdbRatingInput");
  const imdbVotes = document.getElementById("imdbVotesInput");
  const imdbIDInput = document.getElementById("imdbIDInput");

  const movieInput = document.getElementById("movieInput");
  const tvSeries = document.getElementById("TV-Series");

  const lastSearch = document.getElementById("last-search");

  // const url = `https://movies-app-siit.herokuapp.com/movies?Title=${title.value}&Year=${year.value}&Runtime=${runtime.value}&Language=${language.value}&Country=${country.value}&imdbRating=${imdbRating.value}`;

  function checkTitleField() {
    const nothing = "";
    if (title.value !== undefined) {
      const checkTitle = `Title=${title.value}`;
      console.log(checkTitle);
      return checkTitle;
    } else {
      return nothing;
    }
  }

  function checkYearField() {
    const nothing2 = "";
    if (year.value !== undefined) {
      const checkYear = `&Year=${year.value}`;
      console.log(checkYear);
      return checkYear;
    } else {
      return nothing2;
    }
  }

  const url = `https://movies-app-siit.herokuapp.com/movies?${checkTitleField()}${checkYearField()}`;

  return url;
}

export function searchableFields() {
  const url = generateURL();
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((searchableFields) => {
      console.log(searchableFields);
    });
}