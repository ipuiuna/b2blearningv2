import React from 'react';
import { Container } from '@material-ui/core';
import CartManager from '../../components/CartManager';
import CheckoutStepper from '../../components/CheckoutSteper';
import useStyle from './styles';
import Loading from '../../components/Loading';

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
          {loading ? (
            <Loading />
          ) : (
            <Container className={classes.checkoutStepper}>
              <CheckoutStepper
                id='checkout-stepper'
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
