import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CssBaseline, Grid, Typography } from "@material-ui/core";

import useStyles from "./CafeHomeStyles";
import CafeCards from "./CafeCards";
import { getAllCafes } from "./../../actions/cafe";
import { getCafeReviews } from './../../actions/cafeReviews';

export default function CafeHome() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCafes());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container alignItems="stretch" spacing={3}>
          <CafeCards />
        </Grid>
      </div>
    </>
  );
}
