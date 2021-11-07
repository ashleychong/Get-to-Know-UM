import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  ButtonBase,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import useStyles from "./style";
import { useHistory } from "react-router-dom";

const Event = ({ event, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const openEvent = () => history.push(`event/${event._id}`);

  return (
    <Card className={classes.card}>
      <ButtonBase className={classes.cardAction} onClick={openEvent}>
        <CardMedia
          className={classes.media}
          image={event.img}
          title={event.title}
        />
        <CardContent>
          <Typography
            className={classes.tags}
            color="textSecondary"
            variant="subtitle2"
          >
            {event.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography variant="body2" className={classes.details}>
            {moment(event.startDate).format("ddd DD/MM/YYYY h:mma")}
          </Typography>
          <Typography className={classes.title}>{event.title}</Typography>
          <Typography className={classes.details} variant="body2">
            {event.venue}
          </Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default Event;
