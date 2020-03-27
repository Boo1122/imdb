import { MoviesCategoryFilter } from "./Movies_Category_Filter";

export function createFilters() {
  const title = new MoviesCategoryFilter("Title");
  const year = new MoviesCategoryFilter("Year");
  const genre = new MoviesCategoryFilter("Genre");

  return title, year, genre;
}
