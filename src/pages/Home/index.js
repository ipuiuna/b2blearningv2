import React, { Component } from 'react';
import NavBarTop from '../../components/NavBarTop';
import Item from '../../components/Item/index';
import Footer from '../../components/Footer/index';

import './style.css';

class Home extends Component {
  handleLogout = () => {
    localStorage.removeItem('email');
    this.props.history.push('/login');
  };

  render() {
    const email = localStorage.getItem('email');
    return (
      <div>
        <NavBarTop></NavBarTop>
        <h1>{`Bem vindo: ${email}`}</h1>
        <input type='submit' onClick={this.handleLogout} value='Logout'></input>
        <Item></Item>
        <Footer></Footer>
      </div>
    );
  }
}
export default Home;
