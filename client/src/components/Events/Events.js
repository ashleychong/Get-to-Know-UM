import React, { useEffect } from "react";
import { Grid, InputBase } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../actions/events";
import Event from "./Event/Event";
import useStyles from "./Event/style";
import Search from "./Search/Search";

const Events = ({ setCurrentId }) => {
  const events = useSelector((state) => state.events);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <>
      {/* <Search /> */}
      <Grid container alignItems="stretch" style={{ paddingTop: "3vh"}}>
        {events.map((event) => (
          <Grid key={event._id} item xs={12} sm={4} md={4} lg={2}>
            <Event event={event} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Events;
