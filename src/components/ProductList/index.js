import React, { Component } from 'react';
import Product from '../Product';
import { Row, Col } from 'react-bootstrap';

export default class ProductList extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    fetch('https://abi-bus-api.herokuapp.com/api/products')
      .then(data => data.json().then(json => this.setState({ products: json })))
      .catch(error => console.log(error));
  }

  render() {
    const { products } = this.state;
    return (
      <Row>
        <Col lg={12}>
          <Row>
            {products.map((product, productKey) => (
              <Product
                className='product'
                key={productKey}
                productTitle={product.title}
                productPrice={product.price}
                productImages={product.images}
                productDescription={`${product.description.substring(
                  0,
                  100
                )}...`}
              />
            ))}
          </Row>
        </Col>
      </Row>
    );
  }
}
