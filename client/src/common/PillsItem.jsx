import React from "react";

const PillsItem = ({ item, state, setState }) => {
  return (
    <li className="nav-item" role="presentation">
      <a
        className={`nav-link ${item === state && "active"}`}
        style={{ cursor: "pointer" }}
        data-mdb-toggle="pill"
        onClick={() => {
          if (state === "Register") {
            setState("Login");
          } else {
            setState("Register");
          }
        }}
        role="tab"
        aria-controls="pills-login"
        aria-selected="true"
      >
        {item}
      </a>
    </li>
  );
};

export default PillsItem;
