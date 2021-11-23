import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import Rating from "../../components/Rating.component";
jest.mock("../../components/Rating.component");

describe("Rating tests", () => {
  it("Renders <Rating /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<Rating />)).toMatchSnapshot();
  });
});
