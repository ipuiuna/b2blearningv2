import React, { Component } from 'react';
import NavBarTop from '../../components/NavBarTop';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer/index';
import { Container } from 'react-bootstrap';
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totals: 0
    };
  }

  componentDidMount() {
    try {
      this.updateTotals();
    } catch (error) {
      console.log(error);
    }
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
    const email = localStorage.getItem('email');
    return (
      <div>
        <NavBarTop totals={this.state.totals} />
        <Container>
          <h5>{`Bem vindo: ${email}`}</h5>
          <ProductList updateTotals={this.updateTotals} />
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Home;
