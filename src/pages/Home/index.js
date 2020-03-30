import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button
} from "@material-ui/core";

export default () => {
  const [searchText, setSearchText] = useState("");

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
    <Container>
      <Card>
        {/* This grid is similar to bootstrap col */}
        <Grid container>
          <Grid>
            <Typography>Bienvenido!!</Typography>
          </Grid>
          <Grid>
            <label>Icono</label>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}
        />
        <Grid>
          <Button variant="contained" onClick={handleClearTextClick}>
            Limpiar
          </Button>
          <Button
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
