import React from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

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

const useStyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("lg")]: {
      backgroundColor: "red",
    },
  },
}));

export default function App() {
  const classess = useStyles();

  return (
    <div>
      <Button className={classess.root} fullWidth>
        Hla Hla
      </Button>
      <p className={classess.textStyle}> Hla Hla</p>
    </div>
  );
}
