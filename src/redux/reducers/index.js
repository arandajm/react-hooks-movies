import { combineReducers } from "redux";
import search from "./search";

const rootReducer = combineReducers({
  searchReducer: search
});

export default rootReducer;
