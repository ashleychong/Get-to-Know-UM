import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { getLeisures } from "../../actions/leisure";
import LeisureCards from "./LeisureCards";
import useStyles from "./style";

export default function LeisureCategory() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getLeisures());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.firstRow}>
          <Typography className={classes.word} component="div">
            {history.location.pathname.includes("inUM")
              ? `Things to do in UM`
              : `Things to do near UM`}
          </Typography>
        </div>
        <LeisureCards />
      </div>
    </>
  );
}
