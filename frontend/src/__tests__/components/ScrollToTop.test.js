import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import ScrollToTop from "../../components/ScrollToTop.component";
jest.mock("../../components/ScrollToTop.component");

describe("ScrollToTop tests", () => {
  it("Renders <ScrollToTop /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<ScrollToTop />)).toMatchSnapshot();
  });
});
