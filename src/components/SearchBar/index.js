import React from "react";

export default function SearchBar(props) {
  return (
    <button
      type="button"
      id="submit"
      className="search-button"
      onClick={props.onClick}
    >
      <i className="material-icons icn-search">search</i>
    </button>
  );
}
