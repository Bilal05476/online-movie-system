import React, { useState } from "react";
import BtnBlock from "../../common/BtnBlock";
import { FormInput } from "../../common/FormInput";
import { login } from "../endPoint";

const SignIn = ({ comState, dispatch, navigate }) => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginState;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ email, password }, dispatch, navigate);
    } else {
      dispatch({
        type: "SET_TOASTER",
        toast: "Provide all fields",
      });
      setTimeout(() => {
        dispatch({
          type: "SET_TOASTER",
        });
      }, 2000);
    }
  };
  return (
    <div
      className={`tab-pane fade ${comState === "Login" && "show active"} `}
      id="pills-login"
      role="tabpanel"
      aria-labelledby="tab-login"
    >
      <form>
        {/* Email input */}
        <FormInput
          label="Email Address"
          type="email"
          id="loginName"
          value={email}
          onChange={(e) =>
            setLoginState({
              ...loginState,
              email: e.target.value,
            })
          }
        />

        {/* Password input */}
        <FormInput
          label="Password"
          type="password"
          id="loginPassword"
          value={password}
          onChange={(e) =>
            setLoginState({
              ...loginState,
              password: e.target.value,
            })
          }
        />

        {/* Submit button */}
        <BtnBlock text="Sign In" bgcolor="crimson" click={handleSubmit} />
      </form>
    </div>
  );
};

export default SignIn;
