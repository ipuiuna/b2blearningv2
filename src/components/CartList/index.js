import React from 'react';
import CartItem from '../CartItem';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const CartList = props => {
  const { total, getCart, changeQuantity, editable } = props;
  const items = getCart();
  return (
    <div className='product-list'>
      {items.length === 0 ? (
        <div className='cart-empty'>
          <Typography id='cart-empty' variant='h3' color='primary'>
            Seu carrinho está vazio
          </Typography>
        </div>
      ) : (
        <React.Fragment>
          {items.map((item, idx) => (
            <CartItem
              key={idx}
              id={item.id}
              item={item}
              total={item.quantity * item.price}
              changeQuantity={changeQuantity}
              editable={editable}
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
  editable: PropTypes.bool,
  getCart: PropTypes.func
};

CartList.defaultProps = {
  editable: true
};

export default CartList;
