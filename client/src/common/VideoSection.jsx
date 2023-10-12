import React from "react";
import FileBase from "react-file-base64";
import { FormInput } from "./FormInput";

const VideoSection = ({ state, setState }) => {
  const { video, title } = state;
  return (
    <div
      className="video d-flex flex-wrap align-items-center justify-content-between mb-3"
      style={{
        borderRadius: "5px",
        padding: "1rem",
        background: "rgba(255,255,255,0.5)",
        overflow: "hidden",
      }}
    >
      <div>
        <FormInput
          type="text"
          label="Paste embedded URL"
          value={video}
          onChange={(e) => setState({ ...state, video: e.target.value })}
        />

        <small className="mx-2">OR</small>
        <FileBase
          multiple={false}
          onDone={({ base64 }) => setState({ ...state, video: base64 })}
        />
      </div>

      {video && (
        <iframe
          className="video-canvas"
          src={video}
          alt={title}
          width="50%"
        ></iframe>
      )}
    </div>
  );
};

export default VideoSection;
