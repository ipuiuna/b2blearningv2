const email = 'marcos.morais@ab-inbev.com';
const password = 'tanamao';
const appHomeUrl = 'http://b2blearningv2.herokuapp.com/';
const appLoginUrl = 'http://b2blearningv2.herokuapp.com/login';
const products = [
  '5e46b8a748d0ac001795940f',
  '5e46bb3948d0ac0017959420',
  '5db70cd3355bf3001705be66',
  '5db70de1355bf3001705be68',
  '5db70a99355bf3001705be63',
  '5e46bae748d0ac001795941f',
  '5e46ba9448d0ac001795941e',
  '5db70d66355bf3001705be67',
  '5db70e2a355bf3001705be69',
  '5e46b81648d0ac001795940c',
  '5e46b91548d0ac0017959411',
  '5db70bc6355bf3001705be64',
  '5e46b8d348d0ac0017959410',
  '5e46b84248d0ac001795940d',
  '5e46b86948d0ac001795940e',
  '5db70c3f355bf3001705be65',
  '5e46b7ea48d0ac001795940b'
];

describe('Adding products to cart', function() {
  const productToBeTested = products[Math.floor(Math.random() * 16)];
  const random = Math.floor(Math.random() * 10) + 1;

  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });

  afterEach(() => {
    cy.saveLocalStorageCache();
  });

  it('Increase qtdy of one product and check if it be on the cart', () => {
    cy.visit(appHomeUrl);
  });

  it('Making login', () => {
    cy.get('#button-entrar-navbar').click();
    cy.get('#input-home-01').type(email);
    cy.get('#input-home-02').type(password);
    cy.get('#button-entrar-drawer').click();
    cy.location().should(location => {
      expect(location.href).to.eq(appHomeUrl);
    });
  });

  it(`Add product id=${productToBeTested} x${random} to the cart`, () => {
    for (let i = 0; i < random; i++) {
      cy.get(`#button-incItem-${productToBeTested}`).click();
    }
  });

  it(`Product id=${productToBeTested} must have qtdy field value = ${random}`, () => {
    cy.get(`#field-quantity-${productToBeTested}`).should('be', random);
  });

  it(`Reduce the qtdy of product id=${productToBeTested} to 0`, () => {
    for (let i = 0; i < random; i++) {
      cy.get(`#button-decItem-${productToBeTested}`).click();
    }
    cy.get(`#field-quantity-${productToBeTested}`).should('be', 0);
  });
});
