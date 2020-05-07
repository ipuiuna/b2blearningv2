import React from 'react';
import renderer from 'react-test-renderer';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Step2 from './';

import { TextField } from '@material-ui/core';

configure({ adapter: new Adapter() });

const formState = {
  nome: '',
  rua: '',
  cep: '',
  numero: '',
  estado: '',
  cidade: '',
  bairro: '',
};

describe('<Step2 />', () => {
  let wrapper;
  it('renders correctly', () => {
    const tree = renderer.create(<Step2 formState={formState} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //   beforeEach(() => {
  //     wrapper = shallow(
  //       <Step2
  //         total={0}
  //         getCart={() => {
  //           return 0;
  //         }}
  //       />
  //     );
  //   });

  //   it('Should have a field to enter "nome"', () => {
  //     expect(wrapper.find('input').prop('id')).toEqual('name');
  //   });

  //   it('Should have a field to enter "rua"', () => {
  //     expect(wrapper.find(Cart)).toHaveLength(1);
  //   });

  //   it('Should have a field to enter "numero"', () => {
  //     expect(wrapper.find(Cart)).toHaveLength(1);
  //   });

  //   it('Should have a field to enter "bairro"', () => {
  //     expect(wrapper.find(Cart)).toHaveLength(1);
  //   });

  //   it('Should have a field to enter "cidade"', () => {
  //     expect(wrapper.find(Cart)).toHaveLength(1);
  //   });

  //   it('Should have a field to enter "estado"', () => {
  //     expect(wrapper.find(Cart)).toHaveLength(1);
  //   });

  //   it('Should have a field to enter "cep"', () => {
  //     expect(wrapper.find(Cart)).toHaveLength(1);
  //   });
});
