import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import CartPage from "../../pages/CartPage.component"
jest.mock("../../pages/CartPage.component");

describe("<CartPage />", () => {
    it("Renders <CartPage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<CartPage />)).toMatchSnapshot();
    });
});

