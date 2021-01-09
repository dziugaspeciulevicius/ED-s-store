import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import Breadcrumb from "../../components/Breadcrumb.component";

describe("Breadcrumb tests", () => {
    it("Renders <Breadcrumb /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<Breadcrumb />)).toMatchSnapshot();
    });
});
