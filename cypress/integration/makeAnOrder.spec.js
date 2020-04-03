const email = 'marcos.morais@ab-inbev.com';
const checkoutUrl = 'http://b2blearningv2.herokuapp.com/checkout';
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
  const productAt = Math.floor(Math.random() * 16);
  const productToBeTested = products[productAt];
  const randomTimes = Math.floor(Math.random() * 10) + 1;
  const anotherProduct =
    products[productAt === 0 ? 1 : productAt === 16 ? -1 : productAt + 1];

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

  it(`Add product id=${productToBeTested} x${randomTimes} to the cart`, () => {
    for (let i = 0; i < randomTimes; i++) {
      cy.get(`#button-incItem-${productToBeTested}`).click();
    }
  });

  it(`Product id=${productToBeTested} must have qtdy field value = ${randomTimes}`, () => {
    cy.get(`#field-quantity-${productToBeTested}`).should('be', randomTimes);
  });

  it(`Add another product`, () => {
    cy.get(`#button-incItem-${anotherProduct}`).click();
  });

  it(`Open cart`, () => {
    cy.get('#icon-shopping-cart').click();
  });

  it(`Going to checkout`, () => {
    cy.get('#label-checkout-02').click();
    cy.location().should(location => {
      expect(location.href).to.eq(checkoutUrl);
    });
  });

  it("The qtdy's needs to persist", () => {
    cy.get(`#table-cell-qtdy-${productToBeTested}`).should('be', randomTimes);
    cy.get(`#table-cell-qtdy-${anotherProduct}`).should('be', 1);
  });

  it(`Should go to next step`, () => {
    cy.get('#label-order-enabled').click();
  });

  it(`Should have fields to enter data for the delivery`, () => {
    cy.get('#name').type('Cliente');
    cy.get('#address').type('Rua Mococa');
    cy.get('#number').type('32');
    cy.get('#city').type('Ipuiuna');
    cy.get('#label-order-enabled').click();
  });

  it(`Should select a payment method`, () => {
    cy.get('#radio-0').click();
    cy.get('#label-order-enabled').click();
  });

  it(`Should have successful completed the order`, () => {
    cy.get('#label-sucess').should('be.visible');
  });
});
