let domain = "daily-4.12-012701.dev.openshiftappsvc.org";
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://console-openshift-console.apps.' + domain + '/environments')
  })
})