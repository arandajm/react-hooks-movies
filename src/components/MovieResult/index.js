import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import styles from "./style";

const MovieResult = ({ title, poster, year, type, imdbID }) => {
  // create a constant to use styles
  const classes = styles();

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
          <Button color="primary" variant="contained">
            Ver mas
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MovieResult;
