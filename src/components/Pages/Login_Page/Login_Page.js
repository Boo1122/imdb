import "./Login_Form.css";
import Cookie from "js-cookie";

export class LoginPage {
  constructor() {
    this.login();
    this.loginClicked();
  }

  login() {
    const body = document.getElementById("body");
    const containerForm = document.createElement("div");
    containerForm.id = "login-page";
    containerForm.classList.add("page");
    containerForm.style.backgroundImage = "url(./public/img/batman_bk14.jpg)";

    const box1 = document.createElement("div");
    box1.id = "login-box";

    const h1 = document.createElement("h1");
    h1.innerText = "Login";
    h1.id = "login-h1";

    const usernameLabel = document.createElement("label");
    usernameLabel.setAttribute("for", "name");
    usernameLabel.id = "username-login";
    usernameLabel.innerText = "Username";

    const usernameInput = document.createElement("input");
    usernameInput.id = "username-input-login";
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("placeholder", "Enter Username");
    usernameInput.setAttribute("name", "name");

    const passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.id = "password-label-login";
    passwordLabel.innerText = "Password";

    const passwordInput = document.createElement("input");
    passwordInput.id = "password-input-login";
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("placeholder", "Enter Password");
    passwordInput.setAttribute("name", "email");

    const loginBtnContainer = document.createElement("div");
    loginBtnContainer.id = "login-submit-btn";
    const loginBtn = document.createElement("button");
    loginBtn.setAttribute("type", "submit");
    loginBtn.id = "loginButton";
    loginBtn.innerText = "Login";

    const regPar = document.createElement("p");
    regPar.id = "register-paragraph";
    regPar.innerText = "If you dont have an account Register here!";
    regPar.classList.add("nav-link");
    regPar.setAttribute("data-target", "register-page");

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

    const wrapper = document.createElement("div");
    wrapper.id = "wrapper";
    containerForm.appendChild(wrapper);

    const spiderman = document.createElement("div");
    spiderman.id = "spiderman";
    wrapper.appendChild(spiderman);

    const head = document.createElement("div");
    head.classList.add("head");
    spiderman.appendChild(head);

    const leftEye = document.createElement("div");
    leftEye.classList.add("eye-left");
    const rightEye = document.createElement("div");
    rightEye.classList.add("eye-right");
    head.appendChild(leftEye);
    head.appendChild(rightEye);

    const bod = document.createElement("div");
    bod.classList.add("bod");
    spiderman.appendChild(bod);

    const spider = document.createElement("div");
    const leftArm = document.createElement("div");
    const rightArm = document.createElement("div");

    spider.classList.add("spider");
    leftArm.classList.add("arm-left");
    rightArm.classList.add("arm-right");

    bod.appendChild(spider);
    bod.appendChild(rightArm);
    bod.appendChild(leftArm);

    const legs = document.createElement("div");
    legs.classList.add("legs");
    spiderman.appendChild(legs);

    const leftBoot = document.createElement("div");
    const rightBoot = document.createElement("div");

    leftBoot.classList.add("boot-left");
    rightBoot.classList.add("boot-right");
  }

  loginClicked() {
    const logButton = document.getElementById("loginButton");
    let userName = document.getElementById("username-input-login");
    let passWord = document.getElementById("password-input-login");



    logButton.addEventListener("click", () => {
      if (userName.value == "") {
        userName.style.borderColor = "red";
      } else {
        userName.style.borderColor = "gray";
      }

      if (passWord.value == "") {
        passWord.style.borderColor = "red";
      } else {
        passWord.style.borderColor = "gray";
      }

      if (!userName.value && !passWord.value) {
        return false;
      } else {
        logButton.disabled = false;
      }

      fetch("https://movies-app-siit.herokuapp.com/auth/login", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *client
          body: JSON.stringify({
            username: `${userName.value}`,
            password: `${passWord.value}`,
          }),
        })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);



          if (json.accessToken) {

            Cookie.set("token", json.accessToken);
            let eraseInputUser = document.getElementById(
              "username-input-login"
            );
            eraseInputUser.value = "";

            let eraseInputPass = document.getElementById(
              "password-input-login"
            );

            eraseInputPass.value = "";

            this.handleButtonTransferLogin();
          }

        });
    });
  }

  handleButtonTransferLogin() {
    location.reload(false);
  }
}