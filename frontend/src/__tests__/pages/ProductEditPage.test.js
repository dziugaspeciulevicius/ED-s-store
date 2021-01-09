import React from "react";
import { shallow, mount, render } from "enzyme";
import "../../setupTests";
import ProductEditPage from "../../pages/ProductEditPage.component"
jest.mock("../../pages/ProductEditPage.component");

describe("<ProductEditPage />", () => {
    it("Renders <ProductEditPage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<ProductEditPage />)).toMatchSnapshot();
    });
});