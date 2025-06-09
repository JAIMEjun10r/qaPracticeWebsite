describe('Dynamic Table Validation', () => {
  const expectedHeaders = [
    'Avatar',
    'First Name',
    'Last Name',
    'Age',
    'Email',
    'City',
    'Country'
  ];

  beforeEach(() => {
    cy.visit('/dynamic-table');
  });

  it('Should validate table headers and structure', () => {
    // Validate headers
    cy.get('#data-table thead th').should('have.length', expectedHeaders.length);
    cy.get('#data-table thead th').each((th, index) => {
      cy.wrap(th).should('contain.text', expectedHeaders[index]);
    });

    // Validate number of columns in each row
    cy.get('#data-tbody tr').each((row) => {
      cy.wrap(row).find('td').should('have.length', expectedHeaders.length);
    });
  });

  it('Should validate content types in dynamic table rows', () => {
    cy.get('#data-tbody tr').each((row) => {
      cy.wrap(row).within(() => {
        // Validate avatar image
        cy.get('td').eq(0).find('img').should('have.attr', 'src');

        // Validate age is a positive number
        cy.get('td').eq(3).invoke('text').then((text) => {
          const age = parseInt(text.trim(), 10);
          expect(age).to.be.a('number');
          expect(age).to.be.greaterThan(0);
        });

        // Validate email contains @
        cy.get('td').eq(4).invoke('text').should('include', '@');
      });
    });
  });
});
