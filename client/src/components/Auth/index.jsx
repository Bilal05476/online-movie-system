import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PillsItem from "../../common/PillsItem";
import { useStateValue } from "../../StateProvider";
import { NavLink, useNavigate } from "react-router-dom";

const Auth = () => {
  const [comState, setComState] = useState("Login");
  const [{ toaster }, dispatch] = useStateValue();
  console.log(toaster);
  const navigate = useNavigate();

  return (
    <div className="container-fluid auth">
      <div className="container p-5">
        <div
          className={`d-flex align-items-center justify-content-${
            comState === "Login" ? "start" : "end"
          } mb-5`}
        >
          <img
            src="/assets/img/movie.png"
            style={{
              width: "30%",
            }}
          />
        </div>
        {/* Pills navs */}
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          {["Login", "Register"].map((item) => (
            <PillsItem
              key={item}
              item={item}
              state={comState}
              setState={setComState}
            />
          ))}
        </ul>
        {/* Pills navs */}

        {/* Pills content */}
        <div className="tab-content">
          {comState === "Login" && (
            <SignIn
              comState={comState}
              dispatch={dispatch}
              navigate={navigate}
            />
          )}
          {comState === "Register" && (
            <SignUp
              comState={comState}
              dispatch={dispatch}
              navigate={navigate}
            />
          )}
        </div>
        {/* Pills content */}
        <NavLink
          to="/"
          className="btn btn-block text-light w-100 bg-transparent"
          style={{
            textDecoration: "none",
            border: "2px solid crimson",
          }}
        >
          Explore
        </NavLink>
      </div>
    </div>
  );
};

export default Auth;
