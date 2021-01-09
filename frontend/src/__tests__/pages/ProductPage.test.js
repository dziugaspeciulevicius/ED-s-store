import React from "react";
import { shallow, mount, render } from "enzyme";
import "../../setupTests";
import ProductPage from "../../pages/ProductPage.component"
jest.mock("../../pages/ProductPage.component");

describe("<ProductPage />", () => {
    it("Renders <ProductPage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<ProductPage />)).toMatchSnapshot();
    });
});