const { LoginPage } = require('../../../src/pages/login')
const { InventoryPage } = require('../../../src/pages/inventory')

async function loginHook(page, data) {
  const loginPage = new LoginPage(page)
  await loginPage.goto()
  await loginPage.validateFormVisible()
  await loginPage.login(data.login.standard)

  const inventoryPage = new InventoryPage(page)
  await inventoryPage.load()
}

module.exports = { loginHook }