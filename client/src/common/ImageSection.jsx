import React from "react";
import FileBase from "react-file-base64";

const ImageSection = ({ state, setState }) => {
  const { bannerImage, title } = state;
  return (
    <div
      className="d-flex flex-wrap align-items-center justify-content-between mb-3"
      style={{
        borderRadius: "5px",
        padding: "1rem",
        background: "rgba(255,255,255,0.5)",
      }}
    >
      <FileBase
        multiple={false}
        onDone={({ base64 }) => setState({ ...state, bannerImage: base64 })}
      />
      {bannerImage && (
        <div className="movie-item">
          <img src={bannerImage} alt={title} />
        </div>
      )}
    </div>
  );
};

export default ImageSection;
