import React from 'react';
import CartlList from '../../components/CartList';

export default props => {
  const { loading, total, getCart, changeQuantity } = props;
  return (
    <div>
      {loading ? (
        <div>Buscando informações...</div>
      ) : (
        <React.Fragment>
          <CartlList
            id='cart-list'
            total={total}
            getCart={getCart}
            changeQuantity={changeQuantity}
          />
        </React.Fragment>
      )}
    </div>
  );
};
