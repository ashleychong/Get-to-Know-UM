import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { CssBaseline, Grid, Typography, Button } from "@material-ui/core";

import { getAllFood } from "../../actions/food";
import FoodCards from "./FoodCards";
import useStyles from "./FoodStyles";
import NominateFoodPopup from './NominateFoodPopup';

export default function FoodHome() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.firstRow}>
          <Typography variant="h5" component="div">
            Vote for your favourite food
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setOpenPopup(true);
            }}
          >
            Nominate food
          </Button>
        </div>
        <FoodCards />
        <NominateFoodPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
      </div>
    </>
  );
}
