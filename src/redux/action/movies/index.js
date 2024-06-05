import { actionTypes } from "../action_types";

export const fetchMovies = (movies) => {
  console.log(movies);
  return {
    type: actionTypes.FETCHING_MOVIES,
    payload: movies,
  };
};

export const selectedMovies = (movie) => {
  return {
    type: actionTypes.SELECTED_MOVIE,
    payload: movie,
  };
};
    