import React from "react";
import Layout from "../../containers/Layout";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Layout Container", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<Layout />)).toMatchSnapshot();
  });
});
