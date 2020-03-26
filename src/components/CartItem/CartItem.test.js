import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CartItem from '.';
import QuantityEditor from '../QuantityEditor';
import DeleteIcon from '@material-ui/icons/Delete';

configure({ adapter: new Adapter() });

describe('<CartItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CartItem
        item={{
          id: '5db70cd3355bf3001705be66',
          title: 'Cerveja Antarctica Original 600ml Caixa (12 Unidades)',
          price: 95.88,
          quantity: 1,
          images:
            'https://emporiodacerveja.vteximg.com.br/arquivos/ids/162847-500-500/Cerveja-Antarctica-Original-600ml-Caixa-Com-12-Unidades.jpg?v=636175051536030000'
        }}
      />
    );
  });

  it('Should have an image of the product', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('Should have a button to remove from cart', () => {
    expect(wrapper.find(DeleteIcon)).toHaveLength(1);
  });

  it('Should have a label for title', () => {
    expect(wrapper.find({ id: 'item-title' })).toHaveLength(1);
  });

  it('Should have a label for price', () => {
    expect(wrapper.find({ id: 'item-price' })).toHaveLength(1);
  });

  it('Should have a QuantityEditor', () => {
    expect(wrapper.find(QuantityEditor)).toHaveLength(1);
  });
});
