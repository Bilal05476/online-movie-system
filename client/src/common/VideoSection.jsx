import React from "react";
import { FormInput } from "./FormInput";

const VideoSection = ({ state, setState }) => {
  const { video, title } = state;
  return (
    <div
      className="d-flex flex-wrap justify-content-between mb-5"
      style={{
        border: "1px solid crimson",
        borderRadius: "5px",
        padding: "1rem",
      }}
    >
      <FormInput
        type="file"
        label="Movie Video"
        onChange={(e) =>
          setState({
            ...state,
            video: e.target.files[0],
          })
        }
      />

      <iframe
        className="video-canvas"
        src={video}
        alt={title}
        width="100%"
      ></iframe>
    </div>
  );
};

export default VideoSection;
