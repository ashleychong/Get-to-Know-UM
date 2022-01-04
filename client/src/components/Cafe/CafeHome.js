import React, { useState, useEffect } from "react";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";


import useStyles from "./CafeHomeStyles";
import Pagination from "./CafePagination";
import CafeCards from "./CafeCards";
import PageHeader from "../PageHeader";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CafeHome() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get("page") || 1;

  return (
    <>
      <CssBaseline />
      <PageHeader title="Cafes" />
      <div className={classes.root}>
        <Grid container alignItems="stretch" spacing={3}>
          <CafeCards />
        </Grid>
        <div className={classes.pagination}>
          <Pagination page={page} />
        </div>
      </div>
    </>
  );
}
