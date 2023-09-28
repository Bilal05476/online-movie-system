import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchmovie } from "../../endPoint";
import MovieForm from "./MovieForm";
const CreateMovie = () => {
  const params = useParams();
  const [state, setState] = useState({
    title: "",
    description: "",
    releaseDate: "",
    bannerImage: "",
    actors: [],
    video: "",
  });

  useEffect(() => {
    if (params.slug) fetchmovie(params.slug, setState);
  }, []);
  return (
    <div>
      <MovieForm
        state={state}
        setState={setState}
        action={params.slug ? "Update" : "Create"}
      />
    </div>
  );
};

export default CreateMovie;
