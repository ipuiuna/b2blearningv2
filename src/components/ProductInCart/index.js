import React, { Component } from 'react';
import Data from '../../Data';
import CartItem from '../CartItem';
import Totals from '../Totals';
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
      array: Data.state
    });
  }

  render() {
    return (
      <div>
        {this.state.array.map((item, itemKey) => (
          <CartItem
            itemId={item.id}
            itemTitle={item.title}
            itemPrice={item.price}
            itemQtdy={item.qtdy}
            key={itemKey}
          />
        ))}
        {<Totals />}
      </div>
    );
  }
}

export default ProductInCart;
