export class RegisterForm {
  constructor() {
    this.Register();
  }

  Register() {
    const body = document.getElementById("body");
    const containerForm = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.innerText = "Register";
    h1.id = "register-h1";
    const completeForm = document.createElement("p");
    completeForm.id = "register-msg";
    completeForm.innerText = "Please fill in this form to create an account.";

    const usernameLabel = document.createElement("label");
    usernameLabel.setAttribute("for", "name");
    usernameLabel.id = "username";
    usernameLabel.innerText = "username";

    const usernameInput = document.createElement("input");
    usernameInput.id = "username-input";
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("placeholder", "Enter Name");
    usernameInput.setAttribute("name", "name");

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.id = "email-label";
    emailLabel.innerText = "Email";

    const emailInput = document.createElement("input");
    emailInput.id = "email-input";
    emailInput.setAttribute("type", "text");
    emailInput.setAttribute("placeholder", "Enter Email");
    emailInput.setAttribute("name", "email");

    const passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.id = "password-label";
    passwordLabel.innerText = "Password";

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

    body.appendChild(containerForm);
    containerForm.appendChild(h1);
    containerForm.appendChild(completeForm);
    containerForm.appendChild(usernameLabel);
    containerForm.appendChild(usernameInput);
    containerForm.appendChild(emailLabel);
    containerForm.appendChild(emailInput);
    containerForm.appendChild(passwordLabel);
    containerForm.appendChild(passwordInput);
    containerForm.appendChild(message);
    containerForm.appendChild(registerBtn);
  }
}
