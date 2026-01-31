import RegistrationPage from '../../pages/registrationPage.js';

describe('Login Test', () => {
  const registrationPage = new RegistrationPage();

  describe('Account Creation and Login Flow', () => {
    it('should create account and login with the same account', () => {
      registrationPage.openRegistrationPage();
      registrationPage.isRegistrationPageOpened();

      const randomIndex = Date.now().toString().slice(-6);
      const accountData = {
        name: Cypress.env('TEST_USER_NAME'),
        lastName: Cypress.env('TEST_USER_LASTNAME'),
        email: `testuser${randomIndex}@${Cypress.env('TEST_USER_EMAIL_DOMAIN')}`,
        password: Cypress.env('TEST_USER_PASSWORD'),
        repeatPassword: Cypress.env('TEST_USER_PASSWORD')
      };

      registrationPage.fillRegistrationForm(accountData);
      registrationPage.clickRegisterButton();

      cy.login(accountData.email, accountData.password);
    });
  });
});