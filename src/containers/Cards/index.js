import React from "react";
import Card from "../../components/Card";

export default function Cards(props) {
  const { content, arrList, handleAddToContent } = props;
  return (
    <div className="main-content clearfix">
      <ul id="movies" className="movie-list">
        {arrList.map((item) => (
          <Card
            key={item.imdbID}
            item={item}
            onClick={handleAddToContent}
            selected={content.includes(item.imdbID)}
            {...props}
          />
        ))}
      </ul>
    </div>
  );
}
