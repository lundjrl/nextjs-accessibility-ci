describe('Page accessibility tests', () => {
  it('Home page should have no accessibility issues', () => {
    cy.visit('http://localhost:3000')
    cy.injectAxe()
    cy.checkA11y()
  })
})
