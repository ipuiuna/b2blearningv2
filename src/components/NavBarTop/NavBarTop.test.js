import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBarTop from '../../components/NavBarTop';

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
    wrapper = mount(<NavBarTop total={0} />);
  });

  it('Should have a hide Drawer', () => {
    expect(wrapper.find(Drawer).prop('open')).toEqual(false);
  });
});
