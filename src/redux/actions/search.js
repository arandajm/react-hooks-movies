import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIE_BY_ID_REQUEST
} from "../../consts/actionTypes";

// function that inicialize the action to get the movies
export const searchMoviesRequest = payload => ({
  type: SEARCH_MOVIES_REQUEST,
  payload
});

// function that inicialize the action to get a movie by id
export const searchMovieByIdRequest = payload => ({
  type: SEARCH_MOVIE_BY_ID_REQUEST,
  payload
});
