import React from "react";
import {
  BsChevronCompactDown,
  BsChevronCompactUp,
  BsSearch,
} from "react-icons/bs";
import { fetchmovies } from "./endPoint";
import { useStateValue } from "../StateProvider";
import { NavLink, useLocation } from "react-router-dom";
const Header = ({
  user,
  profilePopover,
  setProfilePopover,
  query,
  setQuery,
}) => {
  const [{ searched }, dispatch] = useStateValue();
  const location = useLocation();
  // console.log(searched);
  return (
    <div className="d-flex align-items-center header justify-content-between ">
      {/* Logo */}
      <NavLink to="/">
        <img
          src="/assets/img/movie.png"
          alt="logo"
          style={{ width: "100px", height: "100px", position: "absolute" }}
        />
      </NavLink>
      {/* Search bar and profile link */}
      <div className="d-flex align-items-center">
        {location.pathname === "/" && (
          <div className="text-light mx-5 d-flex align-items-center justify-content-end">
            <input
              className="search mx-3 bg-transparent text-light"
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <BsSearch onClick={() => fetchmovies(dispatch, query)} size={20} />
          </div>
        )}
        {user ? (
          <span
            onClick={() => setProfilePopover(!profilePopover)}
            className="text-light d-flex align-items-center"
          >
            {user.name}
            {profilePopover ? (
              <BsChevronCompactUp size={20} className="mx-2" />
            ) : (
              <BsChevronCompactDown size={20} className="mx-2" />
            )}
          </span>
        ) : (
          <NavLink to="/auth" className="btn text-light bg-danger">
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
