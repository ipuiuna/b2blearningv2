import React, { Component } from 'react';
import CartItem from '../CartItem';
import './style.scss';

export class ProductInCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }

  componentDidMount() {
    this.setState({
      array: JSON.parse(localStorage.getItem('cart'))
    });
  }

  updateList = () => {
    console.log('updateList ');
    this.setState(
      {
        array: JSON.parse(localStorage.getItem('cart'))
      },
      () => {
        this.props.updateTotals();
      }
    );
  };

  render() {
    return (
      <div>
        {this.state.array.map((item, itemKey) => (
          <CartItem
            itemId={item.id}
            itemTitle={item.title}
            itemPrice={Number(item.price)}
            key={itemKey}
            itemKey={itemKey}
            itemsArray={this.state.array}
            itemQtdy={item.qtdy}
            updateTotals={this.props.updateTotals}
            updateList={this.updateList}
          />
        ))}
        <div className='flex-table row' role='rowgroup'>
          <div className='flex-row first' role='cell'></div>
          <div className='flex-row' role='cell'></div>
          <div className='flex-row' role='cell'></div>
          <div className='flex-row' role='cell'></div>
          <div className='flex-row' role='cell'>
            $ {this.props.totals.toFixed(2)}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInCart;
