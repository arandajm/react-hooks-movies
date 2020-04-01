import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import styles from "./style";

const MovieResult = ({ title, poster, year, type, imdbID, history }) => {
  // create a constant to use styles
  const classes = styles();
  const handleViewMoreClick = () => {
    history.push(`/movie/${imdbID}`);
  };

  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={poster} alt={title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titlesContainer}>
          <Typography>{title}</Typography>
          <Typography>{year}</Typography>
          <Typography>{type}</Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={handleViewMoreClick}
          >
            Ver mas
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

// Wrap the component with withRouter (high order component!) who allow to use history!
export default withRouter(MovieResult);
