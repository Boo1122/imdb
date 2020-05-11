import "./Register_Form.css";
import Cookie from "js-cookie";

export class RegisterPage {
  constructor() {
    this.register();
    this.registration();
  }

  register() {
    const body = document.getElementById("body");

    const containerForm = document.createElement("div");
    containerForm.id = "register-page";
    containerForm.classList.add("page");
    containerForm.style.backgroundImage = "url(./public/img/batman_bk14.jpg)";

    const box2 = document.createElement("div");
    box2.id = "register-box";

    const h1 = document.createElement("h1");
    h1.innerText = "Register";
    h1.id = "register-h1";

    const completeForm = document.createElement("h4");
    completeForm.id = "register-msg";
    completeForm.innerText = "Please fill in this form to create an account.";

    const usernameLabel = document.createElement("label");
    usernameLabel.setAttribute("for", "name");
    usernameLabel.id = "username";
    usernameLabel.innerText = "Username";

    const usernameInput = document.createElement("input");
    usernameInput.id = "username-input";
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("placeholder", "Enter Username");
    usernameInput.setAttribute("name", "name");

    const passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.id = "password-label";
    passwordLabel.innerText = "Password";

    const passwordInput = document.createElement("input");
    passwordInput.id = "password-input";
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("placeholder", "Enter Password");
    passwordInput.setAttribute("name", "email");

    const confirmPasswordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.id = "confirm-password-label";

    const confirmPasswordInput = document.createElement("input");
    confirmPasswordInput.id = "confirm-password-input";
    confirmPasswordInput.setAttribute("type", "password");
    confirmPasswordInput.setAttribute("placeholder", "Confirm Password");
    confirmPasswordInput.setAttribute("name", "email");


    const message = document.createElement("p");
    message.id = "register-message";
    message.innerText =
      "By creating an account you agree to our Terms & Privacy";

    const registerBtn = document.createElement("button");
    registerBtn.setAttribute("type", "submit");
    registerBtn.id = "register-btn-form";
    registerBtn.innerText = "Register";

    const alreadyHaveAcc = document.createElement("p");
    alreadyHaveAcc.id = "existing-acc";
    alreadyHaveAcc.innerText = "I already have an Account";
    alreadyHaveAcc.classList.add("nav-link");
    alreadyHaveAcc.setAttribute("data-target", "login-page");

    body.appendChild(containerForm);
    containerForm.appendChild(box2);

    box2.appendChild(h1);
    box2.appendChild(completeForm);
    box2.appendChild(usernameLabel);
    box2.appendChild(usernameInput);

    box2.appendChild(passwordLabel);
    box2.appendChild(confirmPasswordLabel);
    box2.appendChild(passwordInput);
    box2.appendChild(confirmPasswordInput);

    box2.appendChild(registerBtn);
    box2.appendChild(alreadyHaveAcc);
    box2.appendChild(message);
  }

  registration() {
    const regButton = document.getElementById("register-btn-form");

    const userName = document.getElementById("username-input");
    const userPass = document.getElementById("password-input");
    const confirmUserPass = document.getElementById("confirm-password-input");

    regButton.addEventListener("click", () => {

      if (!userName.value && !userPass.value) {
        if (userName.value == "") {
          userName.style.borderColor = "red";
        } else {
          userName.style.borderColor = "none";
        }

        if (confirmUserPass.value == "") {
          confirmUserPass.style.borderColor = "red";
        } else {
          confirmUserPass.style.borderColor = "none";
        }

        if (userPass.value == "") {
          userPass.style.borderColor = "red";
        } else {
          userPass.style.borderColor = "none";
        }
        alert('Please fill in your username and password')

        return false;
      } else {
        regButton.disabled = false;
      }

      if (userPass.value !== confirmUserPass.value) {
        alert("Your password doesn't match, try again")
        userPass.value = "";
        userName.value = "";
        confirmUserPass.value = "";
        return false
      } else {
        regButton.disabled = false;
      }

      fetch("https://movies-app-siit.herokuapp.com/auth/register", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json"
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *client
          body: JSON.stringify({
            username: `${userName.value}`,
            password: `${userPass.value}`
          })
        })
        .then(response => response.json())
        .then(json => {
          document.cookie = `token=${json.accessToken}`;
          const token = document.cookie
            .split(";")
            .find((element) => {
              if (element.includes("token")) return true;
            })
            .split("=")[1];
          console.log(token);

          let emptyUserInput = document.getElementById("username-input");
          emptyUserInput.value = "";

          let emptyPassInput = document.getElementById("password-input");
          emptyPassInput.value = "";

          this.handleButtonsTransfetLogout();
        
        });
    });
    const inputCheckPassword = document.getElementById("confirm-password-input");
  inputCheckPassword.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("register-btn-form").click();
    }
  });
  }

  handleButtonsTransfetLogout() {
    location.reload(false);
  }
}