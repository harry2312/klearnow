import React, { useState } from "react";
import Tab from "../../components/Tab";
import MiniTab from "../../components/MiniTab";
import { useSelector, useDispatch } from "react-redux";
import { addToWatched, removeFromMyContent } from "../../actions";
import Cards from "../../containers/Cards";

const MyContent = () => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const contentList = useSelector((state) => state.content);
  const watchedList = useSelector((state) => state.watched);

  const handleWatched = (item) => addToWatched(dispatch, item);

  const handleRemoveFromList = (item) => removeFromMyContent(dispatch, item);

  return (
    <>
      <Tab />
      <MiniTab active={active} setActive={setActive} />
      {active ? (
        <Cards
          arrList={watchedList}
          content={watchedList.map((v) => v.imdbID) || []}
        />
      ) : (
        <Cards
          arrList={contentList && contentList.myList}
          content={contentList.myList.map((v) => v.imdbID) || []}
          moveTOWatched={handleWatched}
          watchedContent={watchedList.map((v) => v.imdbID) || []}
          removeFromList={handleRemoveFromList}
          watched
        />
      )}
    </>
  );
};
export default MyContent;
