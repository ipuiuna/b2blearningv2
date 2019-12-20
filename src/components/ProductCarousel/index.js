import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './style.css';

export class ProductCarousel extends Component {
  static defaultProps = {
    productImages: 'https://via.placeholder.com/300'
  };

  static propTypes = {
    productImages: PropTypes.array
  };

  render() {
    return (
      <Carousel>
        {this.props.productImages.map((image, key) => (
          <Carousel.Item key={key}>
            <img
              className='img-thumbnail'
              key={key}
              src={image}
              alt='Description'
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
export default ProductCarousel;
