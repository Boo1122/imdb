export class LoginForm {
  constructor() {
    this.Login();
  }

  Login() {
    const body = document.getElementById("main-container");
    const containerForm = document.createElement("div");
    containerForm.id = "login-container";

    const box = document.createElement("div");
    box.id = "login-box";

    const h1 = document.createElement("h1");
    h1.innerText = "Login";
    h1.id = "login-h1";

    const usernameLabel = document.createElement("label");
    usernameLabel.setAttribute("for", "name");
    usernameLabel.id = "username-login";
    usernameLabel.innerText = "Username:";

    const usernameInput = document.createElement("input");
    usernameInput.id = "username-input-login";
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("placeholder", "Enter Username");
    usernameInput.setAttribute("name", "name");

    const passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.id = "password-label-login";
    passwordLabel.innerText = "Password:";

    const passwordInput = document.createElement("input");
    passwordInput.id = "password-input-login";
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("placeholder", "Enter Password");
    passwordInput.setAttribute("name", "email");

    const loginBtnContainer = document.createElement("div");
    loginBtnContainer.id = "login-submit-btn";
    const loginBtn = document.createElement("button");
    loginBtn.setAttribute("type", "submit");
    loginBtn.id = "loginBtn";
    loginBtn.innerText = "Login";

    body.appendChild(containerForm);
    containerForm.appendChild(box);

    box.appendChild(h1);
    box.appendChild(usernameLabel);
    box.appendChild(usernameInput);

    box.appendChild(passwordLabel);
    box.appendChild(passwordInput);

    box.appendChild(loginBtnContainer);
    loginBtnContainer.appendChild(loginBtn);
  }
}