import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import styles from "./style";
import { MovieIcon } from "../../icons";

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");
  // create a constant to use styles
  const classes = styles();

  const handleSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  const handleClearTextClick = e => {
    // Call to setter function to clear the searchtext in the state
    setSearchText("");
  };

  const handleSearchTextClick = e => {
    // Call to history.push to change the route and add query parameter called movieName
    history.push(`/results?movieName=${searchText}`);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        {/* This grid is similar to bootstrap col */}
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}
          className={classes.textFieldSearch}
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleClearTextClick}>
            Limpiar
          </Button>
          <Button
            className={classes.searchButton}
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSearchTextClick}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
