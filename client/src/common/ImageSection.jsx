import React from "react";
import { FormInput } from "./FormInput";

const ImageSection = ({ state, setState }) => {
  const { bannerImage, title } = state;
  return (
    <div
      className="d-flex flex-wrap justify-content-between mb-3"
      style={{
        border: "1px solid crimson",
        borderRadius: "5px",
        padding: "1rem",
      }}
    >
      <FormInput
        type="file"
        label="Banner Image"
        onChange={(e) =>
          setState({
            ...state,
            bannerImage: e.target.files[0],
          })
        }
      />
      <div className="movie-item">
        <img src={bannerImage} alt={title} />
      </div>
    </div>
  );
};

export default ImageSection;
