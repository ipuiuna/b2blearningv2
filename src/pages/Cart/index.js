import React, { Component } from 'react';
import ProductListInCart from '../../components/ProducListInCart';
import NavBarTop from '../../components/NavBarTop';
import Footer from '../../components/Footer';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totals: 0
    };
  }

  componentDidMount() {
    this.updateTotals();
  }

  updateTotals = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let totals = 0;
    cart.forEach(element => {
      totals += element.qtdy * element.price;
    });
    this.setState({ totals: totals });
  };

  render() {
    return (
      <div>
        <NavBarTop totals={this.state.totals} />
        <ProductListInCart
          totals={this.state.totals}
          updateTotals={this.updateTotals}
        />
        <Footer />
      </div>
    );
  }
}

export default Cart;
