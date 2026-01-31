// Override the type command to mask sensitive data
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // Turn off original log
    options.log = false;
    
    // Create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    });
  }
  
  return originalFn(element, text, options);
});

// Custom command for complete login flow
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://qauto.forstudy.space/', {
    auth: {
      username: Cypress.env('QAUTO_LOGIN'),
      password: Cypress.env('QAUTO_PASSWORD'),
    },
  });

  cy.get('button.header_signin').click();
  cy.get('.modal-content').should('be.visible');

  cy.get('#signinEmail').type(email);
  cy.get('#signinPassword').type(password, { sensitive: true });

  cy.get('button.btn-primary:eq(1)').click();
});