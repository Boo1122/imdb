import './Movies_Category_Filter.css' from './Movies_Category_Filter.css'

export class MoviesCategoryFilter {
  constructor(text) {
    this.cat = text;
    this.Name(text);
  }

  Name(text) {
    const movieBtn = document.getElementById("movBtn");

    const div = document.createElement("div");
    div.id = `${text}-div`;
    const p = document.createElement("p");
    p.classList.add("allMovieButtons");
    p.innerText = `${text}`;

    movieBtn.appendChild(div);
    div.appendChild(p);
  }
}

export function moviesClicked() {
  const movieBtn = document.getElementById("movBtn");

  movieBtn.addEventListener("click", event => {
    event.preventDefault();
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
