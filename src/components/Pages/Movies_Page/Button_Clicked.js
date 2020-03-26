import { MoviesCategoryFilter } from "./Movies_Category_Filter";

export function moviesClicked() {
  const movieBtn = document.getElementById("movBtn");

  movieBtn.addEventListener("click", event => {
    event.preventDefault();

    clearButton();

    const title = new MoviesCategoryFilter("Title");
    const year = new MoviesCategoryFilter("Year");
    const runtime = new MoviesCategoryFilter("Runtime");
    const genre = new MoviesCategoryFilter("Genre");
    const language = new MoviesCategoryFilter("Language");
    const country = new MoviesCategoryFilter("Country");
    const poster = new MoviesCategoryFilter("Poster");
    const imdbRating = new MoviesCategoryFilter("IMDb Rating");
    const imdbVotes = new MoviesCategoryFilter("IMDb Votes");
    const imdbID = new MoviesCategoryFilter("IMDb ID");
    const type = new MoviesCategoryFilter("Type");

    return (
      title,
      year,
      runtime,
      genre,
      language,
      country,
      poster,
      imdbRating,
      imdbVotes,
      imdbID,
      type
    );
  });
}

function clearButton() {
  const allFilters = document.getElementsByClassName("allMovieButtons");

  for (const each of allFilters) {
    console.log(each);
    each.style.display = "none";
  }
}
