import React from "react";
import { Grid, CircularProgress, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import Club from "./Club/Club";

const Clubs = (setCurrentId) => {
  const { clubs, isLoading } = useSelector((state) => state.clubs);
  console.log(clubs);
  if (!clubs.length && !isLoading) return "No clubs";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" style={{ paddingTop: "3vh" }}>
      {clubs.map((club) => (
        <Grid key={club._id} item xs={12} sm={4} md={4} lg={3}>
          <Club club={club} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Clubs;
