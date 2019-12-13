import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export class ProductInCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qtdy: 0
    };
  }

  static defaultProps = {
    productKey: '0'
  };

  static propTypes = {
    productKey: PropTypes.string
  };

  IncrementQtdy = () => {
    this.setState({ qtdy: this.state.qtdy + 1 });
  };

  DecrementeQtdy = () => {
    if (this.state.qtdy === 0) {
    } else {
      this.setState({ qtdy: this.state.qtdy - 1 });
    }
  };

  render() {
    const { productTitle, productPrice, qtdy, productId } = this.props;

    return (
      <div className='flex-table row' role='rowgroup'>
        <div className='flex-row first' role='cell'>
          {productId}
        </div>
        <div className='flex-row' role='cell'>
          img
        </div>
        <div className='flex-row' role='cell'>
          {productTitle}
        </div>
        <div className='flex-row' role='cell'>
          {productPrice}
        </div>
        <div className='flex-row' role='cell'>
          {qtdy}
        </div>
        <div className='flex-row' role='cell'>
          Total
        </div>
      </div>
    );
  }
}

export default ProductInCart;
