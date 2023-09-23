import React from "react";
import MovieItem from "../MovieItem";

const SearchMovie = ({ movies, query }) => {
  return (
    <React.Fragment>
      {movies.length > 0 && (
        <div className="movie-section" id="search">
          <h3>Search for "{query}"</h3>
          <div className="movie-container">
            {movies.map((item) => (
              <MovieItem key={item._id} item={item} />
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchMovie;
