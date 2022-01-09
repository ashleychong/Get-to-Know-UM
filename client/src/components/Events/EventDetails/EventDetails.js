import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Divider,
  Grid,
  Card,
  Box,
  CardContent,
  CircularProgress,
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getEvent(id));
  }, [id]);

  useEffect(() => {
    setLoading(true);
    if (event) {
      dispatch(getEventsByTag({ search: event?.tags }));
    }
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [event]);

  if (!event) return null;

  const openEvent = (_id) => history.push(`/event/${_id}`);

  const recommendedEvents = events
    .filter(({ _id }) => _id !== event._id)
    .slice(0, 6);

  const today = new Date().toISOString();
  const reLength = recommendedEvents.length;
  return loading ? (
    <CircularProgress style={{ margin: "20px" }} />
  ) : (
    <>
      <div style={{ marginBottom: "20px" }}></div>
      <Paper className={classes.paper}>
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
            <Typography className={classes.title}>
              {event.title}
              <Typography color="textSecondary" variant="body1">
                #{event.tags}
              </Typography>
              <Typography gutterBottom style={{}}>
                {/* {event.startDate - today} days to go... */}
              </Typography>
            </Typography>
          </div>
          <Divider style={{ margin: "16px 0" }} />

          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    color="primary"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
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
                    color="primary"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
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
                    color="primary"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
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
                    color="primary"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Audience&nbsp;&nbsp;&nbsp;
                  </Typography>
                </CardContent>
                <div className={classes.desc}>
                  <Typography variant="body1">{event.audience}</Typography>
                </div>
              </Card>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    color="primary"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Fee&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                </CardContent>
                <div className={classes.desc}>
                  <Typography variant="body1">RM{event.fee}</Typography>
                </div>
              </Card>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    color="primary"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
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

          {!!reLength && (
            <div className={classes.recommendSection}>
              <Divider style={{ margin: "20px 0" }} />
              <Typography variant="h5">You might also like:</Typography>

              <Grid
                container
                alignItems="stretch"
                style={{ paddingTop: "1vh" }}
              >
                {recommendedEvents.map((event) => (
                  <Grid
                    key={event._id}
                    item
                    lg={3}
                    style={{ cursor: "pointer" }}
                    onClick={() => openEvent(event._id)}
                  >
                    <RecommendEvent event={event} />
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </div>
      </Paper>
      <div style={{ marginBottom: "20px" }}></div>
    </>
  );
};
export default EventDetails;
