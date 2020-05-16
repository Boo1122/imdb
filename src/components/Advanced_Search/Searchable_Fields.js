export function generateURL() {
  const titleInput = document.getElementById("titleInput");
  const yearInput = document.getElementById("yearInput");
  const genreInput = document.getElementById("genreInput");
  const languageInput = document.getElementById("languageInput");
  const countryInput = document.getElementById("countryInput");
  const imdbRatingInput = document.getElementById("imdbRatingInput");

  let endUrl = [];

  function checkTitleField() {
    if (titleInput.value) {
      let checkTitle = `Title=${titleInput.value}`;
      titleInput.value == endUrl[0] ?
        endUrl.push(checkTitle) :
        endUrl.push("&" + checkTitle);
      console.log(endUrl);
    } else {
      let checkTitle = "";
      return checkTitle;
    }
  }

  function checkYearField() {
    if (yearInput.value) {
      let checkYear = `year=${yearInput.value}`;
      yearInput.value == endUrl[0] ?
        endUrl.push(checkYear) :
        endUrl.push("&" + checkYear);
    } else {
      let checkYear = "";
      return checkYear;
    }
  }

  function checkLanguageField() {
    if (languageInput.value) {
      let checkLanguage = `language=${languageInput.value}`;
      languageInput.value == endUrl[0] ?
        endUrl.push(checkLanguage) :
        endUrl.push("&" + checkLanguage);
    } else {
      let checkLanguage = "";
      return checkLanguage;
    }
  }

  function checkCountryField() {
    if (countryInput.value) {
      let checkCountry = `Country=${countryInput.value}`;
      countryInput.value == endUrl[0] ?
        endUrl.push(checkCountry) :
        endUrl.push("&" + checkCountry);
    } else {
      let checkCountry = "";
      return checkCountry;
    }
  }

  function checkImdbRatingField() {
    if (imdbRatingInput.value) {
      let checkImdbRating = `imdbRating=${imdbRatingInput.value}`;
      checkImdbRating == endUrl[0] ?
        endUrl.push(checkImdbRating) :
        endUrl.push("&" + checkImdbRating);
      console.log(endUrl);
    } else {
      let checkImdbRating = "";
      return checkImdbRating;
    }
  }

  function checkGenreField() {
    if (genreInput.value) {
      let checkGenre = `Genre=${genreInput.value}`;
      checkGenre == endUrl[0] ?
        endUrl.push(checkGenre) :
        endUrl.push("&" + checkGenre);
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
      console.log(endUrl);
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
    .then((searchableFields) => {});
}