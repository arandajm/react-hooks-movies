import { SEARCH_MOVIES_REQUEST } from "../../consts/actionTypes";

// function that inicialize the action to get de movies
export const searchMovies = payload => ({
  type: SEARCH_MOVIES_REQUEST,
  payload
});
