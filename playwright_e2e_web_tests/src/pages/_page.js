class Page {
    constructor(page, path, baseUrl = CONFIG_ENV.baseUrl) {
      this.page = page
      this.path = path
      this.baseUrl = baseUrl
  
      this.url = `${this.baseUrl}${this.path}`
    }
  
    async goto() {
      await this.page.goto(this.path)
    }
  
    async load() {
      const currentUrl = this.page.url().split('?')[0]
  
      if (currentUrl !== this.url)
        await this.page.waitForNavigation({
          url: new RegExp(`${this.url}.*`)
        })
    }
  
    locator(locator) {
      return this.page.locator(locator)
    }
  }
  
  module.exports = { Page }
  