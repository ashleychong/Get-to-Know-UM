import React, { useState } from "react";
import {
  useTheme,
  useMediaQuery,
  Avatar,
  Typography,
  Grid,
  Box,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Rating } from "@material-ui/lab";

import useStyles from "./ReviewStyles";

const Review = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.reviewRoot}>
        <Grid item xs={12} md={2}>
          <Box className={classes.userInfo}>
            <Avatar
              className={classes.userAvatar}
              src="https://source.unsplash.com/random"
            ></Avatar>
            <Typography variant="subtitle1">Username</Typography>
          </Box>
        </Grid>
        <Grid container xs={12} md={10}>
          <Grid item xs={12} md={11}>
            <Box className={classes.ratingBox}>
              <Rating value="4.0" precision="0.5" readOnly />
              <Typography variant="subtitle2" className={classes.reviewDate}>
                Reviewed 18 October 2020
              </Typography>
            </Box>
            <Typography variant="h6">Dishes really amazing</Typography>
            <Typography variant="subtitle1" className={classes.reviewDesc}>
              It is excellent. my first dating was there and we spent a very
              good time together. the food was awesome and the staff was really
              nice. Fabulous food, impeccable service. What a experience ! Had a
              wonderful table overviewing. The quality and presentation of the
              food was amazing .
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.actions}>
              <IconButton aria-label="edit" className={classes.iconButton}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" className={classes.iconButton}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Review;
