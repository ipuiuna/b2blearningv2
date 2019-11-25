import React, { Component } from 'react';
import './item.css';

export class Item extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='card h-100'>
                <a href='#'>
                  <img
                    class='img-thumbnail'
                    src='https://via.placeholder.com/300'
                    alt=''
                  />
                </a>
                <div className='card-body'>
                  <h4 className='card-title'>
                    <a href='#'>Item One</a>
                  </h4>
                  <h5>$xx.xx</h5>
                  <p className='card-text'>Item discription</p>
                </div>
                <div className='card-footer'>
                  <div className='row justify-content-center'>
                    <button className='btn btn-primary'>
                      <span>-</span>
                    </button>
                    <div className='divider'></div>
                    <input className='qty-field' type='text' placeholder='0' />
                    <div className='divider'></div>
                    <button className='btn btn-primary'>
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
