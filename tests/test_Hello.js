import chai, { expect } from "chai";
import React from "react";
import { Hello } from "../src/Hello";
import Enzyme, { render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Hello />", () => {
  it("shows the correct text", () => {
    const wrapper = shallow(<Hello />);

    expect(wrapper.contains("Hello world")).to.equal(true);
  });
  const wrapper = shallow(<Hello />);

  it("has one child", () => {
    expect(wrapper.find("h1").children()).to.have.length(1);
  });
});
