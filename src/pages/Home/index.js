import React, { Component } from 'react';
import NavBarTop from '../../components/NavBarTop';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer/index';
import { Container } from 'react-bootstrap';
import './style.css';

class Home extends Component {
  state = {
    totals: 0
  };

  updateTotals(amount) {
    this.setState({
      totals: this.state.totals + amount
    });
    console.log(`Total in cart: ${this.state.totals}`);
  }

  render() {
    const email = localStorage.getItem('email');
    return (
      <div>
        <NavBarTop totals={this.state.totals} />
        <Container>
          <h1>{`Bem vindo: ${email}`}</h1>
          <ProductList updateTotals={this.updateTotals.bind(this)} />
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Home;
