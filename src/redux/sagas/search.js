// this effects are escentials in a saga
import { takeLatest } from "redux-saga/effects";
import { SEARCH_MOVIES_REQUEST } from "../../consts/actionTypes";

// Generator function with *
export function* searchMovies({ payload }) {
  try {
    console.log("Accion inicial llamada!", payload);
  } catch (error) {}
}

// allows to listen the search movies action
export default function* search() {
  yield takeLatest(SEARCH_MOVIES_REQUEST, searchMovies);
}
