import React from "react";

export default function Card(props) {
  const {
    item,
    onClick,
    showAddTo,
    selected,
    watched,
    moveTOWatched,
    watchedContent,
    removeFromList,
  } = props;

  const removeButtom = (
    <button className="add-to-button" onClick={() => removeFromList(item)}>
      Remove
    </button>
  );

  return (
    <li>
      <div className="poster-wrap">
        {item.Poster == "N/A" ? (
          <i className="material-icons poster-placeholder">crop_original</i>
        ) : (
          <img className="movie-poster" src={item.Poster} />
        )}
        <div className="movie-buttons">
          {showAddTo &&
            (!selected ? (
              <button className="add-to-content" onClick={() => onClick(item)}>
                + Add To My Content
              </button>
            ) : (
              <button className="add-to-content success">
                Added To My Content
              </button>
            ))}
          <div className="add-to-group">
            {watched &&
              (!watchedContent.includes(item.imdbID) ? (
                <button
                  className="add-to-button"
                  onClick={() => moveTOWatched(item)}
                >
                  + Add To Watched
                </button>
              ) : (
                <button className="add-to-button success">Watched</button>
              ))}
            {watched && removeButtom}
          </div>
        </div>
      </div>
      <div className="movie-title">{item.Title}</div>
      <div className="movie-year">{item.Year}</div>
    </li>
  );
}
