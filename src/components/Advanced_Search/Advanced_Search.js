import "./Advanced_Search.css";

export class AdvancedSearch {
  constructor() {
    this.searchBox();
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
      this.searchGenre();
      this.searchYear();
      this.searchLanguage();
      this.searchCountry();
      this.searchRunetime();
      this.searchByImdbRating();
      //this.searchByimdbVotes();
      //this.searchImdbID();
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

    document.getElementById("advancedBox").appendChild(titleBox);
    titleBox.appendChild(titlelabel);
    titleBox.appendChild(titleInput);
  }

  searchRunetime() {
    const runtimeBox = document.createElement("div");

    const runtimeLabel = document.createElement("p");
    runtimeLabel.classList = "search-runtime-label";
    runtimeLabel.innerText = "Runtime";

    const runtimeInput = document.createElement("input");
    runtimeInput.className = "search-runtime-input";
    runtimeInput.setAttribute("type", "number");

    document.getElementById("advancedBox").appendChild(runtimeBox);
    runtimeBox.appendChild(runtimeLabel);
    runtimeBox.appendChild(runtimeInput);
  }

  searchGenre() {
    const genreLabel = document.createElement("p");
    genreLabel.classList = "genre-label";
    genreLabel.innerText = "Select Genre";

    const genreBox = document.createElement("div");
    genreBox.id = "genreBox";

    const actionLabel = document.createElement("p");
    actionLabel.innerText = "Action";
    const action = document.createElement("input");
    action.setAttribute("type", "checkbox");

    const animationLabel = document.createElement("p");
    animationLabel.innerText = "Animation";
    const animation = document.createElement("input");
    animation.setAttribute("type", "checkbox");

    const comedyLabel = document.createElement("p");
    comedyLabel.innerText = "Comedy";
    const comedy = document.createElement("input");
    comedy.setAttribute("type", "checkbox");

    const horrorLabel = document.createElement("p");
    horrorLabel.innerText = "Horror";
    const horror = document.createElement("input");
    horror.setAttribute("type", "checkbox");

    const sciFiLabel = document.createElement("p");
    sciFiLabel.innerText = "Sci-Fi";
    const sciFi = document.createElement("input");
    sciFi.setAttribute("type", "checkbox");

    document.getElementById("advancedBox").appendChild(genreBox);
    genreBox.appendChild(genreLabel);
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

  searchYear() {
    const yearBox = document.createElement("div");

    const yearLabel = document.createElement("p");
    yearLabel.className = "search-year-label";
    yearLabel.innerText = "Select Year";
    const yearInput = document.createElement("select");
    yearInput.className = "search-year";

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

  searchLanguage() {
    const languageBox = document.createElement("div");

    const languagelabel = document.createElement("p");
    languagelabel.classList = "search-language-label";
    languagelabel.innerText = "Language";

    const languageInput = document.createElement("select");
    languageInput.className = "search-language-input";
    languageInput.setAttribute("type", "text");

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
      "Filipino"
    ];

    const options = languages
      .map(language => `<option value = ${language}> ${language} </option>`)
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
      "France"
    ];

    const options = countrys
      .map(country => `<option value = ${country}> ${country} </option>`)
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

    document.getElementById("advancedBox").appendChild(imdbRatingBox);
    imdbRatingBox.appendChild(imdbRatingLabel);
    imdbRatingBox.appendChild(imdbRatingInput);
  }

  searchByimdbVotes() {
    const imdbVotesBox = document.createElement("div");

    const imdbVotesLabel = document.createElement("p");
    imdbVotesLabel.classList = "search-imdbVotes-label";
    imdbVotesLabel.innerText = "Votes";

    const imdbVotesInput = document.createElement("input");
    imdbVotesInput.className = "search-imdbVotes-input";
    imdbVotesInput.setAttribute("type", "number");

    document.getElementById("advancedBox").appendChild(imdbVotesBox);
    imdbVotesBox.appendChild(imdbVotesLabel);
    imdbVotesBox.appendChild(imdbVotesInput);
  }

  searchImdbID() {
    const imdbIDBox = document.createElement("div");

    const imdbIDLabel = document.createElement("p");
    imdbIDLabel.classList = "search-imdbID-label";
    imdbIDLabel.innerText = "ImDB ID";

    const imdbIDInput = document.createElement("input");
    imdbIDInput.className = "search-imdbID-input";

    document.getElementById("advancedBox").appendChild(imdbIDBox);
    imdbIDBox.appendChild(imdbIDLabel);
    imdbIDBox.appendChild(imdbIDInput);
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
    typeInput1.className = "search-type-input";
    typeInput1.setAttribute("type", "checkbox");

    const typeSeries = document.createElement("div");
    typeSeries.id = "typeSeries";
    const p2 = document.createElement("p");
    p2.classList.add("radio-slect-movie");
    p2.innerText = "TV Series";
    const typeInput2 = document.createElement("input");
    typeInput2.className = "search-type-input";
    typeInput2.setAttribute("type", "checkbox");
    typeInput2.innerText = "TV Series";

    document.getElementById("advancedBox").appendChild(typeBox);
    typeBox.appendChild(typeLabel);
    typeBox.appendChild(chooseType);
    chooseType.appendChild(typeMovie);
    chooseType.appendChild(typeSeries);
    typeMovie.appendChild(p1);
    typeMovie.appendChild(typeInput1);
    typeSeries.appendChild(p2);
    typeSeries.appendChild(typeInput2);
  }

  executeSearch() {
    const searchButtonBox = document.createElement("div");
    searchButtonBox.id = "searchButtonBox";

    const searchButton = document.createElement("button");
    searchButton.id = "searchButton";
    searchButton.innerText = "Search";

    document.getElementById("advancedBox").appendChild(searchButtonBox);
    searchButtonBox.appendChild(searchButton);
  }
}
