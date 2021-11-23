import React from "react";
import { shallow, mount, render } from "enzyme";
import "../../setupTests";
import UserEditPage from "../../pages/UserEditPage.component";
jest.mock("../../pages/UserEditPage.component");

describe("<UserEditPage />", () => {
  it("Renders <UserEditPage /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<UserEditPage />)).toMatchSnapshot();
  });
});
