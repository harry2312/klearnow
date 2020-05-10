import React from "react";
import Cards from "../../containers/Cards";
import { addToMyContent } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import Tab from "../../components/Tab";
import Notify from "../../components/Notify";

export default function Home() {
  const dipatch = useDispatch();
  const info = useSelector((state) => ({
    dataList: state.search,
    content: state.content.myList.map((v) => v.imdbID),
  }));

  const arrList =
    (info &&
      info.dataList &&
      info.dataList.data &&
      info.dataList.data.Search &&
      info.dataList.data.Search) ||
    [];

  const message = (info && info.dataList && info.dataList.message) || "";

  const handleAddToContent = (item) => {
    addToMyContent(dipatch, item);
  };

  const movies = arrList.filter((v) => v.Type === "movie");
  const series = arrList.filter((v) => v.Type === "series");

  return (
    <>
      {message && <Notify message={message} />}
      <Tab />
      {movies && movies.length > 0 && (
        <>
          <h3 className="center">Movies ({movies.length})</h3>
          <Cards
            showAddTo
            arrList={movies}
            content={info.content}
            handleAddToContent={handleAddToContent}
          />
        </>
      )}
      {series && series.length > 0 && (
        <>
          <h3 className="center">Series ({series.length})</h3>
          <Cards
            showAddTo
            arrList={series}
            content={info.content}
            handleAddToContent={handleAddToContent}
          />
        </>
      )}
    </>
  );
}
