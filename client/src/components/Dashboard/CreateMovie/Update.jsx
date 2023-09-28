import React, { useEffect, useState } from "react";
import { FormInput, FormTextArea } from "../../../common/FormInput";
import ImageSection from "../../../common/ImageSection";
import VideoSection from "../../../common/VideoSection";
import BtnBlock from "../../../common/BtnBlock";

const Update = ({ state, setState }) => {
  const { title, description, releaseDate, actors, bannerImage, video } = state;
  const [actor, setActor] = useState("");
  const handleUpdate = () => {
    const movie = {
      description,
      // convert date into ISO
      releaseDate: releaseDate.includes(":00.000Z")
        ? releaseDate
        : releaseDate + ":00.000Z",
      // convert actors string into list
      actors: typeof actors === "object" ? actors : actors?.split(", "),
      bannerImage,
      video,
    };
    console.log(movie);
  };

  useEffect(() => {
    if (actor.includes(", ")) {
      setState({
        ...state,
        actors: [...actors, actor.replace(",", "")],
      });
      setActor("");
    }
  }, [actor]);

  return (
    <div className="container-fluid movie-screen">
      <div className="container">
        <FormInput
          label="Title"
          value={title}
          readOnly={true}
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
          label={`Release Date: ${new Date(releaseDate).toLocaleString()}`}
          // value={releaseDate}
          type="dateTime-local"
          onChange={(e) =>
            setState({
              ...state,
              releaseDate: e.target.value,
            })
          }
        />

        <FormInput
          label="Actors (Separated by comma ,)"
          type="text"
          value={actor}
          onChange={(e) => setActor(e.target.value)}
        />
        <div className="d-flex flex-wrap align-items-center">
          {actors.map((item) => (
            <small
              className="text-light m-2 mt-0 p-2 px-3 rounded"
              style={{ background: "crimson" }}
              key={item}
              // onClick={() =>
              //   setState({
              //     ...state,
              //     actors: actors.filter((item, ind) => ind !== ind),
              //   })
              // }
            >
              {item}
            </small>
          ))}
        </div>

        <ImageSection state={state} setState={setState} />
        <VideoSection state={state} setState={setState} />
        <BtnBlock
          text="Update a movie"
          bgcolor="crimson"
          click={() => handleUpdate()}
        />
      </div>
    </div>
  );
};

export default Update;
