import { get } from "lodash";
import {
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  SEARCH_MOVIES_REQUEST
} from "../../consts/actionTypes";

const initialSate = {};

export default function(state = initialSate, action) {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return { ...state };
      break;
    case SEARCH_MOVIES_SUCCESS:
      return { ...state };
      break;
    case SEARCH_MOVIES_ERROR:
      return { ...state };
      break;
    default:
      return state;
  }
}
