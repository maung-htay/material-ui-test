import React, { useState } from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Grid, Button, Paper, Typography } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "red",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "blue",
    },                
  },
  textStyle: {
    color: "green",
  },
}));

export default function App() {
  const classess = useStyles();
  const [darkMode, setdardMode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      primary: green,
      secondary: green,
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div>
        {/* <Button variant="contained" className={classess.root}>
          Hla Hla
        </Button>
        <br /> <br />
        <Button
          variant="outlined"
          onClick={() => {
            alert("Hellos");
          }}
        >
          Outlin
        </Button>
        <p className={classess.textStyle}> Hla Hla</p> */}
        <div>
          <Paper style={{ height: "100vh" }}>
            <Grid container direction="column">
              <Typography variant="h2">This is my App</Typography>
              <Button variant="contained" color="primary">
                Button Primary
              </Button>
              <Button variant="outlined" color="secondary">
                Button Secondary
              </Button>
            </Grid>
             

            <Switch
              checked={darkMode}
              onChange={() => setdardMode(!darkMode)}
            ></Switch>
          </Paper>
        </div>
      </div>
    </ThemeProvider>
  );
}
