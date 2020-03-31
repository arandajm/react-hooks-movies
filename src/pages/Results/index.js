import React from "react";
import { Container, Typography } from "@material-ui/core";
import queryString from "query-string";

export default ({ location }) => {
  // Extract the movie name from que query params (from location)
  const params = queryString.parse(location.search);
  console.log(params.movieName);
  return (
    <Container>
      <Typography>Results!</Typography>
    </Container>
  );
};
