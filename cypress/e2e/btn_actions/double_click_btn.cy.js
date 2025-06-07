beforeEach(() => {
  cy.visit('/double-click');
  
});

it('Double click on button Example', () => {
  cy.contains('h2', 'Double Click on Button Example')
    .should('be.visible');
  cy.get('#double-click-btn').dblclick()
  cy.contains('#double-click-result', 'Congrats, you double clicked!')
    .should('be.visible');
});