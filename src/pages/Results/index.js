import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, CircularProgress } from "@material-ui/core";
import queryString from "query-string";
import { searchMoviesRequest } from "../../redux/actions/search";
import { isSearchLoading, movieResults } from "../../redux/selectors/index";
import MovieResult from "../../components/MovieResult/index";

export default ({ location }) => {
  // use useDispatch()
  const dispatch = useDispatch();
  // use movieResults selectors (movieResults and isSearchLoading) to get the data from the store
  const movies = useSelector(state => movieResults(state));
  const isLoading = useSelector(state => isSearchLoading(state));

  useEffect(() => {
    // Extract the movie name from que query params (from location)
    const { movieName } = queryString.parse(location.search);
    // do dispatch only one time!
    if (movieName && !movies) {
      // Dispatch the search movies action
      dispatch(searchMoviesRequest({ movieName }));
    }
  });

  const renderMovies = () => {
    if (movies) {
      return movies.map((movie, i) => {
        return (
          // if the name of props of the component will be the same, we would use {...movie} to copy the props and use them!
          <MovieResult
            key={i}
            poster={movie.Poster}
            type={movie.Type}
            year={movie.Year}
            title={movie.Title}
            imdbID={movie.imdbID}
          />
        );
      });
    } else if (isLoading) {
      return <CircularProgress size={100} color="primary" />;
    }
    return <div />;
  };

  return <Container>{renderMovies()}</Container>;
};
