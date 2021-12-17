import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  Divider,
  Grid,
  Card,
  Box,
  CardContent,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import useStyles from "./style";
import { getEvent, getEventsByTag } from "../../../actions/events";
import moment from "moment";
import RecommendEvent from "../RecommendEvent/RecommendEvent";

const EventDetails = () => {
  const { event, events, isLoading } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEvent(id));
  }, [id]);

  useEffect(() => {
    if (event) {
      dispatch(getEventsByTag({ search: event?.tags }));
    }
  }, [event]);

  if (!event) return null;

  const recommendedEvents = events
    .filter(({ _id }) => _id !== event._id)
    .slice(0, 6);

  const openEvent = (_id) => history.push(`/event/${_id}`);

  return (
    <Paper style={{ padding: "20px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <div className={classes.header}>
            <div className={classes.imageSection}>
              <img
                style={{ objectFit: "cover" }}
                className={classes.media}
                src={event.img || ""}
                alt={event.title}
              />
            </div>
            <Typography
              className={classes.title}
              variant="h4"
              style={{ margin: "auto" }}
            >
              {event.title}
              <Typography
                gutterBottom
                color="textSecondary"
                variant="body1"
                component="p"
              >
                #{event.tags}
              </Typography>
            </Typography>
          </div>
          <Divider style={{ margin: "20px 0" }} />

          <Grid className={classes.grid} container spacing={5}>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardContent style={{}}>
                  <Typography
                    color="textSecondary"
                    style={{ fontSize: "17px" }}
                  >
                    Description
                  </Typography>
                </CardContent>
                <div className={classes.desc}>
                  <Typography variant="body1">{event.about}</Typography>
                </div>
              </Card>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    color="textSecondary"
                    style={{ fontSize: "17px" }}
                  >
                    Date
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                </CardContent>
                <div className={classes.desc}>
                  <Typography variant="body1">
                    {moment(event.startDate).format("DD/MM/YYYY h:mma")} -{" "}
                    {moment(event.endDate).format("DD/MM/YYYY h:mma")}
                  </Typography>
                </div>
              </Card>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    color="textSecondary"
                    style={{ fontSize: "17px" }}
                  >
                    Venue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                </CardContent>
                <div className={classes.desc}>
                  <Typography variant="body1">{event.venue}</Typography>
                </div>
              </Card>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    color="textSecondary"
                    style={{ fontSize: "17px" }}
                  >
                    Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                </CardContent>
                <div className={classes.desc}>
                  <Typography variant="body1">{event.contact}</Typography>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
      {!!recommendedEvents.length && (
        <div className={classes.section}>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="h5">You might also like:</Typography>

          <Grid container alignItems="stretch" style={{ paddingTop: "1vh" }}>
            {recommendedEvents.map((event) => (
              <Grid
                key={event._id}
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
