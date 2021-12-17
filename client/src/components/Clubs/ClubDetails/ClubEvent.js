import React, { useState } from "react";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { Card, Grid, Typography, CardContent } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

const ClubEvent = (event) => {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Grid className={classes.grid} container spacing={5}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Typography color="textSecondary" style={{ fontSize: "17px" }}>
              1
            </Typography>
          </CardContent>
          <div className={classes.desc}>
            <Typography variant="body1">{event}</Typography>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ClubEvent;
