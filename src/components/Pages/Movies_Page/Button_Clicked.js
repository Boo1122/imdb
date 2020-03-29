const hideableClassName = "hide-this-item";

export const onMoviesButtonClick = references => () => {
  if (references.length) {
    references.forEach(element => {
      const { classList } = element;
      if (classList.contains(hideableClassName)) {
        classList.remove(hideableClassName);
      } else {
        classList.add(hideableClassName);
      }
    });
  }
};

export const moviesButtonEventListenerHandler = () => {
  const movieBtn = document.getElementById("movBtn");
  if (movieBtn) {
    const movieBtnWrapper = document.getElementById("movies-btn-wrapper");
    if (movieBtnWrapper) {
      const filterList = movieBtnWrapper.getElementsByClassName(
        "movie-filter-hideable-button"
      );

      if (filterList) {
        movieBtn.addEventListener(
          "click",
          onMoviesButtonClick([...filterList])
        );
      }
    }
  }
};
