

export class Switch {
    constructor() {
        this.Login();
        this.Register();
    }


    Login() {
        const login = document.getElementById('log-button')
        const logPage = document.getElementById('login-container')
        const regPage = document.getElementById('form-container')

        login.addEventListener('click', event => {
            event.preventDefault();
            console.log(event.target.id)
            logPage.style.display = 'flex'
        })

    }

    Register() {
        const register = document.getElementById('reg-button')
        const logPage = document.getElementById('login-container')
        const regPage = document.getElementById('form-container')

        register.addEventListener('click', event => {
            event.preventDefault();
            console.log(event.target.id)
            regPage.style.display = 'flex'
        })

    }
}