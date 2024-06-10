import { actionTypes } from "../action_types";

export const fetchMovies = (movies) => {
  console.log(movies);
  return {
    type: actionTypes.FETCHING_MOVIES,
    payload: movies,
  };
};

export const selectedMovies = (movie) => {
  // console.log(movie);
  return {
    type: actionTypes.SELECTED_MOVIE,
    payload: movie,
  };
};

export const removeSelectedMovies = (movie) => {
  // console.log(movie);
  return {
    type: actionTypes.DESELECT_MOVIES,
    payload: movie,
  };
};

export const popularMoviesFetch = (movies) => {
  // console.log(movies);
  return {
    type: actionTypes.POPULAR_MOVIES,
    payload: movies,
  };
};
    