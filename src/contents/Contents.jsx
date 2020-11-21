import { Grid } from "@material-ui/core";
import React from "react";
import Cards from "./Card";
import Constant from "../constant/Constant";

const Contents = () => {
  const getCard = (cardDataObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <Cards {...cardDataObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={3}>
      {Constant.map((cardDataObj) => getCard(cardDataObj))}
    </Grid>
  );
};

export default Contents;
