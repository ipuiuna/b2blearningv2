import React from "react";
import renderer from "react-test-renderer";
import toJson from "enzyme-to-json";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Step2 from "./";

import { TextField } from "@material-ui/core";

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

describe("<Step2 />", () => {
  it("renders correctly with 7 textcontrol fields", () => {
    const wrapper = shallow(<Step2 formState={formState} />);
    expect(wrapper.find("TextControl")).toHaveLength(7);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders an nome field with empty value", () => {
    const wrapper = shallow(<Step2 formState={{ nome: "" }} />);
    expect(wrapper.find("#name")).toHaveLength(1);
    expect(wrapper.find("#name").prop("helperText")).toEqual("Por favor preencha seu nome");
  });

  it("renders an nome field with maxlenght", () => {
    const wrapper = shallow(
      <Step2
        formState={{
          nome:
            "João josé da silva com o nome muito grande passando o limite máximo de caracteres João josé da silva com o nome muito grande passando o limite máximo de caracteres",
        }}
      />
    );
    expect(wrapper.find("#name")).toHaveLength(1);
    expect(wrapper.find("#name").prop("helperText")).toEqual("Numero de caracteres máximo atingido.");
  });
});
