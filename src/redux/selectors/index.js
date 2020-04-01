// return null instead of undefined
import { get } from "lodash";
// is equals to do state.search.isLoading
export const isSearchLoading = state => get(state, "searchReducer.isLoading");
export const movieResults = state =>
  get(state, "searchReducer.movieResults.Search");
