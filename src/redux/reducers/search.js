import {
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIE_BY_ID_REQUEST,
  SEARCH_MOVIE_BY_ID_SUCCESS,
  SEARCH_MOVIE_BY_ID_ERROR
} from "../../consts/actionTypes";

const initialSate = {};

export default function(state = initialSate, action) {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return { ...state, isLoading: true };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movieResults: action.resultsData.data
      };
    case SEARCH_MOVIES_ERROR:
      return { ...state, isLoading: false, movieResults: null };
    case SEARCH_MOVIE_BY_ID_REQUEST:
      return { ...state, isLoading: true, movieResult: null };
    case SEARCH_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movieResult: action.movie.data
      };
    case SEARCH_MOVIE_BY_ID_ERROR:
      return { ...state, isLoading: false, movieResult: null };
    default:
      return state;
  }
}
