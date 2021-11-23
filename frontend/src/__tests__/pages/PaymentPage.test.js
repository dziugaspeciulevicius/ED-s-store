import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import PaymentPage from "../../pages/PaymentPage.component";
jest.mock("../../pages/PaymentPage.component");

describe("<PaymentPage />", () => {
  it("Renders <PaymentPage /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<PaymentPage />)).toMatchSnapshot();
  });
});
