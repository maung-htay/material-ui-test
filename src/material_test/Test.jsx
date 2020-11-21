import React from "react";
import {
  Typography,
  makeStyle,
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const useStyle = makeStyles({});

const Test = () => {
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6"></Typography>
        muiBo hlahla
      </Toolbar>
    </AppBar>
  );
};
export default Test;
