import Page from './_page'

class Inventory{
    elements = {
        addToCartButton: () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'),
        removeButton: () => cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]'),
        productSortContainer: () => cy.get('[data-test="product_sort_container"]'),
        activeOption: () => cy.get('.active_option'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        shoppingCartButton: () => cy.get('.shopping_cart_link'),
        shoppingCartBadge: () => cy.get('#shopping_cart_container')
    }

    selectProductSortContainerOption({aToZ, zToA}, {previousSelection, newSelection}){
        this.elements.activeOption().should('have.text', previousSelection)
        this.elements.productSortContainer().select(zToA)
        this.elements.activeOption().should('have.text', newSelection)
    }

    addToCartButton(){
        this.elements.addToCartButton().click()
        this.elements.removeButton().should('be.visible')
        this.elements.shoppingCartBadge().should('be.visible')
    }

    openShoppingCartButton(){
        this.elements.shoppingCartButton().click()
        Page.load('/cart.html')
    }
}

export default new Inventory()