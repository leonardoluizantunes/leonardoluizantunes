class Cart{
    elements = {
        checkoutButton: () => cy.get('[data-test="checkout"]')
    }

    clickToCheckout(){
        this.elements.checkoutButton().click()
    }
}

export default new Cart()