const BASEURL = "http://localhost:8080/api";

export const register = async (userData, dispatch, navigate) => {
  // Make a POST request
  try {
    const res = await fetch(`${BASEURL}/user/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    dispatch({
      type: "SET_USER",
      user: data,
    });
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/");
  } catch (err) {
    console.log(err.message);
  }
};

export const login = async (userData, dispatch, navigate) => {
  // Make a POST request
  try {
    const res = await fetch(`${BASEURL}/user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    if (data.error) {
      alert(data.error);
    } else {
      dispatch({
        type: "SET_USER",
        user: data,
      });
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchmovies = async (dispatch, query) => {
  let querypoint;
  if (query) {
    querypoint = `?query=${query}`;
  } else {
    querypoint = "/";
  }
  // Make a GET request
  try {
    const res = await fetch(`${BASEURL}/movie${querypoint}`);
    const data = await res.json();
    if (query) {
      dispatch({
        type: "SET_SEARCHED_MOVIES",
        movies: data,
      });
    } else {
      console.log(data);
      dispatch({
        type: "SET_MOVIES",
        movies: data,
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchmovie = async (slug, setState) => {
  // Make a GET request
  try {
    const res = await fetch(`${BASEURL}/movie/${slug}`);
    const data = await res.json();
    if (data.message) {
      console.log(data.message);
    } else {
      setState(data);
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const postReview = async (movieId, reviews, setState) => {
  // Make a POST request

  try {
    const res = await fetch(`${BASEURL}/movie/review/${movieId}`, {
      method: "POST",
      body: JSON.stringify(reviews),
      // headers: {
      //   con
      // }
    });
    const data = await res.json();
    if (data.message) {
      console.log(data.message);
    } else {
      setState(data);
    }
  } catch (err) {
    console.log(err.message);
  }
};
