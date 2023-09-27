import React from "react";
import { NavLink } from "react-router-dom";

const NavBtn = ({ text, bgcolor, to }) => {
  return (
    <NavLink
      to={to}
      style={{ textDecoration: "none" }}
      className={`btn text-light btn-block w-100 mb-4 btns`}
    >
      {text}
    </NavLink>
  );
};

export default NavBtn;
