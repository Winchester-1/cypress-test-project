describe('find all elements on the page', () => {
  const signUpButton = 'button.btn-primary';
  const socialLinks = 'a.socials_link';
  const contactLink = 'a.contacts_link';

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: Cypress.env('QAUTO_LOGIN'),
        password: Cypress.env('QAUTO_PASSWORD'),
      },
    });
  })

  it('find header button', () => {
    cy.get(signUpButton)
      .should('be.visible')
  });

  it('find social media links', () => {
    cy.get(socialLinks).each(($el) => {
      cy.wrap($el)
        .should('be.visible')
    });
  });

  it('find primary link', () => {
    cy.get(contactLink)
      .eq(0)
      .should('be.visible')
  });

  it('find e-mail link', () => {
    cy.get(contactLink)
      .eq(1)
      .should('be.visible')
  });
});