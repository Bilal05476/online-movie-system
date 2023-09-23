import React, { useState } from "react";
import FormInput from "../../common/FormInput";
import BtnBlock from "../../common/BtnBlock";
import { register } from "../endPoint";

const SignUp = ({ comState, dispatch, navigate }) => {
  const [registerState, setRegisterState] = useState({
    fullname: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const { fullname, email, password, cPassword } = registerState;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && fullname) {
      if (password === cPassword && password.length >= 8) {
        register({ email, password, name: fullname }, dispatch, navigate);
      } else {
        if (password.length < 8) {
          alert("Passwords should be min 8 charcter long");
        } else {
          alert("Passwords should be same");
        }
      }
    } else {
      alert("Provide all fields");
    }
  };
  return (
    <div
      className={`tab-pane fade ${comState === "Register" && "show active"} `}
      id="pills-register"
      role="tabpanel"
      aria-labelledby="tab-register"
    >
      <form>
        {/* Name input */}
        <FormInput
          label="Full name"
          type="text"
          id="registerName"
          value={fullname}
          onChange={(e) =>
            setRegisterState({
              ...registerState,
              fullname: e.target.value,
            })
          }
        />
        {/* Email input */}
        <FormInput
          label="Email"
          type="email"
          id="registerEmail"
          value={email}
          onChange={(e) =>
            setRegisterState({
              ...registerState,
              email: e.target.value,
            })
          }
        />

        {/* Password input */}
        <FormInput
          label="Password"
          type="password"
          id="registerPassword"
          value={password}
          onChange={(e) =>
            setRegisterState({
              ...registerState,
              password: e.target.value,
            })
          }
        />

        {/* Repeat Password input */}
        <FormInput
          label="Repeat password"
          type="password"
          id="registerRepeatPassword"
          value={cPassword}
          onChange={(e) =>
            setRegisterState({
              ...registerState,
              cPassword: e.target.value,
            })
          }
        />

        {/* Submit button */}
        <BtnBlock text="Sign Up" bgcolor="crimson" click={handleSubmit} />
      </form>
    </div>
  );
};

export default SignUp;
