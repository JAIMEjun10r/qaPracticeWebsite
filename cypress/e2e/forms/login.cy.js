/// <reference types="cypress" />

const emailAdmin = Cypress.env('emailAdmin')
const senhaAdmin = Cypress.env('passwordAdmin')

it('Login test', () => {
  cy.visit('/auth_ecommerce')
  cy.login(emailAdmin, senhaAdmin)
  cy.contains('.section-header', 'SHOPPING CART')
    .should('be.visible')
})