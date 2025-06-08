const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // Adiciona o repórter
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de Testes - Meu Projeto',
    embeddedScreenshots: true,
    inlineAssets: true, // Para ter um arquivo HTML único
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "https://qa-practice.netlify.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
