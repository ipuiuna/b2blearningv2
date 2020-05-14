import React from 'react';
import toJson from 'enzyme-to-json';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Step2 from './';

configure({ adapter: new Adapter() });

const formState = {
  nome: undefined,
  rua: undefined,
  cep: undefined,
  numero: undefined,
  estado: undefined,
  cidade: undefined,
  bairro: undefined,
};

describe('<Step2 />', () => {
  it('renders correctly with 7 textcontrol fields', () => {
    const wrapper = shallow(<Step2 formState={formState} />);
    expect(wrapper.find('TextControl')).toHaveLength(7);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a nome field with empty value', () => {
    const wrapper = shallow(<Step2 formState={{ nome: '' }} />);
    expect(wrapper.find('#name')).toHaveLength(1);
    expect(wrapper.find('#name').prop('helperText')).toEqual(
      'Por favor preencha seu nome'
    );
  });

  it('renders a nome field with maxlenght', () => {
    const wrapper = shallow(
      <Step2
        formState={{
          nome:
            'João josé da silva com o nome muito grande passando o limite máximo de caracteres João josé da silva com o nome muito grande passando o limite máximo de caracteres',
        }}
      />
    );
    expect(wrapper.find('#name')).toHaveLength(1);
    expect(wrapper.find('#name').prop('helperText')).toEqual(
      'Numero de caracteres máximo atingido.'
    );
  });

  it('renders a rua field with empty value', () => {
    const wrapper = shallow(<Step2 formState={{ rua: '' }} />);
    expect(wrapper.find('#address')).toHaveLength(1);
    expect(wrapper.find('#address').prop('helperText')).toEqual(
      'Digite sua rua por favor.'
    );
  });

  it('renders a number field with empty value', () => {
    const wrapper = shallow(<Step2 formState={{ numero: '' }} />);
    expect(wrapper.find('#number')).toHaveLength(1);
    expect(wrapper.find('#number').prop('helperText')).toEqual(
      'Digite seu número por favor.'
    );
  });

  it('renders a bairro field with empty value', () => {
    const wrapper = shallow(<Step2 formState={{ bairro: '' }} />);
    expect(wrapper.find('#bairro')).toHaveLength(1);
    expect(wrapper.find('#bairro').prop('helperText')).toEqual(
      'Digite seu bairro por favor.'
    );
  });

  it('renders a city field with empty value', () => {
    const wrapper = shallow(<Step2 formState={{ cidade: '' }} />);
    expect(wrapper.find('#city')).toHaveLength(1);
    expect(wrapper.find('#city').prop('helperText')).toEqual(
      'Digite sua cidade por favor.'
    );
  });

  it('renders a state field with empty value', () => {
    const wrapper = shallow(<Step2 formState={{ estado: '' }} />);
    expect(wrapper.find('#state')).toHaveLength(1);
    expect(wrapper.find('#state').prop('helperText')).toEqual(
      'Digite seu estado por favor.'
    );
  });

  it('renders a cep field with empty value', () => {
    const wrapper = shallow(<Step2 formState={{ cep: '' }} />);
    expect(wrapper.find('#cep')).toHaveLength(1);
    expect(wrapper.find('#cep').prop('helperText')).toEqual(
      'Por favor digite um CEP válido.'
    );
  });

  it('renders a cep field with invalid value', () => {
    const wrapper = shallow(<Step2 formState={{ cep: '123' }} />);
    expect(wrapper.find('#cep')).toHaveLength(1);
    expect(wrapper.find('#cep').prop('helperText')).toEqual(
      'Por favor digite um CEP válido.'
    );
  });

  it('allow', () => {
    const wrapper = shallow(<Step2 formState={{ cep: '123' }} />);
    expect(wrapper.find('#cep')).toHaveLength(1);
    expect(wrapper.find('#cep').prop('helperText')).toEqual(
      'Por favor digite um CEP válido.'
    );
  });
});
