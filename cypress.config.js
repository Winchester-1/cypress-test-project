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
      TEST_USER_NAME: process.env.TEST_USER_NAME,
      TEST_USER_LASTNAME: process.env.TEST_USER_LASTNAME,
      TEST_USER_EMAIL_DOMAIN: process.env.TEST_USER_EMAIL_DOMAIN,
      TEST_USER_PASSWORD: process.env.TEST_USER_PASSWORD,
    },
  },
});
