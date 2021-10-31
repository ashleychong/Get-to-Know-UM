import React, { useEffect } from "react";
import { Paper, Typography, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import useStyles from "./style";
import { getEvent, getEventsBySearch } from "../../../actions/events";
import moment from "moment";

const EventDetails = () => {
  const { event, events } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEvent(id));
  }, [id]);

  useEffect(() => {
    if (event) {
      dispatch(
        getEventsBySearch({ search: "none", tags: event?.tags.join(",") })
      ); // getting null smtg wrong with search
      console.log(
        getEventsBySearch({ search: "none", tags: event?.tags.join(",") })
      );
    }
  }, [event]);

  if (!event) return null;

  const openEvent = (_id) => history.push(`gtkum/event/${_id}`);

  // const recommendedEvents = events.filter(({ _id }) => _id !== event._id);

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography className={classes.title} variant="h4">
            {event.title}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body1"
            component="p"
          >
            {event.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography
            className={classes.about}
            gutterBottom
            variant="body1"
            component="p"
          >
            {event.about}
          </Typography>
          <Typography className={classes.info}>
            Date: {moment(event.startDate).format("DD/MM/YYYY h:mma")} -{" "}
            {moment(event.endDate).format("DD/MM/YYYY h:mma")}
          </Typography>
          <Typography className={classes.info}>Venue: {event.venue}</Typography>
          <Typography className={classes.info}>
            Contact: {event.contact}
          </Typography>
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={event.img || ""}
            alt={event.title}
          />
        </div>
      </div>
    </Paper>
  );
};
export default EventDetails;
