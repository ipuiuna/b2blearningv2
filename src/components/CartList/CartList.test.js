import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CartList from '.';
import CartItem from '../CartItem';

import { Drawer } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('<CartList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CartList
        getCart={() => {
          return [
            {
              id: '5db70cd3355bf3001705be66',
              title: 'Cerveja Antarctica Original 600ml Caixa (12 Unidades)',
              price: 95.88,
              quantity: 1,
              images:
                'https://emporiodacerveja.vteximg.com.br/arquivos/ids/162847-500-500/Cerveja-Antarctica-Original-600ml-Caixa-Com-12-Unidades.jpg?v=636175051536030000'
            },
            {
              id: '5e46bb3948d0ac0017959420',
              title: "Cerveja Beck's 330ml Pack (6 unidades)",
              price: 29.94,
              quantity: 1,
              images:
                'https://emporiodacerveja.vteximg.com.br/arquivos/ids/175145-1000-1000/Becks-6pack.png?v=637084687442230000'
            }
          ];
        }}
      />
    );
  });

  it('Should have at least one CartItem', () => {
    //The row where it displays totals count like a cartItem.
    expect(wrapper.find(CartItem)).toHaveLength(3);
  });
});
