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
Cypress.Commands.add('login', () => {
  cy.visit('https://qauto.forstudy.space/', {
    auth: {
      username: Cypress.env('QAUTO_LOGIN'),
      password: Cypress.env('QAUTO_PASSWORD'),
    },
  });

  cy.get('button.header_signin').click();
  cy.get('.modal-content').should('be.visible');

  cy.get('#signinEmail').type(Cypress.env('login'));
  cy.get('#signinPassword').type(Cypress.env('password'), { sensitive: true });

  cy.get('button.btn-primary:eq(1)').click();
  cy.get('app-garage').should('be.visible')

});

// Custom command for complete environment login flow
Cypress.Commands.add('loginEnv', () => {
  cy.visit('/', {
    auth: {
      username: Cypress.env('QAUTO_LOGIN'),
      password: Cypress.env('QAUTO_PASSWORD'),
    },
  });

  cy.get('button.header_signin').click();
  cy.get('.modal-content').should('be.visible');

  cy.get('#signinEmail').type(Cypress.env('login'));
  cy.get('#signinPassword').type(Cypress.env('password'), { sensitive: true });

  cy.get('button.btn-primary:eq(1)').click();
  cy.get('app-garage').should('be.visible')
});

Cypress.Commands.add('createExpense', (expenseBody) => {
  return cy.request({
    method: 'POST',
    url: '/api/expenses',
    body: expenseBody
  });
});
