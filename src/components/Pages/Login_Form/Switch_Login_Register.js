export class Switch {
  constructor() {
    this.login();
    this.register();
    this.dontHaveAccount();
    this.haveAccount();
  }

  login() {
    const login = document.getElementById("log-button");
    const logPage = document.getElementById("login-container");
    const regPage = document.getElementById("form-container");

    login.addEventListener("click", event => {
      event.preventDefault();
      logPage.style.display = "flex";
      regPage.style.display = "none";
    });
  }

  register() {
    const register = document.getElementById("reg-button");
    const logPage = document.getElementById("login-container");
    const regPage = document.getElementById("form-container");

    register.addEventListener("click", event => {
      event.preventDefault();
      regPage.style.display = "flex";
      logPage.style.display = "none";
    });
  }

  dontHaveAccount() {
    const login = document.getElementById("register-paragraph");
    const logPage = document.getElementById("login-container");
    const regPage = document.getElementById("form-container");

    login.addEventListener("click", event => {
      event.preventDefault();
      console.log(event.target);
      logPage.style.display = "none";
      regPage.style.display = "flex";
    });
  }

  haveAccount() {
    const register = document.getElementById("existing-acc");
    const logPage = document.getElementById("login-container");
    const regPage = document.getElementById("form-container");

    register.addEventListener("click", event => {
      event.preventDefault();
      console.log(event.target);
      regPage.style.display = "none";
      logPage.style.display = "flex";
    });
  }
}
