import React from "react";
import { FormInput, FormTextArea } from "../../../common/FormInput";
import ImageSection from "../../../common/ImageSection";
import VideoSection from "../../../common/VideoSection";
import BtnBlock from "../../../common/BtnBlock";

const New = ({ state, setState }) => {
  const { title, description, releaseDate, actors, bannerImage, video } = state;
  const handleCreate = () => {
    const movie = {
      title,
      description,
      // convert date into ISO
      releaseDate: releaseDate + ":00.000Z",
      // convert actors string into list
      actors: actors?.split(", "),
      bannerImage,
      video,
    };
    console.log(movie);
  };
  return (
    <div className="container-fluid movie-screen">
      <div className="container">
        <FormInput
          label="Title"
          value={title}
          onChange={(e) =>
            setState({
              ...state,
              title: e.target.value,
            })
          }
        />
        <FormTextArea
          label="Description"
          rows={3}
          value={description}
          onChange={(e) =>
            setState({
              ...state,
              description: e.target.value,
            })
          }
        />
        <FormInput
          label="Release Date"
          value={releaseDate}
          type="dateTime-local"
          onChange={(e) =>
            setState({
              ...state,
              releaseDate: e.target.value,
            })
          }
        />

        <FormInput
          label="Actors (Separated by comma+space , )"
          type="text"
          onChange={(e) =>
            setState({
              ...state,
              actors: e.target.value,
            })
          }
        />

        <ImageSection state={state} setState={setState} />
        <VideoSection state={state} setState={setState} />

        <BtnBlock
          text="Create a movie"
          bgcolor="crimson"
          click={() => handleCreate()}
        />
      </div>
    </div>
  );
};

export default New;
