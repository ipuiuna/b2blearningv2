import React from 'react';
import CartlList from '../../components/CartList';
import CartManager from '../../components/CartManager';
import { Container } from '@material-ui/core';
import './style.scss';

export default () => {
  return (
    <CartManager>
      {(loading, products, total, getCart, changeQuantity) => (
        <div>
          <Container>
            {loading ? (
              <div>Loading your cart...</div>
            ) : (
              <React.Fragment>
                <CartlList
                  total={total}
                  getCart={getCart}
                  changeQuantity={changeQuantity}
                />

                {/* <NavLink
                  to={'/checkout'}
                  isActive={match => {
                    return match ? match.isExact : false;
                  }}
                  className='nav-link'
                >
                  <Button disabled={getCart().length === 0}>
                    Proceed to Checkout
                  </Button>
                </NavLink> */}
              </React.Fragment>
            )}
          </Container>
        </div>
      )}
    </CartManager>
  );
};
