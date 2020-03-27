import { createFilters } from "./Create_Filters";

export function moviesClicked() {
  const movieBtn = document.getElementById("movBtn");

  movieBtn.addEventListener("click", event => {
    event.preventDefault();

    clearButton(event);
    createFilters();
  });
}

export function clearButton(event) {
  const allFilters = document.getElementsByClassName("allMovieButtons");
  event.target.parentNode.remove(allFilters);
}
