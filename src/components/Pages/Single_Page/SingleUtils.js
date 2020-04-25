import formatNumber from "format-number";
//var format=require('format-number');
import Cookie from "js-cookie";

export function getVotes() {
  const imdbVotesString = document.getElementById("imdb-votes").innerText;
  const [_, imdbVotes] = imdbVotesString.split(" ");
  // const _ = imdbVotes.split(" ")[0];
  // const imdbVotes = imdbVotes.split(" ")[1];

  return Number(imdbVotes.replace(/,/g, ""));
}

export function hightLightLoveButton(loveButton, likeButton, dislikeButton) {
  loveButton.style.backgroundColor = "#bb0306";
  likeButton.style.backgroundColor = "rgba(255, 255, 255, 0.16)";
  dislikeButton.style.backgroundColor = "rgba(255, 255, 255, 0.16)";
}

export function updateVotesOnUI(votes) {
  const votesDom = document.getElementById("imdb-votes");

  const innerText = `Votes: ${formatNumber()(votes)}`;
  votesDom.innerText = innerText;
}

export function loveButtonLoadingState(loveButton, loader) {
  loveButton.classList.add("hide-content");
  loader.show();
}

export function updateVotesOnServer(votes, movieId) {
  const url = `https://movies-app-siit.herokuapp.com/movies/${movieId}`;
  const token = Cookie.get("token");

  return fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": token
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify({
      imdbVotes: formatNumber()(votes)
    })
  }).then(response => response.json());
}

export function loveButtonInitialState(loveButton, loader) {
  loveButton.classList.remove("hide-content");
  loader.hide();
}