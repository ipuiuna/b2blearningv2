import React from 'react';
import CartlList from '../../components/CartList';
import CartManager from '../../components/CartManager';

export default props => {
  const { loading, total, getCart, changeQuantity } = props;
  return (
    <div>
      {loading ? (
        <div>Buscando informações...</div>
      ) : (
        <React.Fragment>
          <CartlList
            total={total}
            getCart={getCart}
            changeQuantity={changeQuantity}
          />
        </React.Fragment>
      )}
    </div>
  );
};
