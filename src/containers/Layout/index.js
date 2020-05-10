import React, { useState } from "react";
import Input from "../../components/Input";
import { searchMovie } from "../../actions";
import Pagination from "react-js-pagination";
import SearchBar from "../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory, Link } from "react-router-dom";

export default function Layout(props) {
  const history = useHistory();
  const dipatch = useDispatch();
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [year, setYear] = useState("");
  const [search, setSearch] = useState("");
  const info = useSelector((state) => state.search);
  const totalElements = info && info.data && info.data.totalResults;

  const keyDown = (e) => {
    if (e.keyCode == 13) {
      location.pathname !== "/" && history.push("/");
      searchMovie(dipatch, search, year);
    }
  };

  const handleSubmitYear = () => {
    searchMovie(dipatch, search, year);
  };

  const handlePageChange = (page) => {
    setPage(page);
    searchMovie(dipatch, search, year, page);
  };

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">
            <Link to="/">Movie Night Extravaganza</Link>
          </h1>
          <form className="search-form">
            <Input
              type="search"
              name="search"
              id="search"
              label="Search a title"
              value={search}
              onKeyDown={keyDown}
              placeholder="Search a Title..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <Input
              type="text"
              maxLength="4"
              name="year"
              id="year"
              placeholder="Year"
              label="Any Year"
              onChange={(e) => setYear(e.target.value)}
              onKeyDown={keyDown}
            />
            <SearchBar onClick={handleSubmitYear} />
          </form>
        </div>
      </div>
      {props.children}
      {totalElements && location.pathname === "/" && search && (
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={parseInt(totalElements)}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      )}
    </>
  );
}
