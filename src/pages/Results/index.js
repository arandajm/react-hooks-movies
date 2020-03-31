import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Typography } from "@material-ui/core";
import queryString from "query-string";
import { searchMoviesRequest } from "../../redux/actions/search";

export default ({ location }) => {
  // use useDispatch()
  const dispatch = useDispatch();

  useEffect(() => {
    // Extract the movie name from que query params (from location)
    const { movieName } = queryString.parse(location.search);
    // Dispatch the search movies action
    console.log(movieName);
    dispatch(searchMoviesRequest());
  });

  return (
    <Container>
      <Typography>Results!</Typography>
    </Container>
  );
};
