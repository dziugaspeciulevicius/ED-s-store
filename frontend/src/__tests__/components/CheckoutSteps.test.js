import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import CheckoutSteps from "../../components/CheckoutSteps.component";

describe("CheckoutSteps tests", () => {
  it("Renders <CheckoutSteps /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<CheckoutSteps />)).toMatchSnapshot();
  });
});
