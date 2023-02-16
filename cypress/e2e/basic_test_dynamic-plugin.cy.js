describe('template spec', () => {
  it('Visits the Environments page to check Dynamic Plugin', () => {
    cy.visit(Cypress.env('OCP_CONSOLE') + '/environments')
  })
})