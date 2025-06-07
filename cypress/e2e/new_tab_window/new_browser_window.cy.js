beforeEach(() => {
  cy.visit('/window');
});

it('Should trigger a window.open call when clicking the new window button', () => {

  cy.window().then((win) => {
    cy.stub(win, 'open').as('windowOpen');
  });

  cy.get('#newWindowBtn').click();
  cy.get('@windowOpen').should(
    'be.calledWith',
    'web-table.html',         
    'LearnWithRV',            
    'width=600,height=600'    
  );
});