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
        selectPaymentMethod,
        managerState
      ) => (
        <div>
          <NavBarTop
            total={total}
            getCart={getCart}
            loading={loading}
            changeQuantity={changeQuantity}
          />
          <Container className={classes.checkoutStepper}>
            <CheckoutStepper
              total={total}
              getCart={getCart}
              payments={payments}
              changeQuantity={changeQuantity}
              selectPaymentMethod={selectPaymentMethod}
              managerState={managerState}
            />
          </Container>
        </div>
      )}
    </CartManager>
  );
};
