// this effects are escentials in a saga
import { put, call, takeLatest } from "redux-saga/effects";
import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_ERROR,
  SEARCH_MOVIES_SUCCESS
} from "../../consts/actionTypes";

// Generator function with *
export function* searchMovies({ payload }) {
  try {
  } catch (error) {}
}

export default function* search() {
  yield takeLatest(SEARCH_MOVIES_REQUEST, searchMovies);
}
