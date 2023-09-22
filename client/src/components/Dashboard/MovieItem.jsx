import React from "react";

const MovieItem = ({ item }) => {
  return (
    <div className="movie-item">
      <img src={item.bannerImage} alt={item.title} />
    </div>
  );
};

export default MovieItem;
