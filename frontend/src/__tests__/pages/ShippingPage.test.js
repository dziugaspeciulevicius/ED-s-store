import React from "react";
import { shallow, mount, render } from "enzyme";
import "../../setupTests";
import ShippingPage from "../../pages/ShippingPage.component"
jest.mock("../../pages/ShippingPage.component");

describe("<ShippingPage />", () => {
    it("Renders <ShippingPage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<ShippingPage />)).toMatchSnapshot();
    });
});