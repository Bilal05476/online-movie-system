import React from "react";

const FormInput = ({ type, id, label, value, onChange }) => {
  return (
    <div className="form-outline mb-4">
      <input
        type={type}
        id={id}
        className="form-control"
        value={value}
        onChange={onChange}
      />
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
