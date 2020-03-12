import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './';
import NavBarTop from '../../components/NavBarTop';
import ProductList from '../../components/ProductList';
import CartManager from '../../components/CartManager';
import Footer from '../../components/Footer';
import { Grid } from '@material-ui/core';
import Loading from '../../components/Loading';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('Should be wrapped with CartManager', () => {
    expect(wrapper.containsMatchingElement(CartManager)).toEqual(true);
  });

  it('Should have a navbar', () => {
    expect(wrapper.containsMatchingElement(NavBarTop)).toEqual(true);
  });

  it('Should have a footer component', () => {
    expect(wrapper.containsMatchingElement(Footer)).toEqual(true);
  });
});
