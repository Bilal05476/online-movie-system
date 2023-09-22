import React from "react";
import {
  BsChevronCompactDown,
  BsChevronCompactUp,
  BsSearch,
} from "react-icons/bs";
import { fetchmovies } from "../endPoint";
import { useStateValue } from "../../StateProvider";
const Header = ({
  user,
  profilePopover,
  setProfilePopover,
  query,
  setQuery,
}) => {
  const [{ searched }, dispatch] = useStateValue();
  console.log(searched);
  return (
    <div className="d-flex align-items-center header justify-content-between ">
      {/* Logo */}
      <img
        src="/assets/img/logo.jpg"
        alt="logo"
        style={{ width: "100px", height: "50px" }}
      />
      {/* Search bar and profile link */}
      <div className="d-flex align-items-center">
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
          <button className="btn text-light bg-danger">Sign In</button>
        )}
      </div>
    </div>
  );
};

export default Header;
