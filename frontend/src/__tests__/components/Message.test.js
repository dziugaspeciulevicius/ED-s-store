import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import Message from "../../components/Message.component";
jest.mock("../../components/Message.component");

describe("Message tests", () => {
    it("Renders <Message /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<Message />)).toMatchSnapshot();
    });
});
