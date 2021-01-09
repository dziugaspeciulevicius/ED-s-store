import React from "react";
import { shallow, mount, render } from "enzyme";
import "../../setupTests";
import ProductListPage from "../../pages/ProductListPage.component"
jest.mock("../../pages/ProductListPage.component");

describe("<ProductListPage />", () => {
    it("Renders <ProductListPage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<ProductListPage />)).toMatchSnapshot();
    });
});