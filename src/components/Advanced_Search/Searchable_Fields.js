export function generateURL() {
  const title = document.getElementById("titleInput");
  const year = document.getElementById("yearInput");

  const animation = document.getElementById("animation");
  const comedy = document.getElementById("comedy");
  const horror = document.getElementById("horror");
  const sciFi = document.getElementById("sciFi");

  const language = document.getElementById("languageInput");
  const country = document.getElementById("countryInput");
  const imdbRating = document.getElementById("imdbRatingInput");

  const movieInput = document.getElementById("movieInput");
  const tvSeries = document.getElementById("TV-Series");

  const lastSearch = document.getElementById("last-search");

  let endUrl = [];

  function checkTitleField() {
    if (title.value) {
      let checkTitle = `Title=${title.value}`;
      endUrl.push(checkTitle);
      console.log(endUrl);
    } else {
      let checkTitle = "";
      return checkTitle;
    }
  }

  function checkYearField() {
    if (year.value) {
      let checkYear = `Year=${year.value}`;
      endUrl.push("&" + checkYear);
    } else {
      let checkYear = "";
      return checkYear;
    }
  }

  function checkLanguageField() {
    if (language.value !== undefined) {
      let checkLanguage = `Language=${language.value}`;
      endUrl.push("&" + checkLanguage);
    } else {
      let checkLanguage = "";
      return checkLanguage;
    }
  }

  function checkCountryField() {
    if (country.value !== undefined) {
      let checkCountry = `Country=${country.value}`;
      endUrl.push("&" + checkCountry);
    } else {
      let checkCountry = "";
      return checkCountry;
    }
  }

  function checkImdbRatingField() {
    if (country.value) {
      let checkImdbRating = `imdbRating=${imdbRating.value}`;
      endUrl.push("&" + checkImdbRating);
      console.log(endUrl);
    } else {
      let checkImdbRating = "";
      return checkImdbRating;
    }
  }

  const action = document.getElementById("action");
  action.addEventListener("click", () => {
    checkActionBox();
  });

  function checkActionBox() {
    if (action.checked == true) {
      let checkAction = `&Genre=Action`;
      console.log(checkAction);
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
