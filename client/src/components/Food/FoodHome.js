import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CssBaseline, Grid, Typography, Button } from "@material-ui/core";

import { getAllFood } from "../../actions/food";
import { getFoodNominations } from "../../actions/foodNominations";
import FoodCards from "./FoodCards";
import useStyles from "./FoodHomeStyles";
import NominateFoodPopup from "./NominateFoodPopup";
import Custom from "../Custom/Custom";

export default function FoodHome() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    dispatch(getFoodNominations());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container className={classes.firstRow}>
          <Grid>
            <Typography variant="h5">Vote for your favourite food</Typography>
          </Grid>
          <Grid item className={classes.button}>
            <Custom.Button
              style={{ margin: "2.3em 0.3em 1.7em 0" }}
              text="Nominate food"
              variant="contained"
              color="primary"
              onClick={() => {
                setOpenPopup(true);
              }}
            />
          </Grid>
        </Grid>
        <FoodCards />
        <NominateFoodPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
      </div>
    </>
  );
}
