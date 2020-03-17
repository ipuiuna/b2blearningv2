import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Product from './';

configure({ adapter: new Adapter() });

describe('<Product />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Product
        product={{ title: 'some text', images: ['array of images'], price: 0 }}
      />
    );
  });

  it('Should load images from product', () => {
    expect(wrapper.find('img').prop('src')).toEqual('array of images');
  });

  it('Should have a title', () => {
    expect(wrapper.find('h2').props('id')).toEqual('label-product-title');
  });

  //   it('Should have a logo', () => {
  //     expect(wrapper.find('img').prop('src')).toEqual(logo);
  //   });
});
