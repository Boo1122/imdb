export class LoginPage {
    constructor() {
        this.loginPage();
    }

    loginPage() {
        const body = document.getElementById('body')
        const container = document.createElement("div");
        container.id = "login-page";
        container.classList.add('page');
    
        body.appendChild(container);
    }
}