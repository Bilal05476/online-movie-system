export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  movies: [],
  searched: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    case "SET_MOVIES":
      return {
        ...state,
        movies: action.movies,
      };
    case "SET_SEARCHED_MOVIES":
      return {
        ...state,
        searched: action.movies,
      };

    default:
      return state;
  }
};

export default reducer;
