import React, { Component } from 'react';
import NavBarTop from '../NavBarTop';
import Item from '../Item/index';
import Footer from '../Footer/index';

import './home.css';

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
