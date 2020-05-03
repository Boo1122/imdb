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

  function checkTitleField() {
    if (title.value) {
      let checkTitle = `Title=${title.value}`;
      console.log(checkTitle);
      return checkTitle;
    } else {
      let checkTitle = "";
      console.log(checkTitle);
      return checkTitle;
    }
  }

  function checkYearField() {
    if (year.value) {
      let checkYear = `&Year=${year.value}`;
      console.log(checkYear);
      return checkYear;
    } else {
      let checkYear = "";
      return checkYear;
    }
  }

  function checkLanguageField() {
    if (language.value !== undefined) {
      let checkLanguage = `&Language=${language.value}`;
      console.log(checkLanguage);
      return checkLanguage;
    } else {
      let checkLanguage = "";
      return checkLanguage;
    }
  }

  function checkCountryField() {
    if (country.value !== undefined) {
      let checkCountry = `&Country=${country.value}`;
      console.log(checkCountry);
      return checkCountry;
    } else {
      let checkCountry = "";
      return checkCountry;
    }
  }

  function checkImdbRatingField() {
    if (country.value) {
      let checkImdbRating = `&imdbRating=${imdbRating.value}`;
      console.log(checkImdbRating);
      return checkImdbRating;
    } else {
      let checkImdbRating = "";
      return checkImdbRating;
    }
  }

  const url = `https://movies-app-siit.herokuapp.com/movies?${checkTitleField()}${checkYearField()}${checkLanguageField()}${checkCountryField()}${checkImdbRatingField()}`;

  console.log(url);

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
