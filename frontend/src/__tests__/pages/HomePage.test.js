import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import HomePage from "../../pages/HomePage.component"
jest.mock("../../pages/HomePage.component.jsx");

describe("<HomePage />", () => {
    it("Renders <HomePage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<HomePage />)).toMatchSnapshot();
    });
});
