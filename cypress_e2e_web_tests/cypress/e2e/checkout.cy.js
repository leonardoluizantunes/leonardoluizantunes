import Login from '../support/pages/login.pages'
import Inventory from '../support/pages/inventory.pages'
import Cart from '../support/pages/cart.pages'
import Checkout from '../support/pages/checkout.pages'
import data from '../fixtures/_data'

describe('@checkout should checkout', () => {
    before('Login Hook', () => {
        cy.visit('')
        Login.login(data.login.standardUser)
    })
    it('@checkout_successful should checkout with success', () => {
        Inventory.selectProductSortContainerOption(data.inventory.productSortContainer.index, data.inventory.productSortContainer.activeOption)
        Inventory.addToCartButton()
        Inventory.openShoppingCartButton()
        Cart.clickToCheckout()
        Checkout.typeInformationForm(data.checkout.userInformation)
        Checkout.clickToFinish()
    })
  })