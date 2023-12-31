import React, { useEffect, useState } from "react";
import { FormInput, FormTextArea } from "../../../common/FormInput";
import ImageSection from "../../../common/ImageSection";
import VideoSection from "../../../common/VideoSection";
import BtnBlock from "../../../common/BtnBlock";
import { addMovie, updateMovie } from "../../endPoint";
import { useNavigate } from "react-router-dom";

const MovieForm = ({ state, setState, action }) => {
  const { title, description, releaseDate, actors, bannerImage, video, _id } =
    state;
  console.log(state);
  const [actor, setActor] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const movie = {
      title,
      description,
      // convert date into ISO
      releaseDate: releaseDate.includes(":00.000Z")
        ? releaseDate
        : releaseDate + ":00.000Z",
      actors,
      bannerImage,
      video,
    };
    if (action === "Update") updateMovie(movie, _id, navigate);
    if (action === "Create") {
      if (
        title &&
        description &&
        releaseDate &&
        actors &&
        bannerImage &&
        video
      ) {
        addMovie(movie, setState, navigate);
      } else {
        dispatch({
          type: "SET_TOASTER",
          toast: "Provide all fields to add movie!",
        });
        setTimeout(() => {
          dispatch({
            type: "SET_TOASTER",
          });
        }, 2000);
      }
    }
  };

  useEffect(() => {
    if (actor.includes(", ")) {
      setState({
        ...state,
        actors: [...actors, actor.replace(", ", "")],
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
          readOnly={action === "Update"}
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
          label="Actors (Separated by comma+space , )"
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
          text={`${action} a movie`}
          bgcolor="crimson"
          click={() => handleSubmit()}
        />
      </div>
    </div>
  );
};

export default MovieForm;
