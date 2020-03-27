import { createFilters } from "./Create_Filters";

export function moviesClicked() {
  const movieBtn = document.getElementById("movBtn");

  movieBtn.addEventListener("click", event => {
    event.preventDefault();

    clearButton();
    createFilters();
  });
}

export function clearButton() {
  const allFilters = document.getElementsByClassName("allMovieButtons");

  for (const each of allFilters) {
    console.log(each);
    each.parentNode.parentNode.removeChild(each);
  }
}
