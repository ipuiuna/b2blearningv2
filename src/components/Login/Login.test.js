import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from './';

import { Drawer, Fab } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('<Login />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('Should the drawer be ocult', () => {
    expect(wrapper.find(Drawer).prop('open')).toEqual(false);
  });

  it('Should have a button "entrar" in the app bar', () => {
    expect(wrapper.find({ id: 'button-entrar-navbar' })).toHaveLength(1);
  });

  it('Should have a button "entrar" in the drawer', () => {
    expect(wrapper.find({ id: 'button-entrar-drawer' })).toHaveLength(1);
  });

  it('Should have a text field to insert email', () => {
    expect(wrapper.find({ id: 'input-home-01' })).toHaveLength(1);
  });

  it('Should have a text field to insert password', () => {
    expect(wrapper.find({ id: 'input-home-02' })).toHaveLength(1);
  });
});
