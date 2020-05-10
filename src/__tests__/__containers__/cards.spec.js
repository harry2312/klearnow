import React from "react";
import Cards from "../../containers/Cards";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Cards Container", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<Cards />)).toMatchSnapshot();
  });
});
