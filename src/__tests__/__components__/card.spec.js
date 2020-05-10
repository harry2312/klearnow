import React from "react";
import Card from "../../components/Card";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Card Component", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<Card />)).toMatchSnapshot();
  });
});
