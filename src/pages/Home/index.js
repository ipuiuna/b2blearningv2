import React, { Component } from 'react';
import NavBarTop from '../../components/NavBarTop';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer/index';
import { Container } from 'react-bootstrap';
import './style.css';

class Home extends Component {
  render() {
    const email = localStorage.getItem('email');
    return (
      <div>
        <NavBarTop />
        <Container>
          <h5>{`Bem vindo: ${email}`}</h5>
          <ProductList />
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Home;
