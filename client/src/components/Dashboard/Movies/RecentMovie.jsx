import React from "react";
import MovieItem from "../MovieItem";

const RecentMovie = ({ movies }) => {
  console.log(movies);
  return (
    <div className="movie-section">
      <h3>Watched History</h3>
      <div className="movie-container">
        {movies.map((item) => (
          <MovieItem item={item.movie} key={item.movie._id} />
        ))}
      </div>
    </div>
  );
};

export default RecentMovie;
