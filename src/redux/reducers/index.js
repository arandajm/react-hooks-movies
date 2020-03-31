import { combineReducers } from "redux";
import demoReducer from "./demoReducer";
import searchReducer from "./search";

const rootReducer = combineReducers({
  demoReducer,
  searchReducer
});

export default rootReducer;
