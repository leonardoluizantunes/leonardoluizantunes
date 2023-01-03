class Page {

    load(path){
        cy.url().should('include', `${path}`)
    }
    
}

export default new Page()