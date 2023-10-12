export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  movies: [],
  searched: [],
  toaster: null,
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
    case "SET_TOASTER":
      if (state.toaster) {
        return {
          ...state,
          toaster: null,
        };
      } else {
        return {
          ...state,
          toaster: action.toast,
        };
      }

    default:
      return state;
  }
};

export default reducer;
