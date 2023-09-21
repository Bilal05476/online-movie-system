export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  toggleTheme: JSON.parse(localStorage.getItem("theme")) || false,
  // postLike: 0,
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
    case "DARK_THEME":
      return {
        ...state,
        toggleTheme: !state.toggleTheme,
      };

    default:
      return state;
  }
};

export default reducer;
