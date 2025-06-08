Cypress.Commands.add('login', (username, password) => {
  cy.get('#loginSection > h2')
    .should('be.visible')
    .and('contain.text', 'Login - Shop')
  cy.get('#email')
    .type(username, {log: false})
  cy.get('#password')
    .type(password, {log: false})
  cy.contains('button', 'Submit')
    .click()
})



Cypress.Commands.add('selectRandomCountry', () => {
  // 1. Get the select element by its ID
  cy.get('#countries_dropdown_menu')
    .find('option') // Find all the options inside the select
    .then(($options) => {
      // Convert the jQuery collection of elements into a JavaScript array
      const options = $options.toArray();

      // 2. Remove the first element (usually a placeholder like "Select a country...")
      const realCountries = options.slice(1); // Skips the first element

      // 3. Check if there are any actual countries to select from
      if (realCountries.length === 0) {
        throw new Error('No actual countries found to select from.');
      }

      // 4. Pick a random index
      const randomIndex = Math.floor(Math.random() * realCountries.length);
      const randomCountryOption = realCountries[randomIndex];

      // 5. Get the 'value' of the chosen option using .prop('value')
      const countryValue = Cypress.$(randomCountryOption).prop('value');

      // 6. Select the option in the dropdown
      cy.get('#countries_dropdown_menu').select(countryValue);
    });
});


Cypress.Commands.add('fillRandomEmail', (prefix = 'testuser', seletor) => {
  // Lista de domínios comuns e algumas variações
  const domains = [
    '@example.com',
    '@test.org',
    '@mail.net',
    '@domain.info',
    '@service.io',
    '@company.biz',
    '@sample.co.uk',
    '@eu.com',
    '@bla.gov',
    '@qualquercoisa.pt',
    '@random.xyz',
    '@tempmail.site',
    '@myemail.app',
    '@virtual.space'
  ];

  // Gerar uma string aleatória para o nome de usuário do e-mail
  const timestamp = Date.now(); // Milissegundos desde 1970
  const randomString = Math.random().toString(36).substring(2, 8); // string aleatória alfanumérica

  const username = `${prefix}_${timestamp}_${randomString}`;

  // Escolhe um domínio aleatoriamente da lista
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];

  const email = `${username}${randomDomain}`;
  cy.get(seletor).clear().type(email, {delay:0, log: false});
  return cy.wrap(email);
});