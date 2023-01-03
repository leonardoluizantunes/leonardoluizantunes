import Page from './_page'

class Login{
    elements = {
        usernameField: () => cy.get('[data-test="username"]'),
        passwordField: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]')
    }

    login({username, password}){
        this.elements.usernameField().type(username)
        this.elements.passwordField().type(password)
        this.elements.loginButton().click()
        Page.load('/inventory.html')
    }

}

export default new Login()