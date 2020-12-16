import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import LoginPage from "../../pages/LoginPage.component";
jest.mock("../../pages/LoginPage.component");

describe("<LoginPage />", () => {
    it("Renders <LoginPage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<LoginPage />)).toMatchSnapshot();
    });
});

