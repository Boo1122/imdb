export const navigate = {
  pages: [],
  show: new Event("show"),

  init(singlePage) {
    this.singlePage = singlePage;
    navigate.pages = document.querySelectorAll(".page");
    navigate.pages.forEach((pg) => {
      pg.addEventListener("show", navigate.pageShown.bind(this));
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", navigate.nav);
    });

    history.replaceState({}, "Home", " ");
    window.addEventListener("popstate", navigate.poppin);
  },

  nav: (ev) => {
    let currentPage = ev.currentTarget.getAttribute("data-target");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(currentPage).classList.add("active");
    history.pushState({}, currentPage, `#${currentPage}`);

    document.getElementById(currentPage).dispatchEvent(
      new CustomEvent("show", {
        detail: {
          movieId: ev.currentTarget.id,
        },
      })
    );
  },

  pageShown(ev) {
    if (ev.target.id === "single-movie-page") {
      this.singlePage.renderMovie(ev.detail && ev.detail.movieId);
    }
  },

  poppin: (ev) => {
    console.log(location.hash, "popstate event");
    let hash = location.hash.replace("#", "");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(hash).classList.add("active");
    document.getElementById(hash).dispatchEvent(navigate.show);
  },
};
