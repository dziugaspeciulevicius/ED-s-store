
import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import Header from "../../components/Header.component";

describe("Header tests", () => {
    it("Renders <Header /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<Header />)).toMatchSnapshot();
    });
});
