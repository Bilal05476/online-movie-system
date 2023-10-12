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
    <div className="toaster">
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
