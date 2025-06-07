/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/scroll');
  cy.contains('h2', 'Scrolling Demo')
    .should('be.visible');
});

it('Scrolling Demo Starting', () => {
  cy.get('#the-end').scrollIntoView()
  cy.contains('#the-end', 'THE END')
    .should('be.visible');
});