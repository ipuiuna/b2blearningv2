import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuantityEditor from '.';
import { Button } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('<QuantityEditor />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<QuantityEditor />);
  });

  it('Should have two buttons', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it('Should have a button to inc items', () => {
    expect(wrapper.find({ id: 'button-incItem' })).toHaveLength(1);
  });

  it('Should have a button to dec items', () => {
    expect(wrapper.find({ id: 'button-decItem' })).toHaveLength(1);
  });

  it('Should have a field to displays quantitys', () => {
    expect(wrapper.find({ id: 'field-quantity' })).toHaveLength(1);
  });
});
