beforeEach(() => {
  cy.visit('/show-hide-element');
  cy.contains('h2', 'Show / Hide Element')
    .should('be.visible');
});

it('Should toggle the visibility of the text element on button click', () => {
  cy.contains('#hiddenText', 'This text will be hidden')
    .should('be.visible');
  cy.get('#showHideBtn').click();
  cy.get('#hiddenText').should('not.be.visible');
  cy.get('#showHideBtn').click();
  cy.get('#hiddenText').should('be.visible');
});
