import React, { Component } from 'react';
import './style.scss';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='py-5 bg-dark'>
          <div className='container'>
            <p className='text-center text-white'>Footer</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
