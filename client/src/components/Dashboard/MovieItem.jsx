import React from "react";
import { NavLink } from "react-router-dom";

const MovieItem = ({ item }) => {
  return (
    <NavLink to={`/movie/${item.slug}`} className="movie-item">
      <img src={item.bannerImage} alt={item.title} />
    </NavLink>
  );
};

export default MovieItem;
