import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CssBaseline, Grid, Typography, Button } from "@material-ui/core";

import useStyles from "./CafeHomeStyles";
import { getAllCafes } from "../../../actions/cafe";
import CafeCards from './CafeCards';
import CafePopup from './CafePopup';
import Layout from "../Layout/Layout";

export default function CafeHome() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [currentCafeId, setCurrentCafeId] = useState(0);

  useEffect(() => {
    dispatch(getAllCafes());
  }, [dispatch]);

  const editInPopup = (cafeId) => {
    setCurrentCafeId(cafeId);
    setOpenPopup(true);
  };

  return (
    <>
      <CssBaseline />
      <Layout>
        <div className={classes.root}>
          <div className={classes.createButtonRow}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setOpenPopup(true);
              }}
            >
              Add new cafe
            </Button>
          </div>
          <Grid container alignItems="stretch" spacing={3}>
            <CafeCards editInPopup={editInPopup} />
          </Grid>
          <CafePopup
            currentCafeId={currentCafeId}
            setCurrentCafeId={setCurrentCafeId}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          />
        </div>
      </Layout>
    </>
  );
}
