import { actionTypes } from "../../action/action_types";

const initialValue = {
  fetchingMovies: [],
  selectmovie: {},
  popularMovies: [],
};

export const movieReducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCHING_MOVIES:
      return { ...state, fetchingMovies: payload };

    case actionTypes.SELECTED_MOVIE:
      return { ...state, selectmovie: payload };

    case actionTypes.POPULAR_MOVIES:
      return {...state,popularMovies:payload};
      
    default:
      return state;
  }
};
