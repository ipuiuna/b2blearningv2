import React from 'react';
import CartlList from '../../components/CartList';
import NavBarTop from '../../components/NavBarTop';
import Footer from '../../components/Footer';
import CartManager from '../../components/CartManager';
import { Container } from 'react-bootstrap';

export default () => {
  return (
    <CartManager>
      {(loading, products, total, getCart, changeQuantity, editable) => (
        <div>
          <NavBarTop totals={total} />
          <Container>
            {loading ? (
              <div>Loading your cart...</div>
            ) : (
              <React.Fragment>
                <CartlList
                  total={total}
                  getCart={getCart}
                  changeQuantity={changeQuantity}
                  editable={editable}
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
