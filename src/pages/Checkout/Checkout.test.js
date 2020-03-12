import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Checkout from './';
import CartManager from '../../components/CartManager';
import CheckoutStepper from '../../components/CheckoutSteper';
import Loading from '../../components/Loading';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Checkout />);
  });

  it('Should be wrapped with CartManager', () => {
    expect(wrapper.containsMatchingElement(CartManager)).toEqual(true);
  });

  it('Should be have a checkout stepper', () => {
    expect(wrapper.containsMatchingElement(CheckoutStepper)).toEqual(true);
  });
});
