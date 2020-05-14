import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LoginPage from "./";
import Modal from "@material-ui/core/Modal";
import Login from "../../components/Login";
import { Drawer } from "@material-ui/core";

configure({ adapter: new Adapter() });

describe("<LoginPage />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoginPage />);
  });

  it("Should render a modal", () => {
    expect(wrapper.find(Modal).prop("open")).toEqual(false);
  });
  it("Should render Login component", () => {
    expect(wrapper.containsMatchingElement(Login)).toEqual(true);
  });

  it("Should the drawer be ocult", () => {
    expect(wrapper.find(Drawer).prop("open")).toEqual(false);
  });

  it('Should have a button "entrar" in the app bar', () => {
    expect(wrapper.find("#button-entrar-navbar")).toHaveLength(1);
  });
});
