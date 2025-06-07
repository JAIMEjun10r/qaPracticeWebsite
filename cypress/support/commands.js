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
  // 1. Obter o elemento select pelo ID
  cy.get('#countries_dropdown_menu')
    .find('option') // Encontra todas as opções dentro do select
    .then(($options) => {
      // Converte a coleção de elementos jQuery em um array JavaScript
      const options = $options.toArray();

      // 2. Remove o primeiro elemento (geralmente "Select a country...")
      const realCountries = options.slice(1); // Ignora o primeiro elemento

      // 3. Verifica se há países para selecionar
      if (realCountries.length === 0) {
        throw new Error('No actual countries found to select from.');
      }

      // 4. Escolhe um índice aleatório
      const randomIndex = Math.floor(Math.random() * realCountries.length);
      const randomCountryOption = realCountries[randomIndex];

      // 5. Obtém o 'value' do option escolhido usando .prop('value')
      const countryValue = Cypress.$(randomCountryOption).prop('value');

      // 6. Seleciona a opção no dropdown
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