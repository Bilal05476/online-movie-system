import React from "react";

const BtnBlock = ({ text, bgcolor, click }) => {
  return (
    <button
      type="submit"
      onClick={click}
      className={`btn ${bgcolor} btn-block w-100 mb-4`}
    >
      {text}
    </button>
  );
};

export default BtnBlock;
