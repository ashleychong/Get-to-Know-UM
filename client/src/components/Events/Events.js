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
    <Grid container alignItems="stretch" style={{ paddingTop: "1vh" }}>
      {events.map((event) => (
        <Grid key={event._id} item xs={12} sm={4} md={4} lg={3}>
          <Event event={event} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Events;
