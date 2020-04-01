import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@material-ui/core";
import queryString from "query-string";
import { searchMoviesRequest } from "../../redux/actions/search";

export default ({ location }) => {
  // use useDispatch()
  const dispatch = useDispatch();
  const movies = useSelector(state => {
    console.log(state);
  });

  useEffect(() => {
    // Extract the movie name from que query params (from location)
    const { movieName } = queryString.parse(location.search);
    // Dispatch the search movies action
    dispatch(searchMoviesRequest({ movieName }));
  });

  return (
    <Container>
      <Typography>Results!</Typography>
    </Container>
  );
};
