const { defineConfig } = require("cypress");
import 'dotenv/config';

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      QAUTO_LOGIN: process.env.QAUTO_LOGIN,
      QAUTO_PASSWORD: process.env.QAUTO_PASSWORD,
    },
  },
});
