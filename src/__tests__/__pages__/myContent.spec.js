import React from "react";
import MyContent from "../../pages/MyContent";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("My Content Page", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<MyContent />)).toMatchSnapshot();
  });
});
