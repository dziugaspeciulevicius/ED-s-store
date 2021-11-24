import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import ContactPage from "../../pages/ContactPage.component";

describe("<ContactPage />", () => {
  it("Renders <ContactPage /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<ContactPage />)).toMatchSnapshot();
  });
});
