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

  isTotalsEmpty = () => {
    if (this.state.totals === 0) {
      return true;
    } else {
      return false;
    }
  };

  componentDidMount() {
    const cartItem = JSON.parse(localStorage.getItem('cart'));
    let qtdy = 0;
    let totals = 0;
    cartItem.forEach(item => {
      if (item.id === this.props.itemId) {
        qtdy = item.qtdy;
        totals = item.qtdy * item.price;
      }
    });

    this.setState({
      qtdy: qtdy,
      totals: totals
    });
  }

  static defaultProps = {
    itemId: '0',
    itemQtdy: 0,
    itemPrice: '0.00',
    itemTitle: 'none'
  };

  static propTypes = {
    itemId: PropTypes.string,
    itemQtdy: PropTypes.number,
    itemPrice: PropTypes.number,
    itemTitle: PropTypes.string
  };

  incrementQtdy = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach(item => {
      if (item.id === this.props.itemId) {
        item.qtdy += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        this.setState({
          qtdy: this.state.qtdy + 1,
          totals: item.qtdy * item.price
        });
        this.props.updateTotals();
        return;
      }
    });
  };

  decrementQtdy = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach(item => {
      if (item.id === this.props.itemId) {
        item.qtdy -= 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        this.setState({
          qtdy: this.state.qtdy - 1,
          totals: item.qtdy * item.price
        });
        this.props.updateTotals();
        return;
      }
    });
  };

  deleteItem = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const index = cart.findIndex(x => x.id === this.props.itemId);
    if (index !== undefined) cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({
      qtdy: 0,
      totals: 0
    });
    this.props.updateTotals();
    this.props.reRenderAfterDeleteAnItem();
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
