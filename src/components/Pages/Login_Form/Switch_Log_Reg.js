export function switchLogin() {
  const login = document.getElementById("log-button");

  const logPage = document.getElementById("login-container");
  const regPage = document.getElementById("form-container");

  login.addEventListener("click", event => {
    event.preventDefault();
    console.log(event.target.id);
  });
}

export function switchRegister() {
  const register = document.getElementById("reg-button");

  const logPage = document.getElementById("login-container");
  const regPage = document.getElementById("form-container");

  register.addEventListener("click", event => {
    event.preventDefault();
    console.log(event.target.id);
  });
}
