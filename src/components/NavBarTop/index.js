import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login';
import './style.css';

class NavBarTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totals: 0
    };
  }

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
                <li className='nav-item'>
                  <NavLink
                    to={'/'}
                    isActive={match => {
                      return match ? match.isExact : false;
                    }}
                    className='nav-link'
                  >
                    Catalog
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to={'/cart'}
                    isActive={match => {
                      return match ? match.isExact : false;
                    }}
                    className='nav-link'
                  >
                    Cart
                  </NavLink>
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
              <span className='navbar-text'>{`$ ${this.props.totals.toFixed(
                2
              )}`}</span>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default NavBarTop;
