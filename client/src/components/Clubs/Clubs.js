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
    <Grid container columns={{ xs: 9, sm: 8, md: 9, lg: 9, xl: 9 }}>
      {clubs.map((club) => (
        <Grid key={club._id} item xs={9} sm={6} md={4} lg={4} xl={4}>
          <Club club={club} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Clubs;
