import React from "react";
import {
  BsChevronCompactDown,
  BsChevronCompactUp,
  BsSearch,
} from "react-icons/bs";
import { fetchmovies } from "./endPoint";
import { useStateValue } from "../StateProvider";
import { NavLink, useLocation } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
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
        <img src="/assets/img/movie.png" alt="logo" className="logo" />
      </NavLink>
      {/* Search bar and profile link */}
      <div className="d-flex align-items-center ">
        {location.pathname === "/" && (
          <div className="d-none d-md-block text-light  d-flex align-items-center justify-content-center">
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
          <NavLink to="/auth" className="btn btns text-light">
            <BiLogInCircle size={22} className="mx-1" />
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
