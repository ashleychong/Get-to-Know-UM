import React, { useEffect } from "react";
import { Paper, Typography, Divider, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import useStyles from "./style";
import { getEvent, getEventsBySearch } from "../../../actions/events";
import moment from "moment";
import RecommendEvent from "../RecommendEvent/RecommendEvent";

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
    }
  }, [event]);

  console.log(event);

  if (!event) return null;

  const recommendedEvents = events
    .filter(({ _id }) => _id !== event._id)
    .slice(0, 6);
  const openEvent = (_id) => history.push(`${_id}`);
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
      {!!recommendedEvents.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <Grid container alignItems="stretch" style={{ paddingTop: "1vh" }}>
            {recommendedEvents.map((event) => (
              <Grid
                item
                lg={2}
                style={{ cursor: "pointer" }}
                onClick={() => openEvent(event._id)}
              >
                <RecommendEvent event={event} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </Paper>
  );
};
export default EventDetails;
