import React from "react";

const BtnBlock = ({ text, bgcolor, click }) => {
  return (
    <button
      type="submit"
      onClick={click}
      className={`btn text-light btn-block w-100 mb-4 btns`}
    >
      {text}
    </button>
  );
};

export default BtnBlock;
