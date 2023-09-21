import React from "react";
import MovieItem from "./MovieItem";

const SearchMovie = () => {
  return (
    <div className="movie-section" id="search">
      <h3>Search for "Hello World"</h3>
      <div className="movie-container">
        {[...Array(10)].map((item) => (
          <MovieItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;
