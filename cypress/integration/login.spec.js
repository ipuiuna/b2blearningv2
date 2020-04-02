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

// /// <reference types="cypress" />

// context('Login', () => {
//   beforeEach(() => {
//     cy.visit('https://www.b2blearning.herokuapp.com');
//   cy.get('.navbar-nav').contains('Commands').click()
//   cy.get('.dropdown-menu').contains('Navigation').click()

//   it("cy.go() - go back or forward in the browser's history", () => {
//     // https://on.cypress.io/go

//     cy.location('pathname').should('include', 'navigation');

//     cy.go('back');
//     cy.location('pathname').should('not.include', 'navigation');

//     cy.go('forward');
//     cy.location('pathname').should('include', 'navigation');

//     // clicking back
//     cy.go(-1);
//     cy.location('pathname').should('not.include', 'navigation');

//     // clicking forward
//     cy.go(1);
//     cy.location('pathname').should('include', 'navigation');
//   });

// it('cy.reload() - reload the page', () => {
//   // https://on.cypress.io/reload
//   cy.reload()

//   // reload the page without using the cache
//   cy.reload(true)
// })

// it('cy.visit() - visit a remote url', () => {
//   // https://on.cypress.io/visit

//   // Visit any sub-domain of your current domain

//   // Pass options to the visit
//   cy.visit('https://example.cypress.io/commands/navigation', {
//     timeout: 50000, // increase total time for the visit to resolve
//     onBeforeLoad (contentWindow) {
//       // contentWindow is the remote page's window object
//       expect(typeof contentWindow === 'object').to.be.true
//     },
//     onLoad (contentWindow) {
//       // contentWindow is the remote page's window object
//       expect(typeof contentWindow === 'object').to.be.true
//     },
//   })
//   })
