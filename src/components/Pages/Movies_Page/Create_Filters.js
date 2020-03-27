import { MoviesCategoryFilter } from "./Movies_Category_Filter";

export function createFilters() {
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
}
