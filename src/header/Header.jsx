import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => ({
  toolBarStyle: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.toolBarStyle}>Maung Htay</Typography>
        <AcUnitIcon></AcUnitIcon>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
