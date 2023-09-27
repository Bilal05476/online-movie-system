import React from "react";

const FormInput = ({ type, id, label, value, onChange, readOnly }) => {
  return (
    <div className="form-outline mb-4">
      <input
        type={type}
        id={id}
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={label}
        readOnly={readOnly && true}
      />
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

const FormTextArea = ({ id, label, value, onChange, rows }) => {
  return (
    <div className="form-outline mb-4">
      <textarea
        type="text"
        id={id}
        className="form-control"
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={label}
      />
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
export { FormInput, FormTextArea };
