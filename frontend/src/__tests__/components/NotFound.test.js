import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import NotFound from "../../components/NotFound.component";
jest.mock("../../components/NotFound.component");

describe("Not Found tests", () => {
    it("Renders <NotFound /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<NotFound />)).toMatchSnapshot();
    });
});
