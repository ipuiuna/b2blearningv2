import React from 'react';
import CartlList from '../../components/CartList';

export default props => {
  const { loading, total, getCart, changeQuantity } = props;
  return (
    <React.Fragment>
      <CartlList
        total={total}
        getCart={getCart}
        changeQuantity={changeQuantity}
      />
    </React.Fragment>
  );
};
