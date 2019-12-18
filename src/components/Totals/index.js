import React, { Component } from 'react';
import Data from '../../Data';

export default class index extends Component {
  getTotals() {
    let totals = 0;
    for (let i = 0; i < Data.getLenght(); i++) {
      totals += Data.state[i].qtdy * Data.state[i].price;
    }
    return totals;
  }

  render() {
    if (Data.getLenght()) {
      return (
        <div className='flex-table row' role='rowgroup'>
          <div className='flex-row first' role='cell'></div>
          <div className='flex-row' role='cell'></div>
          <div className='flex-row' role='cell'></div>
          <div className='flex-row' role='cell'></div>
          <div className='flex-row' role='cell'>
            {this.getTotals()}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
