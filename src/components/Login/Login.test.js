import React from "react";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Login from "./";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

configure({ adapter: new Adapter() });

describe("<Login />", () => {
  it('Should have a button "entrar" in the drawer', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("#button-entrar-drawer")).toHaveLength(1);
  });

  it("Should have a text field to insert email", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("#input-home-01")).toHaveLength(1);
  });

  it("Should have a text field to insert password", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("#input-home-02")).toHaveLength(1);
  });
});
