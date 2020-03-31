import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_ERROR,
  SEARCH_MOVIES_SUCCESS
} from "../../consts/actionTypes";

const initialSate = {};

export default function(state = initialSate, action) {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return { ...state };
    case SEARCH_MOVIES_SUCCESS:
      return { ...state };
    case SEARCH_MOVIES_ERROR:
      return { ...state };
    default:
      return state;
  }
}
