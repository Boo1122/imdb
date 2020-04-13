import "./Movie_Page.css";
import { navigate } from "../../Navigate_History/Navigate_History";

export class MoviePage {
  constructor() {
    this.moviePage();
    this.generateUrl();
    this.getMovies();
    // this.moviesPagination();
  }

  moviePage() {
    const body = document.getElementById("body");
    const container = document.createElement("div");
    container.id = "movie-page";
    container.classList.add("page");
    container.style.backgroundImage = "url(./public/img/star_wars_sword.jpg)";

    const movieListContainer = document.createElement("div");
    movieListContainer.id = "movie-list-container";

    body.appendChild(container);
    container.appendChild(movieListContainer);
  }

  generateUrl(par) {
    return `https://movies-api-siit.herokuapp.com/movies${par}`;
  }

  getMovies() {
    const url = this.generateUrl("?take=10&skip=10");

    fetch(url)
      .then((response) => response.json())
      .then((movieData) => {
        this.movieData = movieData;
        this.renderMovieList();
      });
  }

  renderMovieList() {
    for (const movie of this.movieData.results) {
      this.moviesContent(movie);
    }
  }

  moviesContent(movie) {
    const body = document.getElementById("movie-list-container");

    const container = document.createElement("div");
    container.setAttribute("data-target", "single-movie-page");
    container.addEventListener("click", navigate.nav);

    container.id = movie._id;
    container.classList.add("movie-page-container");

    const posters = document.createElement("div");

    posters.className = "posters";

    const p = document.createElement("p");
    p.innerHTML = movie.Title;

    const img = document.createElement("img");
    img.classList.add("detail-posters");
    img.setAttribute("src", movie.Poster);

    body.appendChild(container);
    container.appendChild(posters);
    posters.appendChild(p);
    posters.appendChild(img);
  }

  moviesPagination() {
    const body = document.getElementById("body");
    const paginationMovie = document.getElementById("movie-page");

    const paginationDiv = document.createElement("div");
    paginationDiv.className = "pagination-div";
    paginationDiv.id = "pagDiv";

    const previous = document.createElement("button");
    previous.id = "previous-movie";
    previous.classList.add("nav-link");
    previous.className = "previous";
    previous.innerText = `< Previous`;

    const next = document.createElement("button");
    next.id = "next-movie";
    next.classList.add("nav-link");
    next.className = "next";
    next.innerText = `Next >`;

    const pagesContainer = document.createElement("div");
    pagesContainer.id = "pages-container";
    const page1 = document.createElement("p");
    page1.innerText = "1";
    page1.classList.add("nav-link", "pageNumber");
    page1.setAttribute("data-target", "next-movie"); //"movie-page1" intre ghilimele

    const page2 = document.createElement("p");
    page2.innerText = "2";
    page2.classList.add("nav-link", "pageNumber");
    page2.setAttribute("data-target", "next-movie");

    const page3 = document.createElement("p");
    page3.innerText = "3";
    page3.classList.add("nav-link", "pageNumber");
    page3.setAttribute("data-target", "next-movie");

    const page4 = document.createElement("p");
    page4.innerText = "4";
    page4.classList.add("nav-link", "pageNumber");
    page4.setAttribute("data-target", "next-movie");

    const page5 = document.createElement("p");
    page5.innerText = "5";
    page5.classList.add("nav-link", "pageNumber");
    page5.setAttribute("data-target", "next-movie");

    const page6 = document.createElement("p");
    page6.innerText = "6";
    page6.classList.add("nav-link", "pageNumber");
    page6.setAttribute("data-target", "next-movie");

    const page7 = document.createElement("p");
    page7.innerText = "7";
    page7.classList.add("nav-link", "pageNumber");
    page7.setAttribute("data-target", "next-movie");

    const page8 = document.createElement("p");
    page8.innerText = "8";
    page8.classList.add("nav-link", "pageNumber");
    page8.setAttribute("data-target", "next-movie");

    const page9 = document.createElement("p");
    page9.innerText = "9";
    page9.classList.add("nav-link", "pageNumber");
    page9.setAttribute("data-target", "next-movie");

    const page10 = document.createElement("p");
    page10.innerText = "10";
    page10.classList.add("nav-link", "pageNumber");
    page10.setAttribute("data-target", "next-movie");

    body.appendChild(paginationMovie);
    paginationMovie.appendChild(paginationDiv);
    paginationDiv.appendChild(pagesContainer);
    pagesContainer.appendChild(previous);

    pagesContainer.appendChild(page1);
    pagesContainer.appendChild(page2);
    pagesContainer.appendChild(page3);
    pagesContainer.appendChild(page4);
    pagesContainer.appendChild(page5);
    pagesContainer.appendChild(page6);
    pagesContainer.appendChild(page7);
    pagesContainer.appendChild(page8);
    pagesContainer.appendChild(page9);
    pagesContainer.appendChild(page10);

    pagesContainer.appendChild(next);
  }
}
//   paginationFetch(
//     progress,
//     url = "https://movies-api-siit.herokuapp.com/movies",
//     movies = []
//   ) {
//     return new Promise((resolve, reject) =>
//       fetch(url)
//         .then((response) => {
//           if (response.status !== 200) {
//             throw `${response.status}: ${response.statusText}`;
//           }
//           response
//             .json()
//             .then((moviesData) => {
//               movies = movies.concat(moviesData);
//               //console.log(moviesData.pagination.links.next);
//               if (moviesData.pagination.links.next) {
//                 progress && progress(movies);
//                 this.paginationFetch(
//                   progress,
//                   moviesData.pagination.links.next,
//                   movies
//                 )
//                   .then(resolve)
//                   .catch(reject);
//               } else {
//                 resolve(movies);
//               }
//             })
//             .catch(reject);
//         })
//         .catch(reject)
//     );
//   }
// }
