import React from "react";
import { Grid, CircularProgress, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import Club from "./Club/Club";
import useStyles from "./style";
const Clubs = (setCurrentId) => {
  const classes = useStyles();
  const { clubs, isLoading } = useSelector((state) => state.clubs);
  console.log(clubs);
  if (!clubs.length && !isLoading) return "No clubs";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid container>
      {clubs.map((club) => (
        <Grid key={club._id} item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Club club={club} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Clubs;
