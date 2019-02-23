import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../pages/about";

describe("With Enzyme", () => {
  it('App shows "About Next.js"', () => {
    const app = shallow(<App />);

    expect(app.find("p").text()).toEqual("About Next.js");
  });
});

describe("With Snapshot Testing", () => {
  it('App shows "About Next.js"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
