import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductList from '.';
import Product from '../Product';

configure({ adapter: new Adapter() });

describe('<ProductList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ProductList products={[{ title: 'title', price: '0.00', images: [] }]} />
    );
  });

  it('Should have at list one product', () => {
    expect(wrapper.find(Product)).toHaveLength(1);
  });
});
