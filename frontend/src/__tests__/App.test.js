import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import "../setupTests";
import HomePage from "../pages/HomePage.component";
jest.mock("../pages/HomePage.component.jsx");
jest.mock("../components/NotFound.component.jsx");

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<App />)).toMatchSnapshot();
  });

  // it("Invalid path should redirect to 404 - Not found", () => {
  //   const wrapper1 = mount(
  //       <MemoryRouter initialEntries={["/esxrdcfvgbhnj"]}>
  //         <App />
  //       </MemoryRouter>
  //   );
  //   expect(wrapper1.find(HomePage)).toHaveLength(0);
  //   expect(wrapper1.find(NotFound)).toHaveLength(1);
  // });
});

describe("<HomePage />", () => {
  it("Renders <HomePage /> component correctly", () => {
    // shallow creates instance of a component
    expect(shallow(<HomePage />)).toMatchSnapshot();
  });
});
