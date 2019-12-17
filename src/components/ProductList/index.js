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
          <Row className='justify-content-center'>
            {products.map((product, productKey) => (
              <Product
                updateTotals={this.props.updateTotals}
                productId={product.id}
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
