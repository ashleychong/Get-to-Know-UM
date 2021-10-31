import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CssBaseline, Grid, Typography } from "@material-ui/core";

import useStyles from "./CafeHomeStyles";
import CafeCard from "./Cafe";

export default function CafeHome() {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
      <>
        <CssBaseline />
        <div className={classes.root}>
          <Grid container alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <CafeCard
                imgSrc="https://source.unsplash.com/random"
                imgAlt="Food"
                title="Test"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus ipsum vehicula lacus laoreet, eu iaculis purus posuere. Maecenas eget."
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <CafeCard
                imgSrc="https://source.unsplash.com/random"
                imgAlt="Food"
                title="Test"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus ipsum vehicula lacus laoreet, eu iaculis purus posuere. Maecenas eget."
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <CafeCard
                imgSrc="https://source.unsplash.com/random"
                imgAlt="Food"
                title="Test"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus ipsum vehicula lacus laoreet, eu iaculis purus posuere. Maecenas eget."
              />
            </Grid>
          </Grid>
        </div>
      </>
    );
};
