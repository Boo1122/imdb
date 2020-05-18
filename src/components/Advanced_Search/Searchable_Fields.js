export function generateURL() {
  const title = document.getElementById("titleInput");
  const year = document.getElementById("yearInput");

  const genre = document.getElementById("genreInput");
  const language = document.getElementById("languageInput");
  const country = document.getElementById("countryInput");
  const imdbRating = document.getElementById("imdbRatingInput");

  const animation = document.getElementById("animation");
  const action = document.getElementById("action");
  const comedy = document.getElementById("comedy");
  const horror = document.getElementById("horror");
  const sciFi = document.getElementById("sciFi");

  const movieInput = document.getElementById("movieInput");
  const tvSeries = document.getElementById("TV-Series");

  const lastSearch = document.getElementById("last-search");

  let endUrl = [];

  function checkTitleField() {
    if (title.value) {
      let checkTitle = `Title=${title.value}`;
      title.value == endUrl[0]
        ? endUrl.push(checkTitle)
        : endUrl.push("&" + checkTitle);
      console.log(endUrl);
    } else {
      let checkTitle = "";
      return checkTitle;
    }
  }

  function checkYearField() {
    if (year.value) {
      let checkYear = `Year=${year.value}`;
      year.value == endUrl[0]
        ? endUrl.push(checkYear)
        : endUrl.push("&" + checkYear);
    } else {
      let checkYear = "";
      return checkYear;
    }
  }

  function checkLanguageField() {
    if (language.value) {
      let checkLanguage = `Language=${language.value}`;
      language.value == endUrl[0]
        ? endUrl.push(checkLanguage)
        : endUrl.push("&" + checkLanguage);
    } else {
      let checkLanguage = "";
      return checkLanguage;
    }
  }

  function checkCountryField() {
    if (country.value) {
      let checkCountry = `Country=${country.value}`;
      country.value == endUrl[0]
        ? endUrl.push(checkCountry)
        : endUrl.push("&" + checkCountry);
    } else {
      let checkCountry = "";
      return checkCountry;
    }
  }

  function checkImdbRatingField() {
    if (imdbRating.value) {
      let checkImdbRating = `imdbRating=${imdbRating.value}`;
      checkImdbRating == endUrl[0]
        ? endUrl.push(checkImdbRating)
        : endUrl.push("&" + checkImdbRating);
      console.log(endUrl);
    } else {
      let checkImdbRating = "";
      return checkImdbRating;
    }
  }

  function checkGenreField() {
    if (genre.value) {
      let checkGenre = `Genre=${genre.value}`;
      checkGenre == endUrl[0]
        ? endUrl.push(checkGenre)
        : endUrl.push("&" + checkGenre);
      console.log(endUrl);
    } else {
      let checkGenre = "";
      return checkGenre;
    }
  }

  function checkTvSeries() {
    let series = document.getElementById("TV-Series");

    if (series.checked) {
      let tv = `Type=series`;
      tv == endUrl[0] ? endUrl.push("&" + tv) : endUrl.push(tv);
    } else {
      let tv = "";
      return tv;
    }
  }

  function checkMovies() {
    let movies = document.getElementById("movieInput");
    let series = document.getElementById("TV-Series");

    if (movies.checked) {
      let movie = `Type=movie`;
      movie == endUrl[0] ? endUrl.push(movie) : endUrl.push("&" + movie);
    } else {
      let movie = "";
      return movie;
    }
  }

  function pick() {
    let movies = document.getElementById("movieInput");

    if (movies.checked) {
      checkMovies();
    } else {
      checkTvSeries();
    }
  }

  pick();
  checkTitleField();
  checkYearField();
  checkLanguageField();
  checkCountryField();
  checkImdbRatingField();
  checkGenreField();

  const realUrl = endUrl.join("");

  const url = `https://movies-app-siit.herokuapp.com/movies?${realUrl}`;

  return url;
}

export function searchableFields() {
  const url = generateURL();

  fetch(url)
    .then((response) => response.json())
    .then((searchableFields) => {
      console.log(searchableFields);
    });
}
