import React from "react";
import MiniTab from "../../components/MiniTab";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("MiniTab Component", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<MiniTab />)).toMatchSnapshot();
  });
});
