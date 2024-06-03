import { actionTypes } from "../../action/action_types";

const initialValue = {
  fetchingMovies: [
    {
      name:"anc",
    }
  ],
  selectmovie: {},
};

export const movieReducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCHING_MOVIES:
      return { ...state, fetchingMovies: payload };
      
    case actionTypes.SELECTED_MOVIE:
      return { ...state, selectmovie: payload };
      
    default:
      return state;
      
  }
};
