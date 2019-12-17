import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import ProductCarousel from '../ProductCarousel';
import Data from '../../Data';
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
    this.setState({ qtdy: this.state.qtdy + 1 }, () => {
      Data.setState({
        id: this.props.productId,
        title: this.props.productTitle,
        price: this.props.productPrice,
        qtdy: this.state.qtdy
      });
      console.log(Data.state);
    });
  };

  DecrementQtdy = () => {
    if (this.state.qtdy > 0) {
      this.setState(
        {
          qtdy: this.state.qtdy - 1
        },
        () => {
          Data.setState({ id: this.props.productId, qtdy: this.state.qtdy });
        }
      );
    }
  };

  render() {
    const {
      productTitle,
      productPrice,
      productDescription,
      productId
    } = this.props;

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
              <button className='btn btn-primary' onClick={this.DecrementQtdy}>
                <span>-</span>
              </button>
              <div className='divider'></div>
              <input
                className='qty-field'
                id={`qty-field-${productId}`}
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
