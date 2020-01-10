import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class index extends Component {
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

  render() {
    const { itemId, key, itemPrice, itemTitle } = this.props;
    return (
      <div className='flex-table row' role='rowgroup' id={key}>
        <div className='flex-row first' role='cell'>
          {itemId}
        </div>
        <div className='flex-row' role='cell'>
          {itemTitle}
        </div>
        <div className='flex-row' role='cell'>
          $ {itemPrice.toFixed(2)}
        </div>

        <div className='flex-row' role='cell'>
          <button className='btn btn-primary' onClick={this.decrementQtdy}>
            <span>-</span>
          </button>

          <input
            className='qtdy-in-cart'
            id={`qty-field-${itemId}`}
            type='text'
            placeholder='0'
            value={this.state.qtdy}
          />

          <button className='btn btn-primary' onClick={this.incrementQtdy}>
            <span>+</span>
          </button>
          <button className='btn btn btn-danger' onClick={this.deleteItem}>
            <span className='btn-text-delete'>x</span>
          </button>
        </div>

        <div className='flex-row' role='cell'>
          $ {this.state.totals.toFixed(2)}
        </div>
      </div>
    );
  }
}
