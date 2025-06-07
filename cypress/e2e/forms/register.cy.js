/// <reference types="cypress" />

import { generateRandomFirstName, generateRandomLastName } from '../../support/utils/randomData.js';
const firstName = generateRandomFirstName();
const lastName = generateRandomLastName();

it('Register form', () => {
  cy.visit('/register')
  cy.contains('h2', 'Register Form')
    .should('be.visible')
  cy.get('#firstName').type(firstName)
  cy.get('#lastName').type(lastName)
  cy.get('#phone').type('1234567890', { log: false });
  cy.selectRandomCountry()
  cy.fillRandomEmail('test', '#emailAddress');
  cy.get('#password').type('SecurePassword123', { log: false, delay: 0 })
  cy.get('#exampleCheck1').check()
  cy.contains('button', 'Register')
    .click()
  cy.contains('#message', 'The account has been successfully created!')
    .should('be.visible')
});
