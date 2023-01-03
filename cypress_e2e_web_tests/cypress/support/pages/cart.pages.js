import Page from './_page'

class Cart{
    elements = {
        checkoutButton: () => cy.get('[data-test="checkout"]')
    }

    clickToCheckout(){
        this.elements.checkoutButton().click()
        Page.load('/checkout-step-one.html')
    }
}

export default new Cart()