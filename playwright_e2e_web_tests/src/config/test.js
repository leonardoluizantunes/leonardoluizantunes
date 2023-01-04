/* eslint-disable no-unused-vars */
const base = require('@playwright/test')

// Extend base test by providing the test data parameterized with the environment.
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
exports.test = base.test.extend({
  data: async ({ page }, use) => {
    // Set up the fixture.
    const data = require(`./data`)

    // Use the fixture value in the test.
    await use(data)
  }
})
