import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import New from "./New";
import Update from "./Update";
import { fetchmovie } from "../../endPoint";
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
      {params.slug ? (
        <Update state={state} setState={setState} />
      ) : (
        <New state={state} setState={setState} />
      )}
    </div>
  );
};

export default CreateMovie;
