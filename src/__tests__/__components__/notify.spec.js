import React from "react";
import Notify from "../../components/Notify";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Notify Component", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<Notify />)).toMatchSnapshot();
  });
});
