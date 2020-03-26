import React from 'react';
import { NavLink } from 'react-router-dom';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Success from '.';
import cheers from '../../assets/img/cheers.png';

configure({ adapter: new Adapter() });

describe('<ProductList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Success />);
  });

  it('Should have a message of payment done', () => {
    expect(wrapper.find({ id: 'label-sucess' })).toHaveLength(1);
  });

  it('Should have a image of cheers', () => {
    expect(wrapper.find('img').prop('src')).toEqual(cheers);
  });

  it('Should have a message telling to user to wait for delivery', () => {
    expect(wrapper.find({ id: 'label-wait' })).toHaveLength(1);
  });

  it('Should have a button to go back to catalog', () => {
    expect(wrapper.find(NavLink)).toHaveLength(1);
  });
});
