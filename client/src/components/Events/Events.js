import React from "react";
import { Grid, CircularProgress, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import Event from "./Event/Event";

const Events = ({ setCurrentId }) => {
  const { events, isLoading } = useSelector((state) => state.events);
  if (!events?.length && !isLoading) return "No events";
  console.log(events);

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid container>
      {events.map((event) => (
        <Grid key={event._id} item item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Event event={event} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Events;
