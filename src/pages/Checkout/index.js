import React from 'react';
import { Container } from '@material-ui/core';
import CartManager from '../../components/CartManager';
import NavBarTop from '../../components/NavBarTop';
import CheckoutStepper from '../../components/CheckoutSteper';
import useStyle from './styles';

export default () => {
  const classes = useStyle();
  return (
    <CartManager>
      {(
        loading,
        products,
        total,
        getCart,
        changeQuantity,
        payments,
        selectPaymentMethod
      ) => (
        <div>
          <NavBarTop
            total={total}
            getCart={getCart}
            changeQuantity={changeQuantity}
          />

          {loading ? (
            <div>Loading your products...</div>
          ) : (
            <Container className={classes.checkoutStepper}>
              {console.log('payments no checkout page')}
              <CheckoutStepper
                total={total}
                getCart={getCart}
                payments={payments}
                changeQuantity={changeQuantity}
                selectPaymentMethod={selectPaymentMethod}
              />
            </Container>
          )}
        </div>
      )}
    </CartManager>
  );
};
