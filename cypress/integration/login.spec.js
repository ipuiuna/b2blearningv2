const email = 'marcos.morais@ab-inbev.com';
const password = 'tanamao';
const appHomeUrl = 'http://b2blearningv2.herokuapp.com/';
const appLoginUrl = 'http://b2blearningv2.herokuapp.com/login';

describe('Login', function() {
  it('Visits the TaNaMao site expect the url to be /login', () => {
    cy.visit('http://b2blearningv2.herokuapp.com/');
    cy.location().should(location => {
      expect(location.href).to.eq(appLoginUrl);
    });
  });

  it('After make login redirects to / page', () => {
    cy.get('#button-entrar-navbar').click();
    cy.get('#input-home-01').type(email);
    cy.get('#input-home-02').type(password);
    cy.get('#button-entrar-drawer').click();
    cy.location().should(location => {
      expect(location.href).to.eq(appHomeUrl);
    });
  });
});
