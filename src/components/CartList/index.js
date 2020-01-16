import React from 'react';
import CartItem from '../CartItem';
import PropTypes from 'prop-types';
import './style.scss';

const CartList = props => {
  const { total, getCart, changeQuantity, editable } = props;
  const items = getCart();
  return (
    <div>
      <div className='table-container' role='table'>
        <div
          className='flex-table header'
          role='rowgroup'
          style={{ color: 'white' }}
        >
          <div className='flex-row first' role='columnheader'>
            Product
          </div>
          <div className='flex-row' role='columnheader'>
            Price
          </div>
          <div className='flex-row' role='columnheader'>
            Qtdy
          </div>
          <div className='flex-row' role='columnheader'>
            Totals
          </div>
        </div>
      </div>
      <div className='product-list'>
        <div>
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
      </div>
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
