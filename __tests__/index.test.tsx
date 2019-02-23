import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../pages/index";

describe("With Enzyme", () => {
  it('App shows "My Blog"', () => {
    const app = shallow(<App />);

    expect(app.find("h1").text()).toEqual("My Blog");
  });
});

describe("With Snapshot Testing", () => {
  it('App shows "My Blog"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
