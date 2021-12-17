import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import ProductListPage from "../../pages/admin-panel/tab-panels/ProductListPage.component";

jest.mock("../../pages/ProductListPage.component");

describe("<ProductListPage />", () => {
  it("Renders <ProductListPage /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<ProductListPage />)).toMatchSnapshot();
  });
});
