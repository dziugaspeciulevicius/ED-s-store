import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import DashboardPage from "../../pages/DashboardPage.component";
jest.mock("../../pages/DashboardPage.component");

describe("<DashboardPage />", () => {
    it("Renders <DashboardPage /> component correctly", () => {
      // shallow creates instance of a component
      expect(shallow(<DashboardPage />)).toMatchSnapshot();
    });
});
