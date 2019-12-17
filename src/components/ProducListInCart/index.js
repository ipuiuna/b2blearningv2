import React, { Component } from 'react';
import ProductInCart from '../ProductInCart';
import './style.scss';

export default class ProductListInCart extends Component {
  render() {
    return (
      <div>
        <div className='table-container' role='table'>
          <div className='flex-table header' role='rowgroup'>
            <div className='flex-row first' role='columnheader'>
              id
            </div>
            <div className='flex-row' role='columnheader'>
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
          <ProductInCart />
        </div>
      </div>
    );
  }
}
