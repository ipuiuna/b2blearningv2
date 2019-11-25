import React, { Component } from 'react';

export default class ItemList extends Component {
  render() {
    const itemList = fetch(
      'https://abi-bus-api.herokuapp.com/api/products'
    ).then(data => data.json());
    return <div>{}</div>;
  }
}
