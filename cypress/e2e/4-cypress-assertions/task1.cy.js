import RegistrationPage from '../../pages/registrationPage.js';

describe('Registration Page Tests', () => {
  const registrationPage = new RegistrationPage();

  beforeEach(() => {
    registrationPage.openRegistrationPage();
    registrationPage.isRegistrationPageOpened();
  });

  describe('Name Input Validation', () => {
    it('should show error when name field is empty and focus is changed', () => {
      registrationPage.getNameInput().focus().blur();
      registrationPage.checkNameError(registrationPage.errorMessages.nameRequired);
      registrationPage.checkNameInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for name that is too short (1 character)', () => {
      registrationPage.typeName('J');
      registrationPage.getNameInput().blur();
      registrationPage.checkNameError(registrationPage.errorMessages.nameShort);
      registrationPage.checkNameInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for name with invalid characters', () => {
      registrationPage.typeName('John123!');
      registrationPage.getNameInput().blur();
      registrationPage.checkNameError(registrationPage.errorMessages.nameInvalid);
      registrationPage.checkNameInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for name with spaces', () => {
      registrationPage.typeName('John Doe');
      registrationPage.getNameInput().blur();
      registrationPage.checkNameError(registrationPage.errorMessages.nameInvalid);
      registrationPage.checkNameInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should accept valid name (2-20 characters, letters only)', () => {
      registrationPage.typeName('John');
      registrationPage.getNameInput().blur();
      registrationPage.getNameInput().should('have.value', 'John');
      registrationPage.getNameError().should('not.exist');
      registrationPage.isRegisterButtonDisabled();
    });

    it('should accept valid name with maximum length (20 characters)', () => {
      const longName = 'A'.repeat(20);
      registrationPage.typeName(longName);
      registrationPage.getNameInput().blur();
      registrationPage.getNameInput().should('have.value', longName);
      registrationPage.getNameError().should('not.exist');
      registrationPage.isRegisterButtonDisabled();
    });
  });

  describe('Last Name Input Validation', () => {
    it('should show error when last name field is empty and focus is changed', () => {
      registrationPage.getLastNameInput().focus().blur();
      registrationPage.checkLastNameError(registrationPage.errorMessages.lastNameRequired);
      registrationPage.checkLastNameInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for last name that is too short (1 character)', () => {
      registrationPage.typeLastName('D');
      registrationPage.getLastNameInput().blur();
      registrationPage.checkLastNameError(registrationPage.errorMessages.lastNameShort);
      registrationPage.checkLastNameInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for last name with invalid characters', () => {
      registrationPage.typeLastName('Doe123!');
      registrationPage.getLastNameInput().blur();
      registrationPage.checkLastNameError(registrationPage.errorMessages.lastNameInvalid);
      registrationPage.checkLastNameInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for last name with spaces', () => {
      registrationPage.typeLastName('Van Der Berg');
      registrationPage.getLastNameInput().blur();
      registrationPage.checkLastNameError(registrationPage.errorMessages.lastNameInvalid);
      registrationPage.checkLastNameInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should accept valid last name (2-20 characters, letters only)', () => {
      registrationPage.typeLastName('Doe');
      registrationPage.getLastNameInput().blur();
      registrationPage.getLastNameInput().should('have.value', 'Doe');
      registrationPage.getLastNameError().should('not.exist');
      registrationPage.isRegisterButtonDisabled();
    });

    it('should accept valid last name with maximum length (20 characters)', () => {
      const longLastName = 'B'.repeat(20);
      registrationPage.typeLastName(longLastName);
      registrationPage.getLastNameInput().blur();
      registrationPage.getLastNameInput().should('have.value', longLastName);
      registrationPage.getLastNameError().should('not.exist');
      registrationPage.isRegisterButtonDisabled();
    });
  });

  describe('Email Input Validation', () => {
    it('should show error when email field is empty and focus is changed', () => {
      registrationPage.getEmailInput().focus().blur();
      registrationPage.checkEmailError(registrationPage.errorMessages.emailRequired);
      registrationPage.checkEmailInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for email without @ symbol', () => {
      registrationPage.typeEmail('invalid-email.com');
      registrationPage.getEmailInput().blur();
      registrationPage.checkEmailError(registrationPage.errorMessages.emailInvalid);
      registrationPage.checkEmailInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for email without domain', () => {
      registrationPage.typeEmail('test@');
      registrationPage.getEmailInput().blur();
      registrationPage.checkEmailError(registrationPage.errorMessages.emailInvalid);
      registrationPage.checkEmailInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for email without local part', () => {
      registrationPage.typeEmail('@example.com');
      registrationPage.getEmailInput().blur();
      registrationPage.checkEmailError(registrationPage.errorMessages.emailInvalid);
      registrationPage.checkEmailInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for email with spaces', () => {
      registrationPage.typeEmail('test @example.com');
      registrationPage.getEmailInput().blur();
      registrationPage.checkEmailError(registrationPage.errorMessages.emailInvalid);
      registrationPage.checkEmailInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for email without top-level domain', () => {
      registrationPage.typeEmail('test@example');
      registrationPage.getEmailInput().blur();
      registrationPage.checkEmailError(registrationPage.errorMessages.emailInvalid);
      registrationPage.checkEmailInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should accept valid email address', () => {
      registrationPage.typeEmail('john.doe@example.com');
      registrationPage.getEmailInput().blur();
      registrationPage.getEmailInput().should('have.value', 'john.doe@example.com');
      registrationPage.getEmailError().should('not.exist');
      registrationPage.isRegisterButtonDisabled();
    });
  });

  describe('Password Input Validation', () => {
    it('should show error when password field is empty and focus is changed', () => {
      registrationPage.getPasswordInput().focus().blur();
      registrationPage.checkPasswordError(registrationPage.errorMessages.passwordRequired);
      registrationPage.checkPasswordInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for password that is too short (less than 8 characters)', () => {
      registrationPage.typePassword('Pass1');
      registrationPage.getPasswordInput().blur();
      registrationPage.checkPasswordError(registrationPage.errorMessages.passwordInvalid);
      registrationPage.checkPasswordInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for password that is too long (more than 15 characters)', () => {
      registrationPage.typePassword('Password12345678');
      registrationPage.getPasswordInput().blur();
      registrationPage.checkPasswordError(registrationPage.errorMessages.passwordInvalid);
      registrationPage.checkPasswordInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for password without numbers', () => {
      registrationPage.typePassword('Password');
      registrationPage.getPasswordInput().blur();
      registrationPage.checkPasswordError(registrationPage.errorMessages.passwordInvalid);
      registrationPage.checkPasswordInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for password without capital letters', () => {
      registrationPage.typePassword('password123');
      registrationPage.getPasswordInput().blur();
      registrationPage.checkPasswordError(registrationPage.errorMessages.passwordInvalid);
      registrationPage.checkPasswordInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error for password without small letters', () => {
      registrationPage.typePassword('PASSWORD123');
      registrationPage.getPasswordInput().blur();
      registrationPage.checkPasswordError(registrationPage.errorMessages.passwordInvalid);
      registrationPage.checkPasswordInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should accept valid password with minimum length (8 characters)', () => {
      registrationPage.typePassword('Pass1234');
      registrationPage.getPasswordInput().blur();
      registrationPage.getPasswordInput().should('have.value', 'Pass1234');
      registrationPage.getPasswordError().should('not.exist');
      registrationPage.isRegisterButtonDisabled();
    });

    it('should accept valid password with maximum length (15 characters)', () => {
      registrationPage.typePassword('Password123456');
      registrationPage.getPasswordInput().blur();
      registrationPage.getPasswordInput().should('have.value', 'Password123456');
      registrationPage.getPasswordError().should('not.exist');
      registrationPage.isRegisterButtonDisabled();
    });

    it('should accept valid password with all requirements met', () => {
      registrationPage.typePassword('Password123');
      registrationPage.getPasswordInput().blur();
      registrationPage.getPasswordInput().should('have.value', 'Password123');
      registrationPage.getPasswordError().should('not.exist');
      registrationPage.isRegisterButtonDisabled();
    });
  });

  describe('Repeat Password Input Validation', () => {
    it('should show error when repeat password field is empty and focus is changed', () => {
      registrationPage.getRepeatPasswordInput().focus().blur();
      registrationPage.checkRepeatPasswordError(registrationPage.errorMessages.repeatPasswordRequired);
      registrationPage.checkRepeatPasswordInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should show error when passwords do not match', () => {
      registrationPage.typePassword('Password123');
      registrationPage.getPasswordInput().blur();
      registrationPage.typeRepeatPassword('Password456');
      registrationPage.getRepeatPasswordInput().blur();
      registrationPage.checkRepeatPasswordError(registrationPage.errorMessages.passwordsDoNotMatch);
      registrationPage.checkRepeatPasswordInputBorderColorRed();
      registrationPage.isRegisterButtonDisabled();
    });

    it('should accept when passwords match exactly', () => {
      const password = 'Password123';
      registrationPage.typePassword(password);
      registrationPage.getPasswordInput().blur();
      registrationPage.typeRepeatPassword(password);
      registrationPage.getRepeatPasswordInput().blur();
      registrationPage.getRepeatPasswordInput().should('have.value', password);
      registrationPage.getRepeatPasswordError().should('not.exist');
      registrationPage.isRegisterButtonDisabled();
    });
  });

  describe('Complete Form Validation', () => {
    it('should enable register button when all fields are filled with valid data', () => {
      const validFormData = {
        name: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'Password123',
        repeatPassword: 'Password123'
      };

      registrationPage.fillRegistrationForm(validFormData);
      registrationPage.getRepeatPasswordInput().blur();

      registrationPage.getNameError().should('not.exist');
      registrationPage.getLastNameError().should('not.exist');
      registrationPage.getEmailError().should('not.exist');
      registrationPage.getPasswordError().should('not.exist');
      registrationPage.getRepeatPasswordError().should('not.exist');

      registrationPage.isRegisterButtonEnabled();
    });
  });
});
