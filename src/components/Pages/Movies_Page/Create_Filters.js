import { createMoviesCategoryFilter } from "./Movies_Category_Filter";

export const createFilters = () => [createMoviesCategoryFilter('title'), createMoviesCategoryFilter('year'), createMoviesCategoryFilter('genre')];
