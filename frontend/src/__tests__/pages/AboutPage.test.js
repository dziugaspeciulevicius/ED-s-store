import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import AboutPage from "../../pages/AboutPage.component"

describe("<AboutPage />", () => {
    it("Renders <AboutPage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<AboutPage />)).toMatchSnapshot();
    });
});
