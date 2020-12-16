
import React from "react";
import { shallow, mount, render } from "enzyme";
import "../../setupTests";
import PlaceOrderPage from "../../pages/PlaceOrderPage.component"
jest.mock("../../pages/PlaceOrderPage.component");

describe("<PlaceOrderPage />", () => {
    it("Renders <PlaceOrderPage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<PlaceOrderPage />)).toMatchSnapshot();
    });
});

