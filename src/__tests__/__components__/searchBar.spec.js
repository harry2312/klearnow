import React from "react";
import SearchBar from "../../components/SearchBar";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("SearchBar Component", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<SearchBar />)).toMatchSnapshot();
  });
});
