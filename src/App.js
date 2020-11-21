import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./header/Header";
import Contents from "./contents/Contents";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header></Header>
      </Grid>
      <Grid item container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Contents />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Grid>
  );
}

export default App;
