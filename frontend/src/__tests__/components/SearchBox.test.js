import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import SearchBox from "../../components/SearchBox.component";
jest.mock("../../components/SearchBox.component");

describe("SearchBox tests", () => {
  it("Renders <SearchBox /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<SearchBox />)).toMatchSnapshot();
  });
});
