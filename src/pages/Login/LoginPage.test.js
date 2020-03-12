import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LoginPage from './';
import Modal from '@material-ui/core/Modal';
import Login from '../../components/Login';

configure({ adapter: new Adapter() });

describe('<LoginPage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoginPage />);
  });

  it('Should render a modal', () => {
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
  it('Should render Login component', () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });
});
