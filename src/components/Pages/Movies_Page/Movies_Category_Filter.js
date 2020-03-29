import "./Movies_Category_Filter.css";
import "./Movie_Button.css";

export const createMoviesCategoryFilter = categoryName => {
  const p = document.createElement("p");
  p.classList.add("filter-p");
  p.innerText = categoryName;

  const div = document.createElement("div");
  div.classList.add("movie-sub-buttons");
  div.classList.add("hide-this-item");
  div.classList.add(`${categoryName}-filter`);
  div.classList.add("movie-filter-hideable-button");

  div.appendChild(p);

  return div;
};
