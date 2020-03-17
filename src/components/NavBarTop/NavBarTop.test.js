import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBarTop from '../../components/NavBarTop';
import Cart from '../../pages/Cart';
import logo from '../../assets/img/logo-white.png';

import {
  AppBar,
  Toolbar,
  Grid,
  Drawer,
  Typography,
  Container,
  List,
  ListItem,
  Fab,
  IconButton
} from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('<NavBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NavBarTop
        total={0}
        getCart={() => {
          return 0;
        }}
      />
    );
  });

  it('Should the drawer be ocult', () => {
    expect(wrapper.find(Drawer).prop('open')).toEqual(false);
  });

  it('Should have a cart component', () => {
    expect(wrapper.find(Cart)).toHaveLength(1);
  });

  it('Should have a logo', () => {
    expect(wrapper.find('img').prop('src')).toEqual(logo);
  });
});
