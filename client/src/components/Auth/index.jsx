import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PillsItem from "../../common/PillsItem";
import { useStateValue } from "../../StateProvider";

const Auth = () => {
  const [comState, setComState] = useState("Login");
  const [{}, dispatch] = useStateValue();

  return (
    <div className="container-fluid">
      <div className="container p-5 auth">
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
            <SignIn comState={comState} dispatch={dispatch} />
          )}
          {comState === "Register" && (
            <SignUp comState={comState} dispatch={dispatch} />
          )}
        </div>
        {/* Pills content */}
      </div>
    </div>
  );
};

export default Auth;
