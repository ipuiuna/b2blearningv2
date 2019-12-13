import React, { Component } from 'react';
import ProductInCart from '../ProductInCart';
import './style.scss';

export default class ProductListInCart extends Component {
  state = {
    products: [
      {
        id: '#001',
        title: 'Cerveja',
        price: '85.00',
        qtdy: 5
      },
      {
        id: '#002',
        title: 'Cerveja 2',
        price: '90.00',
        qtdy: 6
      },
      {
        id: '#003',
        title: 'Cerveja 3',
        price: '95.00',
        qtdy: 7
      },
      {
        id: '#004',
        title: 'Cerveja 4',
        price: '100.00',
        qtdy: 12
      },
      {
        id: '#005',
        title: 'Cerveja',
        price: '85.00',
        qtdy: 5
      },
      {
        id: '#006',
        title: 'Cerveja 2',
        price: '90.00',
        qtdy: 6
      },
      {
        id: '#007',
        title: 'Cerveja 3',
        price: '95.00',
        qtdy: 7
      },
      {
        id: '#008',
        title: 'Cerveja 4',
        price: '100.00',
        qtdy: 12
      },
      {
        id: '#009',
        title: 'Cerveja',
        price: '85.00',
        qtdy: 5
      },
      {
        id: '#010',
        title: 'Cerveja 2',
        price: '90.00',
        qtdy: 6
      },
      {
        id: '#011',
        title: 'Cerveja 3',
        price: '95.00',
        qtdy: 7
      },
      {
        id: '#012',
        title: 'Cerveja 4',
        price: '100.00',
        qtdy: 12
      },
      {
        id: '#013',
        title: 'Cerveja',
        price: '85.00',
        qtdy: 5
      }
    ]
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <div className='table-container' role='table'>
          <div className='flex-table header' role='rowgroup'>
            <div className='flex-row first' role='columnheader'>
              id
            </div>
            <div className='flex-row' role='columnheader'>
              -
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
          {products.map((product, productKey) => (
            <ProductInCart
              key={productKey}
              productId={product.id}
              productTitle={product.title}
              productPrice={product.price}
            />
          ))}
        </div>
      </div>
    );
  }
}
