import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CartItem = props => {
  const { item, changeQuantity, total, editable } = props;
  const incItem = changeQuantity
    ? () => changeQuantity(item.id, item.quantity + 1)
    : null;

  const decItem = changeQuantity
    ? () => {
        if (item.quantity > 1) {
          changeQuantity(item.id, item.quantity - 1);
        }
      }
    : null;

  const removeItem = changeQuantity ? () => changeQuantity(item.id, 0) : null;

  return (
    <div className='flex-table row' role='rowgroup'>
      <div className='flex-row first' role='cell'>
        {item ? item.title : ''}
      </div>
      <div className='flex-row' role='cell'>
        {item ? `$ ${item.price.toFixed(2)}` : ''}
      </div>

      <div className='flex-row' role='cell'>
        {item ? (
          <React.Fragment>
            {editable ? (
              <React.Fragment>
                <button className='btn btn-primary' onClick={decItem}>
                  <span>-</span>
                </button>
              </React.Fragment>
            ) : (
              <div></div>
            )}

            <input
              className='qtdy-in-cart'
              id={`qty-field-${item.id}`}
              type='text'
              placeholder='0'
              disabled
              value={item.quantity}
            />

            {editable ? (
              <React.Fragment>
                <button className='btn btn-primary' onClick={incItem}>
                  <span>+</span>
                </button>
                <button className='btn btn btn-danger' onClick={removeItem}>
                  <span className='btn-text-delete'>x</span>
                </button>
              </React.Fragment>
            ) : (
              <div></div>
            )}
          </React.Fragment>
        ) : null}
      </div>

      <div className='flex-row' role='cell'>
        $ {total.toFixed(2)}
      </div>
    </div>
  );
};

// proptypes
CartItem.propTypes = {
  editable: PropTypes.bool
};

CartItem.defaultProps = {
  editable: true
};

export default CartItem;

/*
constructor(props) {
    super(props);
    this.state = {
      qtdy: 0,
      totals: 0
    };
  }

  static defaultProps = {
    itemId: '0',
    itemPrice: '0.00',
    itemTitle: 'none'
  };

  static propTypes = {
    itemId: PropTypes.string,
    itemPrice: PropTypes.number,
    itemTitle: PropTypes.string
  };

  componentDidMount() {
    this.props.itemsArray.forEach(item => {
      if (item.id === this.props.itemId) {
        this.setState({ qtdy: item.qtdy, totals: item.qtdy * item.price });
      }
    });
  }

  incrementQtdy = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach(item => {
      if (item.id === this.props.itemId) {
        item.qtdy += 1;
        this.setState(
          {
            qtdy: this.state.qtdy + 1,
            totals: item.qtdy * item.price
          },
          () => {
            localStorage.setItem('cart', JSON.stringify(cart));
            this.props.updateTotals();
          }
        );

        return;
      }
    });
  };

  decrementQtdy = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (this.state.qtdy > 1) {
      cart.forEach(item => {
        if (item.id === this.props.itemId) {
          item.qtdy -= 1;
          this.setState(
            {
              qtdy: this.state.qtdy - 1,
              totals: item.qtdy * item.price
            },
            () => {
              localStorage.setItem('cart', JSON.stringify(cart));
              this.props.updateTotals();
            }
          );
        }
      });
    }
  };

  deleteItem = () => {
    this.props.itemsArray.splice(this.props.itemKey, 1);
    this.props.itemsArray.forEach(item => {
      this.setState(
        {
          qtdy: this.props.itemQtdy
        },
        () => {
          this.props.updateTotals();
        }
      );
    });
    localStorage.setItem('cart', JSON.stringify(this.props.itemsArray));
    this.props.updateList();
  };
*/
