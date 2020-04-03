export class Switch {
  constructor() {
    this.login();
    this.register();
    this.dontHaveAccount();
    this.haveAccount();
  }

  login() {
    const login = document.getElementById("login-page");
    const logPage = document.getElementById("login-page");
    const regPage = document.getElementById("form-container");
    const home = document.getElementById("home-page");

    login.addEventListener("click", event => {
      event.preventDefault();
      logPage.style.display = "flex";
      regPage.style.display = "none";
      home.style.display = "none";
    });
  }

  register() {
    const register = document.getElementById("registerBtn");
    const logPage = document.getElementById("login-page");
    const regPage = document.getElementById("form-container");
    const home = document.getElementById("home-page");

    register.addEventListener("click", event => {
      event.preventDefault();
      regPage.style.display = "flex";
      logPage.style.display = "none";
      home.style.display = "none";
    });
  }

  dontHaveAccount() {
    const login = document.getElementById("register-paragraph");
    const logPage = document.getElementById("login-page");
    const regPage = document.getElementById("form-container");
    const home = document.getElementById("home-page");

    login.addEventListener("click", event => {
      event.preventDefault();
      console.log(event.target);
      logPage.style.display = "none";
      regPage.style.display = "flex";
      home.style.display = "none";
    });
  }

  haveAccount() {
    const register = document.getElementById("existing-acc");
    const logPage = document.getElementById("login-page");
    const regPage = document.getElementById("form-container");
    const home = document.getElementById("home-page");

    register.addEventListener("click", event => {
      event.preventDefault();
      regPage.style.display = "none";
      logPage.style.display = "flex";
      home.style.display = "none";
    });
  }
}
