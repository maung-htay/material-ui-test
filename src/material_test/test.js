import React from "react";
import "./App.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  hello: {
    fontStyle: "oblique",
    color: "blue",
  },
  buttonStyle: {
    border: 0,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography className={classes.hello}>Hello</Typography>
      <Button
        className={classes.buttonStyle}
        color="primary"
        variant="outlined"
      >
        Butons{" "}
      </Button>
    </div>
  );
}

export default App;
