// this effects are escentials in a saga
import { takeLatest, put, call } from "redux-saga/effects";
import { apiCall } from "../api";
import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  SEARCH_MOVIE_BY_ID_REQUEST,
  SEARCH_MOVIE_BY_ID_SUCCESS,
  SEARCH_MOVIE_BY_ID_ERROR
} from "../../consts/actionTypes";

// Generator function with *
export function* searchMovies({ payload }) {
  try {
    const resultsData = yield call(
      apiCall,
      `&s=${payload.movieName}`,
      null,
      null,
      "get"
    );
    // put effect => dispatch an action and the reducer catch it!
    yield put({ type: SEARCH_MOVIES_SUCCESS, resultsData });
  } catch (error) {
    yield put({ type: SEARCH_MOVIES_ERROR, error });
  }
}

// Generator function with *
export function* searchMovieById({ payload }) {
  try {
    const movie = yield call(
      apiCall,
      `&i=${payload.movieId}`,
      null,
      null,
      "get"
    );
    // put effect => dispatch an action and the reducer catch it!
    yield put({ type: SEARCH_MOVIE_BY_ID_SUCCESS, movie });
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_BY_ID_ERROR, error });
  }
}

// allows to listen the search movies action
export default function* search() {
  // watchers
  yield takeLatest(SEARCH_MOVIES_REQUEST, searchMovies);
  yield takeLatest(SEARCH_MOVIE_BY_ID_REQUEST, searchMovieById);
}
