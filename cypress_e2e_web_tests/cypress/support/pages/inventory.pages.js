class Inventory{
    elements = {
        addToCartButton: () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'),
        productSortContainer: () => cy.get('[data-test="product_sort_container"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        shoppingCartButton: () => cy.get('.shopping_cart_link')
    }

    selectProductSortContainerOption({zToA}){
        this.elements.productSortContainer().select(zToA)
    }

    addToCartButton(){
        this.elements.addToCartButton().click()
    }

    openShoppingCartButton(){
        this.elements.shoppingCartButton().click()
    }
}

export default new Inventory()