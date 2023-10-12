import React from "react";
import { useStateValue } from "../../StateProvider";

const ProfilePopOver = ({ setProfilePopover }) => {
  const [{}, dispatch] = useStateValue();
  return (
    <div
      style={{
        position: "absolute",
        right: 20,
        width: "30%",
        border: "2px solid #ccc",
        borderRadius: "5px",
        textAlign: "center",
      }}
      className="p-2 d-flex flex-column"
    >
      {/* <span className="text-white">Account</span> */}
      <span
        className="text-white"
        onClick={() => {
          setProfilePopover(false);
          dispatch({
            type: "LOGOUT",
          });
          localStorage.clear();
        }}
      >
        Logout
      </span>
    </div>
  );
};

export default ProfilePopOver;
