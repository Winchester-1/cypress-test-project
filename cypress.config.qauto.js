const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,           
    html: false,        
    json: true
  },
  e2e: {
    baseUrl: 'https://qauto.forstudy.space',
    specPattern: 'cypress/e2e/5-cypress-cli-reporters-environments/**/*.cy.js',
    env: {
      QAUTO_LOGIN: process.env.QAUTO_LOGIN,
      QAUTO_PASSWORD: process.env.QAUTO_PASSWORD,
      login: process.env.QAUTO_USER_LOGIN,
      password: process.env.QAUTO_USER_PASSWORD,
    },
  },
});
