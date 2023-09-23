import React from "react";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const MovieItem = ({ item }) => {
  const [{ user }] = useStateValue();
  // const navigate = useNavigate();
  // console.log(item);
  // const handleMovie = () => {
  //   if (user) {
  //     navigate(`/movie/${item.slug}`);
  //   } else {
  //     navigate("/login");
  //   }
  // };
  return (
    <NavLink to={`/movie/${item.slug}`} className="movie-item">
      <img src={item.bannerImage} alt={item.title} />
    </NavLink>
  );
};

export default MovieItem;
