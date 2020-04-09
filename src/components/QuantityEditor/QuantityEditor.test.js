import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuantityEditor from '.';
import { Button } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('<QuantityEditor />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<QuantityEditor buttonsId={1} />);
  });

  it('Should have two buttons', () => {
    console.log(wrapper.debug());
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it('Should have a button to inc items', () => {
    expect(wrapper.find({ id: 'button-incItem-1' })).toHaveLength(1);
  });

  it('Should have a button to dec items', () => {
    expect(wrapper.find({ id: 'button-decItem-1' })).toHaveLength(1);
  });

  it('Should have a field to displays quantitys', () => {
    expect(wrapper.find({ id: 'field-quantity-1' })).toHaveLength(1);
  });
});
