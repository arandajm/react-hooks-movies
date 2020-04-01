import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@material-ui/core";
import queryString from "query-string";
import { searchMoviesRequest } from "../../redux/actions/search";
import { isSearchLoading, movieResults } from "../../redux/selectors/index";

export default ({ location }) => {
  // use useDispatch()
  const dispatch = useDispatch();
  // use movieResults selector to get the data in the state
  const movies = useSelector(state => {
    return movieResults(state);
  });

  useEffect(() => {
    // Extract the movie name from que query params (from location)
    const { movieName } = queryString.parse(location.search);
    // do dispatch only one time!
    if (movieName && !movies) {
      // Dispatch the search movies action
      dispatch(searchMoviesRequest({ movieName }));
    }
  });

  return (
    <Container>
      <Typography>Results!</Typography>
    </Container>
  );
};
