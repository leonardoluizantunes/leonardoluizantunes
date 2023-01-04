const { Page } = require('./_page')

class LoginPage extends Page {
  constructor(page) {
    super(page, '/')

    this.formLogin = this.locator('.login-box form')
    this.inputEmail = this.locator('[data-test="username"]')
    this.inputPassword = this.locator('[data-test="password"]')
    this.buttonLogin = this.locator('[data-test="login-button"]')
  }

  async login({ username, password }) {
    await this.inputEmail.type(username)
    await this.inputPassword.type(password)
    await this.buttonLogin.click()
  }

  async validateFormVisible() {
    await expect(this.formLogin).toBeVisible()
  }
}

module.exports = { LoginPage }