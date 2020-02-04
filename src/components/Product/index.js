import React from 'react';
import { Col } from 'react-bootstrap';
import ProductCarousel from '../ProductCarousel';
import './style.css';

export default function Product({ product, changeQuantity }) {
  // Challenge: create just one method to support both actions
  const incItem = changeQuantity
    ? () => changeQuantity(product.id, product.quantity + 1)
    : null;
  const decItem = changeQuantity
    ? () => changeQuantity(product.id, product.quantity - 1)
    : null;

  return (
    <Col lg={3}>
      <div className='card h-100'>
        <ProductCarousel productImages={product.images} />
        <div className='card-body'>
          <h4 className='card-title'>
            <a href='#'>{product.title}</a>
          </h4>
          <h5>${product.price}</h5>
          <p className='card-text'>{`${product.description.substring(
            0,
            100
          )}...`}</p>
        </div>
        <div className='card-footer'>
          <div className='row justify-content-center'>
            <button className='btn btn-primary' onClick={decItem}>
              <span>-</span>
            </button>
            <div className='divider'></div>
            <input
              className='qty-field'
              id={`qty-field-${product.id}`}
              type='text'
              placeholder='0'
              value={product.quantity}
              readOnly
            />
            <div className='divider'></div>
            <button className='btn btn-primary' onClick={incItem}>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
}
