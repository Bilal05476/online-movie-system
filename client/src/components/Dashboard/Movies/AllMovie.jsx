import React from "react";
import MovieItem from "../MovieItem";

const AllMovie = ({ movies }) => {
  return (
    <div className="movie-section" id="top">
      <h3>All Movies</h3>
      <div className="movie-container">
        {movies.map((item) => (
          <MovieItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllMovie;
