import React from "react";
import { shallow, mount, render } from "enzyme";
import "../../setupTests";
import RegisterPage from "../../pages/RegisterPage.component";
jest.mock("../../pages/RegisterPage.component");

describe("<RegisterPage />", () => {
  it("Renders <RegisterPage /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<RegisterPage />)).toMatchSnapshot();
  });
});
