class RegistrationPage {
  // URL
  URL = 'https://qauto.forstudy.space/';

  // Page selectors
  selectors = {
    signUpButton: 'button.btn-primary:eq(0)',
    registerButton: 'button.btn-primary:eq(1)',

    regModal: '.modal-content',

    nameInput: '#signupName',
    lastNameInput: '#signupLastName',
    emailInput: '#signupEmail',
    passwordInput: '#signupPassword',
    repeatPasswordInput: '#signupRepeatPassword',
    
    nameError: '#signupName + .invalid-feedback > p',
    lastNameError: '#signupLastName + .invalid-feedback > p',
    emailError: '#signupEmail + .invalid-feedback > p',
    passwordError: '#signupPassword + .invalid-feedback > p',
    repeatPasswordError: '#signupRepeatPassword + .invalid-feedback > p',
  };

  // Expected error messages
  errorMessages = {
    nameRequired: 'Name required',
    nameInvalid: 'Name is invalid',
    nameShort: 'Name has to be from 2 to 20 characters long',

    lastNameRequired: 'Last name required',
    lastNameInvalid: 'Last name is invalid',
    lastNameShort: 'Last name has to be from 2 to 20 characters long',

    emailRequired: 'Email required',
    emailInvalid: 'Email is incorrect',

    passwordRequired: 'Password required',
    passwordInvalid: 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',

    repeatPasswordRequired: 'Re-enter password required',
    passwordsDoNotMatch: 'Passwords do not match',
  };

  // Actions
  visitMainPage() {
    cy.visit(this.URL, {
        auth: {
          username: Cypress.env('QAUTO_LOGIN'),
          password: Cypress.env('QAUTO_PASSWORD'),
        },
      });  
  }

    clickSignUpButton() {
    cy.get(this.selectors.signUpButton).click();
  }

  openRegistrationPage() {
    this.visitMainPage();
    this.clickSignUpButton();
  }

  isRegistrationPageOpened() {
    this.getRegModal().should('be.visible');
  }

  clickCloseButton() {
    cy.get(this.selectors.closeButton).click();
  }

  clickRegisterButton() {
    cy.get(this.selectors.registerButton).click();
  }
  
  typeName(name) {
    this.getNameInput().type(name);
  }
  
  typeLastName(lastName) {
    this.getLastNameInput().type(lastName);
  }
  
  typeEmail(email) {
    this.getEmailInput().type(email);
  }

  typePassword(password) {
    this.getPasswordInput().type(password, { sensitive: true });
  }

  typeRepeatPassword(repeatPassword) {
    this.getRepeatPasswordInput().type(repeatPassword, { sensitive: true });
  }

  fillRegistrationForm(formData) {
    if (formData.name) {
      this.typeName(formData.name);
    }
    if (formData.lastName) {
      this.typeLastName(formData.lastName);
    }
    if (formData.email) {
      this.typeEmail(formData.email);
    }
    if (formData.password) {
      this.typePassword(formData.password);
    }
    if (formData.repeatPassword) {
      this.typeRepeatPassword(formData.repeatPassword);
    }
  }

  // Element getters
  getRegModal() {
    return cy.get(this.selectors.regModal);
  }

  getSignUpButton() {
    return cy.get(this.selectors.signUpButton);
  }

  getNameInput() {
    return cy.get(this.selectors.nameInput);
  }

  getLastNameInput() {
    return cy.get(this.selectors.lastNameInput);
  }

  getEmailInput() {
    return cy.get(this.selectors.emailInput);
  }

  getPasswordInput() {
    return cy.get(this.selectors.passwordInput);
  }

  getRepeatPasswordInput() {
    return cy.get(this.selectors.repeatPasswordInput);
  }

  getRegisterButton() {
    return cy.get(this.selectors.registerButton);
  }

  isRegisterButtonDisabled() {
    this.getRegisterButton().should('be.disabled');
  }

  isRegisterButtonEnabled() {
    this.getRegisterButton().should('not.be.disabled');
  }

  getNameError() {
    return cy.get(this.selectors.nameError);
  }

  getLastNameError() {
    return cy.get(this.selectors.lastNameError);
  }

  getEmailError() {
    return cy.get(this.selectors.emailError);
  }

  getPasswordError() {
    return cy.get(this.selectors.passwordError);
  }

  getRepeatPasswordError() {
    return cy.get(this.selectors.repeatPasswordError);
  }

  // Error message checks
  checkNameError(expectedMessage) {
    this.getNameError()
      .should('be.visible')
      .and('contain', expectedMessage);
  }

  checkLastNameError(expectedMessage) {
    this.getLastNameError()
      .should('be.visible')
      .and('contain', expectedMessage);
  }

  checkEmailError(expectedMessage) {
    this.getEmailError()
      .should('be.visible')
      .and('contain', expectedMessage);
  }

  checkPasswordError(expectedMessage) {
    this.getPasswordError()
      .should('be.visible')
      .and('contain', expectedMessage);
  }

  checkRepeatPasswordError(expectedMessage) {
    this.getRepeatPasswordError()
      .should('be.visible')
      .and('contain', expectedMessage);
  }

  // Border color checks
  checkInputBorderColorRed(inputElement) {
    inputElement.should('have.css', 'border-color', 'rgb(220, 53, 69)');
  }

  checkNameInputBorderColorRed() {
    this.checkInputBorderColorRed(this.getNameInput());
  }

  checkLastNameInputBorderColorRed() {
    this.checkInputBorderColorRed(this.getLastNameInput());
  }

  checkEmailInputBorderColorRed() {
    this.checkInputBorderColorRed(this.getEmailInput());
  }

  checkPasswordInputBorderColorRed() {
    this.checkInputBorderColorRed(this.getPasswordInput());
  }

  checkRepeatPasswordInputBorderColorRed() {
    this.checkInputBorderColorRed(this.getRepeatPasswordInput());
  }
}

export default RegistrationPage;