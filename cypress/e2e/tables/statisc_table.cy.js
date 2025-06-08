const expectedHeaders = ['#', 'First', 'Last', 'Email'];
const expectedData = [
  { first: 'Mark', last: 'Otto', email: 'mo@email.com' },
  { first: 'Jacob', last: 'Thornton', email: 'jacob_t@yahoo.com' },
  { first: 'Larry', last: 'Bow', email: 'lbow@gmail.com' },
  { first: 'Bobby', last: 'Spencer', email: 'bobby_23@gmail.com' },
  { first: 'Mark', last: 'Icarus', email: 'el_icarus@yahoo.com' }
];



beforeEach(() => {
  cy.visit('/web-table');
  cy.contains('h2', 'Table Example')
    .should('be.visible');
});

it('Validates static table structure and content', () => {
  cy.get('#peopleTable').should('be.visible');
  cy.get('#peopleTable thead th').should('have.length', 4);
  cy.get('#peopleTable tbody tr').should('have.length', expectedData.length);

  // Validating header content
  cy.get('#peopleTable thead th').each((th, index) => {
    cy.wrap(th).should('contain.text', expectedHeaders[index]);
  });

  // Verifying table data
  expectedData.forEach((row, index) => {
    cy.get('#peopleTable tbody tr').eq(index).within(() => {
      cy.get('td').eq(0).should('contain.text', row.first);
      cy.get('td').eq(1).should('contain.text', row.last);
      cy.get('td').eq(2).should('contain.text', row.email);
    });
  });
});
