export class Switch {
  constructor() {
    this.Login();
    this.Register();
  }

  Login() {
    const login = document.getElementById("log-button");
    const logPage = document.getElementById("login-container");
    const regPage = document.getElementById("form-container");

    login.addEventListener("click", event => {
      event.preventDefault();
      logPage.style.display = "flex";
      regPage.style.display = "none";
    });
  }

  Register() {
    const register = document.getElementById("reg-button");
    const logPage = document.getElementById("login-container");
    const regPage = document.getElementById("form-container");

    register.addEventListener("click", event => {
      event.preventDefault();
      regPage.style.display = "flex";
      logPage.style.display = "none";
    });
  }
}
