import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";

const MovieResult = ({ title, poster, year, type, imdbID }) => {
  return (
    <Card>
      <Grid container>
        <Grid item>
          <img src={poster} alt={title} />
        </Grid>
        <Grid item>
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
