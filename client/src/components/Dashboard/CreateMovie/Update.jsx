import React from "react";
import { FormInput, FormTextArea } from "../../../common/FormInput";

const Update = ({ state }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <FormInput value={state.title} readOnly={true} />
        <FormTextArea rows={3} value={state.description} />
        <FormInput type="file" />
      </div>
    </div>
  );
};

export default Update;
