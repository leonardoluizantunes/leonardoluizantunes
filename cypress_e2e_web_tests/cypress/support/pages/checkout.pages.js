class Checkout{
    elements = {
        firstNameField: () => cy.get('[data-test="firstName"]'),
        lastNameField: () => cy.get('[data-test="lastName"]'),
        postalCodeField: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
        finishButton: () => cy.get('[data-test="finish"]')
    }

    typeInformationForm({firstName, lastName, postalCode}){
        this.elements.firstNameField().type(firstName)
        this.elements.lastNameField().type(lastName)
        this.elements.postalCodeField().type(postalCode)
        this.elements.continueButton().click()
    }

    clickToFinish(){
        this.elements.finishButton().click()
    }
}

export default new Checkout()