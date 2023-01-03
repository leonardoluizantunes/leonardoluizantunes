import Login from '../support/pages/login.pages'
import data from '../fixtures/_data'

describe('@login should login', () => {
  it('@login_with_standardUser_successful should login successful with standard user', () => {
    cy.visit('')
    cy.log(data.login.standardUser)
    Login.login(data.login.standardUser)
  })
})