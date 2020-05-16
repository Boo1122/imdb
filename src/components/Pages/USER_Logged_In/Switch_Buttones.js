import Cookie from "js-cookie";

export function switchButtons() {
  const token = Cookie.get("token");

  const loginDiv = document.getElementById("login-div");
  const logOutDiv = document.getElementById("logOut-div");
  const registerButton = document.getElementById("registerBtn");
  const addMovieButton = document.getElementById("add-movie-div");

  if (token === undefined) {
    logOutDiv.style.display = "none";
    addMovieButton.style.display = "none";
  }

  if (token) {
    loginDiv.style.display = "none";
    registerButton.style.display = "none";
  }
}