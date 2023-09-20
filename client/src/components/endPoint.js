const BASEURL = "http://localhost:8080/api";
export const register = async (userData) => {
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
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

export const login = async (userData) => {
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
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};
