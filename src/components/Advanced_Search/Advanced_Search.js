import "./Advanced_Search.css";
import { generateURL } from "./Searchable_Fields";
import { navigate } from "../Navigate_History/Navigate_History";

export class AdvancedSearch {
  constructor(fetchMoviesByUrl) {
    this.searchBox();
    this.fetchMoviesByUrl = fetchMoviesByUrl;
  }

  searchBox() {
    const box = document.getElementById("input-div");

    const containerBox = document.createElement("div");
    containerBox.id = "advancedBox";

    box.appendChild(containerBox);

    this.searchTitle();
    this.searchGenre();
    this.searchYear();
    this.searchLanguage();
    this.searchCountry();
    this.searchByImdbRating();
    this.searchByType();
    this.executeSearch();
  }

  searchTitle() {
    const titleBox = document.createElement("div");

    const titlelabel = document.createElement("p");
    titlelabel.classList = "search-title-label";
    titlelabel.innerText = "TITLE";

    const titleInput = document.createElement("input");
    titleInput.className = "search-title-input";
    titleInput.setAttribute("type", "text");
    titleInput.id = "titleInput";

    document.getElementById("advancedBox").appendChild(titleBox);
    titleBox.appendChild(titlelabel);
    titleBox.appendChild(titleInput);
  }

  searchYear() {
    const yearBox = document.createElement("div");

    const yearLabel = document.createElement("p");
    yearLabel.className = "search-year-label";
    yearLabel.innerText = "Select year:";
    const yearInput = document.createElement("select");
    yearInput.className = "search-year";
    yearInput.id = "yearInput";

    const ascendingYears = [
      "1980",
      "1981",
      "1982",
      "1983",
      "1984",
      "1985",
      "1986",
      "1987",
      "1988",
      "1989",
      "1990",
      "1991",
      "1992",
      "1993",
      "1994",
      "1995",
      "1996",
      "1997",
      "1998",
      "1999",
      "2000",
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "",
    ];

    const years = ascendingYears.reverse();

    const options = years
      .map((years) => `<option value = ${years}> ${years} </option>`)
      .join("\n");
    yearInput.innerHTML = options;

    document.getElementById("advancedBox").appendChild(yearBox);
    yearBox.appendChild(yearLabel);
    yearBox.appendChild(yearInput);
  }

  searchGenre() {
    const genreBox = document.createElement("div");

    const genreLabel = document.createElement("p");
    genreLabel.classList = "search-genre-label";
    genreLabel.innerText = "Genre";

    const genreInput = document.createElement("select");
    genreInput.className = "search-genre-input";
    genreInput.setAttribute("type", "text");
    genreInput.id = "genreInput";

    const genres = ["", "Action", "Animation", "Comedy", "Horror", "Sci-Fi"];
    const options = genres
      .map((genre) => `<option value = ${genre}> ${genre} </option>`)
      .join("\n");

    genreInput.innerHTML = options;

    document.getElementById("advancedBox").appendChild(genreBox);
    genreBox.appendChild(genreLabel);
    genreBox.appendChild(genreInput);
  }

  searchLanguage() {
    const languageBox = document.createElement("div");

    const languagelabel = document.createElement("p");
    languagelabel.classList = "search-language-label";
    languagelabel.innerText = "Language";

    const languageInput = document.createElement("select");
    languageInput.className = "search-language-input";
    languageInput.setAttribute("type", "text");
    languageInput.id = "languageInput";

    const languages = [
      "",
      "English",
      "French",
      "Spanish",
      "Japanese",
      "Italian",
      "German",
      "Portuguese",
      "Spanish",
      "Thai",
      "Romanian",
      "Filipino",
    ];

    const options = languages
      .map((language) => `<option value = ${language}> ${language} </option>`)
      .join("\n");

    languageInput.innerHTML = options;

    document.getElementById("advancedBox").appendChild(languageBox);
    languageBox.appendChild(languagelabel);
    languageBox.appendChild(languageInput);
  }

  searchCountry() {
    const countryBox = document.createElement("div");

    const countrylabel = document.createElement("p");
    countrylabel.classList = "search-country-label";
    countrylabel.innerText = "Country";

    const countryInput = document.createElement("select");
    countryInput.className = "search-country-input";
    countryInput.setAttribute("type", "text");
    countryInput.id = "countryInput";

    const countrys = [
      "",
      "USA",
      "UK",
      "Denmark",
      "Japan",
      "Canada",
      "Denmark",
      "Romania",
      "Philippines",
      "France",
    ];

    const options = countrys
      .map((country) => `<option value = ${country}> ${country} </option>`)
      .join("\n");

    countryInput.innerHTML = options;

    document.getElementById("advancedBox").appendChild(countryBox);
    countryBox.appendChild(countrylabel);
    countryBox.appendChild(countryInput);
  }

  searchByImdbRating() {
    const imdbRatingBox = document.createElement("div");

    const imdbRatingLabel = document.createElement("p");
    imdbRatingLabel.classList = "search-imdbRating-label";
    imdbRatingLabel.innerText = "Rating";

    const imdbRatingInput = document.createElement("input");
    imdbRatingInput.className = "search-imdbRating-input";
    imdbRatingInput.setAttribute("type", "number");
    imdbRatingInput.id = "imdbRatingInput";

    document.getElementById("advancedBox").appendChild(imdbRatingBox);
    imdbRatingBox.appendChild(imdbRatingLabel);
    imdbRatingBox.appendChild(imdbRatingInput);
  }

  searchByType() {
    const typeBox = document.createElement("div");

    const typeLabel = document.createElement("p");
    typeLabel.classList = "search-type-label";
    typeLabel.innerText = "Select Type";

    const chooseType = document.createElement("div");
    chooseType.id = "chooseType";

    const typeMovie = document.createElement("div");
    typeMovie.id = "typeMovie";
    const p1 = document.createElement("p");
    p1.classList.add("radio-slect-movie");
    p1.innerText = "Movie";
    const typeInput1 = document.createElement("input");
    typeInput1.name = "movie";
    typeInput1.className = "search-type-input";
    typeInput1.setAttribute("type", "radio");
    typeInput1.id = "movieInput";

    const typeSeries = document.createElement("div");
    typeSeries.id = "typeSeries";
    const p2 = document.createElement("p");
    p2.classList.add("radio-slect-movie");
    p2.innerText = "TV Series";
    const typeInput2 = document.createElement("input");
    typeInput2.name = "movie";
    typeInput2.className = "search-type-input";
    typeInput2.setAttribute("type", "radio");
    typeInput2.innerText = "TV Series";
    typeInput2.id = "TV-Series";

    document.getElementById("advancedBox").appendChild(typeBox);
    typeBox.appendChild(typeLabel);
    typeBox.appendChild(chooseType);
    chooseType.appendChild(typeMovie);
    chooseType.appendChild(typeSeries);
    typeMovie.appendChild(p1);
    typeMovie.appendChild(typeInput1);
    typeSeries.appendChild(p2);
    typeSeries.appendChild(typeInput2);

    function checkType() {
      if (document.getElementById("movieInput").checked === true) {
        document.getElementById("movieInput").value = 1;
        document.getElementById("TV-Series").value = 0;
      } else {
        document.getElementById("movieInput").value = 0;
        document.getElementById("TV-Series").value = 1;
      }
    }
  }

  executeSearch() {
    const searchButtonBox = document.createElement("div");
    searchButtonBox.id = "searchButtonBox";

    const searchButton = document.createElement("button");
    searchButton.id = "searchButton";
    searchButton.innerText = "Search";
    searchButton.id = "last-search";
    searchButton.setAttribute("data-target", "movie-page");
    searchButton.addEventListener("click", (event) => {
      const url = generateURL();
      this.fetchMoviesByUrl(url);
      navigate.nav(event);
    });

    document.getElementById("advancedBox").appendChild(searchButtonBox);
    searchButtonBox.appendChild(searchButton);
  }
}
