import React from "react";
import MovieItem from "./MovieItem";

const TopMovie = () => {
  return (
    <div className="movie-section">
      <h3>Top Rated Movies</h3>
      <div className="movie-container">
        {[...Array(10)].map((item) => (
          <MovieItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default TopMovie;
