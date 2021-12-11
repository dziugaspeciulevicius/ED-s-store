import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import OrderListPage from "../../pages/admin-panel/tab-panels/OrderListPage.component";

jest.mock("../../pages/OrderListPage.component");

describe("<OrderListPage />", () => {
  it("Renders <OrderListPage /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<OrderListPage />)).toMatchSnapshot();
  });
});
