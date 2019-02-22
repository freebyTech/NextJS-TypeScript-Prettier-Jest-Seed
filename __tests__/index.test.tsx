import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../pages/index";

describe("With Enzyme", () => {
  it('App shows "Hello Next.js"', () => {
    const app = shallow(<App />);

    expect(app.find("p").text()).toEqual("Hello Next.js");
  });
});

describe("With Snapshot Testing", () => {
  it('App shows "Hello Next.js"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
