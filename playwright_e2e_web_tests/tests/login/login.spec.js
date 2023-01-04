const { test } = require('../../src/config/test')

const { LoginPage } = require('../../src/pages/login')
const { InventoryPage } = require('../../src/pages/inventory')

test.describe.configure({ mode: 'parallel' })

test.describe('@smoke @authentication Login tests', () => {
  test('@login should be able to login', async ({page, data}) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.validateFormVisible()
    await loginPage.login(data.login.standard)

    const inventoryPage = new InventoryPage(page)
    await inventoryPage.load()

  })  
});
