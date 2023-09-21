const BASEURL = "http://localhost:8080/api";
export const register = async (userData, dispatch) => {
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
  } catch (err) {
    console.log(err.message);
  }
};

export const login = async (userData, dispatch) => {
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
    dispatch({
      type: "SET_USER",
      user: data,
    });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (err) {
    console.log(err.message);
  }
};
