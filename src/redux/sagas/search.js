// this effects are escentials in a saga
import { takeLatest, put, call } from "redux-saga/effects";
import { apiCall } from "../api";
import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR
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

// allows to listen the search movies action
export default function* search() {
  yield takeLatest(SEARCH_MOVIES_REQUEST, searchMovies);
}
