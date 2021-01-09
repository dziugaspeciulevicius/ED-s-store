import React from "react";
import { shallow, mount, render } from "enzyme";
import "../../setupTests";
import UserListPage from "../../pages/UserListPage.component"
jest.mock("../../pages/UserListPage.component");

describe("<UserListPage />", () => {
    it("Renders <UserListPage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<UserListPage />)).toMatchSnapshot();
    });
});