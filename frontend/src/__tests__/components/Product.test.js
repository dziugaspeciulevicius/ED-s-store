import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import Product from "../../components/Product.component";
jest.mock("../../components/Product.component");

describe("Product tests", () => {
  it("Renders <Product /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<Product />)).toMatchSnapshot();
  });
});
