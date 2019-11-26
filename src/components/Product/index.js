import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import ProductCarousel from '../ProductCarousel';
import './style.css';

export class Product extends Component {
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
    const productTitle = this.props.productTitle;
    const productPrice = this.props.productPrice;
    const productDescription = this.props.productDescription;
    const productKey = this.props.productKey;
    return (
      <Col lg={3}>
        <div className='card h-100'>
          <a href='#'>
            <ProductCarousel productImages={this.props.productImages} />
          </a>
          <div className='card-body'>
            <h4 className='card-title'>
              <a href='#'>{productTitle}</a>
            </h4>
            <h5>${productPrice}</h5>
            <p className='card-text'>{productDescription}</p>
          </div>
          <div className='card-footer'>
            <div className='row justify-content-center'>
              <button className='btn btn-primary' onClick={this.DecrementeQtdy}>
                <span>-</span>
              </button>
              <div className='divider'></div>
              <input
                className='qty-field'
                id={`qty-field-${productKey}`}
                type='text'
                placeholder='0'
                value={this.state.qtdy}
              />
              <div className='divider'></div>
              <button className='btn btn-primary' onClick={this.IncrementQtdy}>
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default Product;
