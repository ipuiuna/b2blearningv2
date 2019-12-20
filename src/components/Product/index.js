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

  size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  componentDidMount() {
    const cartArrayItem = this.props.cartArray.filter(
      item => item.id === this.props.productId
    );

    if (this.size(cartArrayItem) > 0) {
      this.setState({ qtdy: cartArrayItem[0].qtdy }, () =>
        console.log(
          `productId: ${this.props.productId} qtdy: ${this.state.qtdy}`
        )
      );
    }
  }

  static defaultProps = {
    productKey: '0'
  };

  static propTypes = {
    productKey: PropTypes.string
  };

  IncrementQtdy = () => {
    const cart = this.props.cartArray;
    const cartArrayItem = this.props.cartArray.filter(
      item => item.id === this.props.productId
    );

    if (cart.length === 0) {
      cart.push({
        id: this.props.productId,
        title: this.props.productTitle,
        price: this.props.productPrice,
        qtdy: 1
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      this.setState({ qtdy: 1 });
    } else {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === this.props.productId) {
          cart[i].qtdy += 1;
          localStorage.setItem('cart', JSON.stringify(cart));
          this.setState({ qtdy: cart[i].qtdy });
          return;
        }
      }
      cart.push({
        id: this.props.productId,
        title: this.props.productTitle,
        price: this.props.productPrice,
        qtdy: 1
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      this.setState({ qtdy: 1 });
    }
  };

  DecrementQtdy = () => {
    const cart = this.props.cartArray;
    if (this.state.qtdy > 0) {
      this.setState(
        {
          qtdy: this.state.qtdy - 1
        },
        () => {
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === this.props.productId) {
              cart[i].qtdy -= 1;
              localStorage.setItem('cart', JSON.stringify(cart));
              this.setState({ qtdy: cart[i].qtdy });
              return;
            }
          }
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

    const { qtdy } = this.state;

    return (
      <Col lg={3}>
        <div className='card h-100'>
          <ProductCarousel productImages={this.props.productImages} />
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
                value={qtdy}
                readOnly
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
