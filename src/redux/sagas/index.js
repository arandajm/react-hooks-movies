import { all } from "redux-saga/effects";
import searchSaga from "./search";

// execute all the watchers here
export default function* rootSaga() {
  yield all([searchSaga()]);
}
