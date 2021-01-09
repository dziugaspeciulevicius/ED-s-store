import React from "react";
import { shallow, mount, render } from "enzyme";
import "../../setupTests";
import ShopPage from "../../pages/ShopPage.component"
jest.mock("../../pages/PlaceOrderPage.component");

describe("<ShopPage />", () => {
    it("Renders <ShopPage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<ShopPage />)).toMatchSnapshot();
    });
});