import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class index extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    itemId: '0',
    itemQdy: 0,
    itemPrice: '0.00',
    itemTitle: 'none'
  };

  static propTypes = {
    itemId: PropTypes.string,
    itemQdy: PropTypes.number,
    itemPrice: PropTypes.number,
    itemTitle: PropTypes.string
  };

  render() {
    const { itemId, itemQtdy, key, itemPrice, itemTitle } = this.props;
    return (
      <div className='flex-table row' role='rowgroup' id={key}>
        <div className='flex-row first' role='cell'>
          {itemId}
        </div>
        <div className='flex-row' role='cell'>
          {itemTitle}
        </div>
        <div className='flex-row' role='cell'>
          {itemPrice}
        </div>
        <div className='flex-row' role='cell'>
          {itemQtdy}
        </div>
        <div className='flex-row' role='cell'>
          {itemQtdy * itemPrice}
        </div>
      </div>
    );
  }
}
