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
    //const centerbox = document.createElement("div");
    //centerbox.id = "centerBox";

    const containerBox = document.createElement("div");
    containerBox.id = "advancedBox";

    box.appendChild(containerBox);
    //centerbox.appendChild(containerBox);

    this.searchTitle();
    this.searchYear();
    this.searchRunetime();
    this.searchGenre();
    this.searchLanguage();
    this.searchCountry();
    this.searchByImdbRating();
    this.searchByimdbVotes();
    this.searchImdbID();
    this.searchByType();
    this.executeSearch();
  }

  searchTitle() {
    const titleBox = document.createElement("div");

    const titlelabel = document.createElement("p");
    titlelabel.classList = "search-title-label";
    titlelabel.innerText = "Search movie by title:";

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

    const firstYear = 2020;
    for (let i = firstYear - 120; i <= firstYear; i++) {
      let option = document.createElement("option");
      option.value = option.innerHTML = i;
      if (i === firstYear) option.selected = true;
      yearInput.appendChild(option);
    }

    document.getElementById("advancedBox").appendChild(yearBox);
    yearBox.appendChild(yearLabel);
    yearBox.appendChild(yearInput);
  }

  searchRunetime() {
    const runtimeBox = document.createElement("div");

    const runtimeLabel = document.createElement("p");
    runtimeLabel.classList = "search-runtime-label";
    runtimeLabel.innerText = "Search by runtime:";

    const runtimeInput = document.createElement("select");
    runtimeInput.className = "search-runtime-input";
    runtimeInput.id = "runtimeInput";

    const runtimeMinutes = 15;
    for (let i = runtimeMinutes; i <= 260; i++) {
      let option = document.createElement("option");
      option.value = option.innerHTML = i + " min";
      if (i === runtimeMinutes) option.selected = true;
      runtimeInput.appendChild(option);
    }

    document.getElementById("advancedBox").appendChild(runtimeBox);
    runtimeBox.appendChild(runtimeLabel);
    runtimeBox.appendChild(runtimeInput);
  }

  searchGenre() {
    const genreBox = document.createElement("div");
    genreBox.id = "genreBox";

    const actionLabel = document.createElement("p");
    actionLabel.innerText = "Action";
    const action = document.createElement("input");
    action.setAttribute("type", "checkbox");
    action.id = "action";

    const animationLabel = document.createElement("p");
    animationLabel.innerText = "Animation";
    const animation = document.createElement("input");
    animation.setAttribute("type", "checkbox");
    animation.id = "animation";

    const comedyLabel = document.createElement("p");
    comedyLabel.innerText = "Comedy";
    const comedy = document.createElement("input");
    comedy.setAttribute("type", "checkbox");
    comedy.id = "comedy";

    const horrorLabel = document.createElement("p");
    horrorLabel.innerText = "Horror";
    const horror = document.createElement("input");
    horror.setAttribute("type", "checkbox");
    horror.id = "horror";

    const sciFiLabel = document.createElement("p");
    sciFiLabel.innerText = "Sci-Fi";
    const sciFi = document.createElement("input");
    sciFi.setAttribute("type", "checkbox");
    sciFi.id = "sciFi";

    document.getElementById("advancedBox").appendChild(genreBox);

    genreBox.appendChild(actionLabel);
    genreBox.appendChild(action);

    genreBox.appendChild(animationLabel);
    genreBox.appendChild(animation);

    genreBox.appendChild(comedyLabel);
    genreBox.appendChild(comedy);

    genreBox.appendChild(horrorLabel);
    genreBox.appendChild(horror);

    genreBox.appendChild(sciFiLabel);
    genreBox.appendChild(sciFi);
  }

  searchLanguage() {
    const languageBox = document.createElement("div");

    const languagelabel = document.createElement("p");
    languagelabel.classList = "search-language-label";
    languagelabel.innerText = "Search movie by language:";

    const languageInput = document.createElement("select");
    languageInput.className = "search-language-input";
    languageInput.setAttribute("type", "text");
    languageInput.id = "languageInput";

    const languages = [
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
    countrylabel.innerText = "Search movie by Country:";

    const countryInput = document.createElement("select");
    countryInput.className = "search-country-input";
    countryInput.setAttribute("type", "text");
    countryInput.id = "countryInput";

    const countrys = [
      "USA",
      "UK",
      "Denmark",
      "Japan",
      "South Korea",
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
    imdbRatingLabel.innerText = "Search by imdbRating:";

    const imdbRatingInput = document.createElement("input");
    imdbRatingInput.className = "search-imdbRating-input";
    imdbRatingInput.setAttribute("type", "number");
    imdbRatingInput.id = "imdbRatingInput";

    document.getElementById("advancedBox").appendChild(imdbRatingBox);
    imdbRatingBox.appendChild(imdbRatingLabel);
    imdbRatingBox.appendChild(imdbRatingInput);
  }

  searchByimdbVotes() {
    const imdbVotesBox = document.createElement("div");

    const imdbVotesLabel = document.createElement("p");
    imdbVotesLabel.classList = "search-imdbVotes-label";
    imdbVotesLabel.innerText = "Search by imdbVotes:";

    const imdbVotesInput = document.createElement("input");
    imdbVotesInput.className = "search-imdbVotes-input";
    imdbVotesInput.setAttribute("type", "number");
    imdbVotesInput.id = "imdbVotesInput";

    document.getElementById("advancedBox").appendChild(imdbVotesBox);
    imdbVotesBox.appendChild(imdbVotesLabel);
    imdbVotesBox.appendChild(imdbVotesInput);
  }

  searchImdbID() {
    const imdbIDBox = document.createElement("div");

    const imdbIDLabel = document.createElement("p");
    imdbIDLabel.classList = "search-imdbID-label";
    imdbIDLabel.innerText = "Search by imdbID:";

    const imdbIDInput = document.createElement("input");
    imdbIDInput.className = "search-imdbID-input";
    imdbIDInput.id = "imdbIDInput";

    document.getElementById("advancedBox").appendChild(imdbIDBox);
    imdbIDBox.appendChild(imdbIDLabel);
    imdbIDBox.appendChild(imdbIDInput);
  }

  searchByType() {
    const typeBox = document.createElement("div");

    const typeLabel = document.createElement("p");
    typeLabel.classList = "search-type-label";
    typeLabel.innerText = "Search by Type:";

    const p1 = document.createElement("p");
    p1.classList.add("radio-slect-movie");
    p1.innerText = "Movie";
    const typeInput1 = document.createElement("input");
    typeInput1.className = "search-type-input";
    typeInput1.setAttribute("type", "checkbox");
    typeInput1.id = "movieInput";

    const p2 = document.createElement("p");
    p2.classList.add("radio-slect-movie");
    p2.innerText = "TV Series";
    const typeInput2 = document.createElement("input");
    typeInput2.className = "search-type-input";
    typeInput2.setAttribute("type", "checkbox");
    typeInput2.innerText = "TV Series";
    typeInput2.id = "TV-Series";

    document.getElementById("advancedBox").appendChild(typeBox);
    typeBox.appendChild(typeLabel);
    typeBox.appendChild(p1);
    typeBox.appendChild(typeInput1);
    typeBox.appendChild(p2);
    typeBox.appendChild(typeInput2);
  }

  executeSearch() {
    const searchButtonBox = document.createElement("div");
    searchButtonBox.in = "searchButtonBox";

    const searchButton = document.createElement("button");
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
