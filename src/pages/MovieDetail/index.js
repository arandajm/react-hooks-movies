import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, CircularProgress, Typography } from "@material-ui/core";
import { searchMovieByIdRequest } from "../../redux/actions/search";
import {
  movieResult as movieResultSelector,
  movieResults
} from "../../redux/selectors/index";
import MovieResult from "../../components/MovieResult";

export default ({ match }) => {
  // use useDispatch()
  const dispatch = useDispatch();
  // use selector to get the data from the store, In this case, the movie that will be shown
  const movieResult = useSelector(state => movieResultSelector(state));
  useEffect(() => {
    // match is injected by react router
    const movieId = match.params.id;
    if (!movieResult) {
      dispatch(searchMovieByIdRequest({ movieId }));
    }
  });

  if (!movieResult) {
    return <CircularProgress size={100} color="primary" />;
  }
  return (
    <Container>
      <Typography variant="h3">{movieResult.Title}</Typography>
      <img src={movieResult.Poster} alt={movieResult.Title} />
      <Typography>
        <strong>Actores: </strong>
        {movieResult.Actors}
      </Typography>
      <Typography>
        <strong>Director: </strong>
        {movieResult.Director}
      </Typography>
      <Typography>
        <strong>Pais: </strong>
        {movieResult.Country}
      </Typography>
      <Typography>
        <strong>Clasificacion: </strong>
        {movieResult.Rated}
      </Typography>
      <Typography>
        <strong>Premios: </strong>
        {movieResult.Awards}
      </Typography>
      <Typography>
        <strong>Sinopsis: </strong>
        {movieResult.Plot}
      </Typography>
    </Container>
  );
};
