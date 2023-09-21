import React from "react";

const ProfilePopOver = () => {
  return (
    <div
      style={{
        position: "absolute",
        right: 20,
        width: "10%",
        border: "2px solid #ccc",
        borderRadius: "5px",
      }}
      className="p-2 d-flex flex-column"
    >
      <span className="text-white">Account</span>
      <span className="text-white">Logout</span>
    </div>
  );
};

export default ProfilePopOver;
