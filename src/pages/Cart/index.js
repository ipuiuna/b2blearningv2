import React, { Component } from 'react';
import ProductListInCart from '../../components/ProducListInCart';
import NavBarTop from '../../components/NavBarTop';
import Footer from '../../components/Footer';

class Cart extends Component {
  render() {
    return (
      <div>
        <NavBarTop />
        <ProductListInCart />
        <Footer />
      </div>
    );
  }
}

export default Cart;
