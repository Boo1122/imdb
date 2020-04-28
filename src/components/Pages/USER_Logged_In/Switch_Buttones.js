import Cookie from "js-cookie";

export function switchButtons() {
  const token = Cookie.get("token");

  const loginButton = document.getElementById("loginBtn");
  const logOutButton = document.getElementById("logOutBtn");
  const registerButton = document.getElementById("registerBtn");
  const addMovieButton = document.getElementById("addMovie");

  if (token === undefined) {
    logOutButton.style.display = "none";
    addMovieButton.style.display = "none";
  }

  if (token) {
    loginButton.style.display = "none";
    registerButton.style.display = "none";
  }
}
