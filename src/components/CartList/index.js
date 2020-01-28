import React from 'react';
import CartItem from '../CartItem';
import PropTypes from 'prop-types';
import './style.scss';

const CartList = props => {
  const { total, getCart, changeQuantity, editable } = props;
  const items = getCart();
  return (
    <div className='product-list'>
      {items.length === 0 ? (
        <div className='cart-empty'>Your cart is empty</div>
      ) : (
        <React.Fragment>
          {items.map((item, idx) => (
            <CartItem
              key={idx}
              item={item}
              total={item.quantity * item.price}
              changeQuantity={changeQuantity}
              editable={editable}
              getCart={getCart}
            />
          ))}
          <CartItem total={total} />
        </React.Fragment>
      )}
    </div>
  );
};

// proptypes
CartList.propTypes = {
  editable: PropTypes.bool
};

CartList.defaultProps = {
  editable: true
};

export default CartList;
