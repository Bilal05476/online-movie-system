import React, { useEffect } from "react";
import { SlClose } from "react-icons/sl";
import { useStateValue } from "../StateProvider";

const Toast = () => {
  const [{ toaster }, dispatch] = useStateValue();
  useEffect(() => {
    setTimeout(() => {
      if (toaster) {
        dispatch({
          type: "NULL_TOASTER",
        });
      }
    }, 2500);
  }, [toaster]);
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "crimson",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        bottom: 30,
        right: 30,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        paddingRight: "0.5rem",
        maxWidth: "30%",
      }}
    >
      {toaster}{" "}
      <SlClose
        size={22}
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch({
            type: "NULL_TOASTER",
          });
        }}
        className="mx-2"
      />
    </div>
  );
};

export default Toast;
