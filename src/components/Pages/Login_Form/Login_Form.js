import "./Login_Form.css";

export class LoginForm {
  constructor() {
    this.login();
  }

  login() {
    const body = document.getElementById("body");
    const containerForm = document.createElement("div");
    containerForm.id = "login-page";
    containerForm.classList.add('page');

    const box1 = document.createElement("div");
    box1.id = "login-box";

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

    const regPar = document.createElement("p");
    regPar.id = "register-paragraph";
    regPar.innerText = "If you dont have an account Register here";

    body.appendChild(containerForm);
    containerForm.appendChild(box1);

    box1.appendChild(h1);
    box1.appendChild(usernameLabel);
    box1.appendChild(usernameInput);

    box1.appendChild(passwordLabel);
    box1.appendChild(passwordInput);

    box1.appendChild(loginBtnContainer);
    loginBtnContainer.appendChild(loginBtn);

    box1.appendChild(regPar);
  }
}
