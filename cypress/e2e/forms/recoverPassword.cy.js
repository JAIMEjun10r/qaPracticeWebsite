/// <reference types="cypress" />
beforeEach(() => {
  cy.visit('/recover-password')
    
});

it('Should display the title and menu itens', () => {
  cy.contains('h2', 'Recover Password')
    .should('be.visible');
  cy.get('#navbarSupportedContent').within(() => {
    cy.contains('a', 'Home').should('be.visible');
    cy.contains('a','Contact').should('be.visible');
  })
});

it('Recover password', () => {
  cy.fillRandomEmail('testuser', '#email').then((generatedEmail) => {
    cy.contains('button', 'Recover Password').click();
    cy.get('#message')
      .should('be.visible')
      .and('contain', 'An email with the new password has been sent to')
      .and('contain', generatedEmail) 
      .and('contain', 'Please verify your inbox!');
  });
});