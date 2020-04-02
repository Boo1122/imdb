import "./Register_Form.css";

export class RegisterForm {
  constructor() {
    this.register();
  }

  register() {
    const body = document.getElementById("body");
    const containerForm = document.createElement("div");
    containerForm.id = "form-container";
    containerForm.classList.add('show');

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
    usernameLabel.innerText = "Username:";

    const usernameInput = document.createElement("input");
    usernameInput.id = "username-input";
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("placeholder", "Enter Username");
    usernameInput.setAttribute("name", "name");

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.id = "email-label";
    emailLabel.innerText = "Email:";

    const emailInput = document.createElement("input");
    emailInput.id = "email-input";
    emailInput.setAttribute("type", "text");
    emailInput.setAttribute("placeholder", "Enter Email");
    emailInput.setAttribute("name", "email");

    const passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.id = "password-label";
    passwordLabel.innerText = "Password:";

    const passwordInput = document.createElement("input");
    passwordInput.id = "password-input";
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("placeholder", "Enter Email");
    passwordInput.setAttribute("name", "email");

    const message = document.createElement("p");
    message.id = "register-message";
    message.innerText =
      "By creating an account you agree to our Terms & Privacy";

    const registerBtn = document.createElement("button");
    registerBtn.setAttribute("type", "submit");
    registerBtn.id = "registerBtn";
    registerBtn.innerText = "Register";

    const alreadyHaveAcc = document.createElement("p");
    alreadyHaveAcc.id = "existing-acc";
    alreadyHaveAcc.innerText = "I already have an Account";

    body.appendChild(containerForm);
    containerForm.appendChild(box2);

    box2.appendChild(h1);
    box2.appendChild(completeForm);
    box2.appendChild(usernameLabel);
    box2.appendChild(usernameInput);
    box2.appendChild(emailLabel);
    box2.appendChild(emailInput);
    box2.appendChild(passwordLabel);
    box2.appendChild(passwordInput);

    box2.appendChild(registerBtn);
    box2.appendChild(alreadyHaveAcc);
    box2.appendChild(message);
  }
}
