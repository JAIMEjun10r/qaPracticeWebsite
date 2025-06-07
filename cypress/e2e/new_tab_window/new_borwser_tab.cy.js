beforeEach(() => {
  cy.visit('/tab');
});

it('Switching to a new browser tab', () => {
  cy.contains('h2', 'Switch to a new Browser Tab')
    .should('be.visible');
  cy.get('#newTabBtn a')
    .invoke('removeAttr', 'target')
    .click();
  cy.url().should('include', '/web-table')
  cy.contains('h2', 'Table Example')
    .should('be.visible');
});