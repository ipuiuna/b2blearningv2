import React from 'react';
import NavBarTop from '../../components/NavBarTop';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer/index';
import CartManager from '../../components/CartManager';
import { Container } from 'react-bootstrap';
import './style.css';

export default () => {
  return (
    <CartManager>
      {(loading, products, total, getCart, changeQuantity) => (
        <div>
          <NavBarTop totals={total} />
          <Container>
            {loading ? (
              <div>Loading product list...</div>
            ) : (
              <React.Fragment>
                <ProductList
                  products={products}
                  changeQuantity={changeQuantity}
                  getCart={getCart}
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
