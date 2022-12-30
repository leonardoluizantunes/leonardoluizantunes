import Login from '../support/pages/login.pages'
import data from '../fixtures/data'

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('')
    cy.log(data.login.standardUser)
    Login.login(data.login.standardUser)
  })
})