import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login';
import './style.css';

class NavBarTop extends Component {
  handleLogout = () => {
    localStorage.removeItem('email');
    return <Login />;
  };

  render() {
    return (
      <div>
        <Navbar className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
          <div className='container'>
            <a className='navbar-brand' href='index.html'>
              Shop name
            </a>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                  <a className='nav-link' href='/'>
                    Catalog
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>Cart</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>Checkout</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' onClick={this.handleLogout} href='#'>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default NavBarTop;
