import React from 'react';
import Product from '../Product';
import { Row, Col } from 'react-bootstrap';
import './style.css';

export default ({ products, ...others }) => {
  return (
    <Row>
      <Col lg={12}>
        <Row className='justify-content-center'>
          {products.map((product, idx) => (
            <Product
              className='product'
              key={idx}
              product={product}
              {...others}
            />
          ))}
        </Row>
      </Col>
    </Row>
  );
};
