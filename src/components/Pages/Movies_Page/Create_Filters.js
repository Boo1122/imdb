import { createMoviesCategoryFilter } from "./Movies_Category_Filter";

export const createFilters = () => [
  createMoviesCategoryFilter("Title"),
  createMoviesCategoryFilter("Year"),
  createMoviesCategoryFilter("Genre")
];
