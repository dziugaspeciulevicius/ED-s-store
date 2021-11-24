import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import Spinner from "../../components/Spinner.component";
jest.mock("../../components/Spinner.component");

describe("Spinner tests", () => {
  it("Renders <Spinner /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<Spinner />)).toMatchSnapshot();
  });
});
