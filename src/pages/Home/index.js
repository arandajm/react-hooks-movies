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

export default () => {
  const [searchText, setSearchText] = useState("");
  // create a constant to use styles
  const classes = styles();

  const handleSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  const handleClearTextClick = e => {
    console.log("handleClearTextClick", e);
  };
  const handleSearchTextClick = e => {
    console.log("handleSearchTextClick", e);
  };

  console.log(searchText);
  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        {/* This grid is similar to bootstrap col */}
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!!</Typography>
          </Grid>
          <Grid>
            <label>Icono</label>
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
