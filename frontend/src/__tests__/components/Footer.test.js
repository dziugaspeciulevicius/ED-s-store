
import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import Footer from "../../components/Footer.component";

describe("Footer tests", () => {
    it("Renders <Footer /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<Footer />)).toMatchSnapshot();
    });
});
