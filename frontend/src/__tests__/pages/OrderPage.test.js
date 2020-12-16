import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import OrderPage from "../../pages/OrderPage.component"
jest.mock("../../pages/OrderPage.component");

describe("<OrderPage />", () => {
    it("Renders <OrderPage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<OrderPage />)).toMatchSnapshot();
    });
});
