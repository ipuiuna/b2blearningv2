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
          return null;
        }}
      />
    );
  });

  it('Should have at least one CartItem', () => {
    console.log(wrapper.debug());
    expect(wrapper.find(CartItem)).toEqual(true);
  });
});
