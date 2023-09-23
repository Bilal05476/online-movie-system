import React from "react";
import MovieItem from "../MovieItem";

const TopMovie = ({ movies }) => {
  return (
    <div className="movie-section" id="top">
      <h3>Top Rated Movies</h3>
      {movies.length > 0 && (
        <div className="movie-container">
          {movies.map((item) => (
            <MovieItem key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopMovie;
