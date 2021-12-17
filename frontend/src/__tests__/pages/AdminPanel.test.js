import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import AdminPanel from "../../pages/admin-panel/AdminPanel.component";

describe("<AdminPanel />", () => {
  it("Renders <AdminPanel /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<AdminPanel />)).toMatchSnapshot();
  });
});
