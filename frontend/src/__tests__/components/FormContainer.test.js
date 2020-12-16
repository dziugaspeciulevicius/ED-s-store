
import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import FormContainer from "../../components/FormContainer.component";

describe("Form container tests", () => {
    it("Renders <FormContainer /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<FormContainer />)).toMatchSnapshot();
    });
});
