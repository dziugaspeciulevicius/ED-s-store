import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import Paginate from "../../components/Paginate.component";
jest.mock("../../components/Paginate.component");

describe("Paginate tests", () => {
    it("Renders <Paginate /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<Paginate />)).toMatchSnapshot();
    });
});
