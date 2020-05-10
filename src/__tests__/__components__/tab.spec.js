import React from "react";
import Tab from "../../components/Tab";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Tab Component", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<Tab />)).toMatchSnapshot();
  });
});
