import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cart from './';
import CartList from '../../components/CartList'

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cart />);
  });

  it('Should have a CartList', () => {
    expect(wrapper.containsMatchingElement(<CartList />)).toEqual(true);
  });
});
