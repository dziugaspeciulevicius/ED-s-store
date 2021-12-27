import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import UserListPage from "../../pages/admin-panel/tab-panels/UserListPage.component";

jest.mock("../../pages/admin-panel/tab-panels/UserListPage.component");

describe("<UserListPage />", () => {
  it("Renders <UserListPage /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<UserListPage />)).toMatchSnapshot();
  });
});
