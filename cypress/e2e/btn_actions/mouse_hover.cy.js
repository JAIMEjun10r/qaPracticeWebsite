beforeEach(() => {
  cy.visit('/mouse-hover');
  cy.contains('h2', 'Mouse Hover Example')
    .should('be.visible');
});

it('should display the hidden message on hover', () => {
  // 1. Seleciono o elemento que está OCULTO
  cy.get('.hide')
    // 2. Forço elemento a se tornar visível
    .invoke('show')
    // 3. Agora que ele está visível, valido o texto e a visibilidade
    .should('be.visible')
    .and('contain', 'I am shown when someone hovers over the text above.');
});