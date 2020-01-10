import React from 'react';
import CartlList from '../../components/CartList';
import NavBarTop from '../../components/NavBarTop';
import Footer from '../../components/Footer';
import CartManager from '../../components/CartManager';
import { Container } from 'react-bootstrap';

export default () => {
  return (
    <CartManager>
      {(loading, products, total, getCart, changeQuantity) => (
        <div>
          <NavBarTop totals={total} />
          <Container>
            {loading ? (
              <div>Carregando...</div>
            ) : (
              <React.Fragment>
                <CartlList
                  total={total}
                  getCart={getCart}
                  changeQuantity={changeQuantity}
                />
              </React.Fragment>
            )}
          </Container>
          <Footer />
        </div>
      )}
    </CartManager>
  );
};
