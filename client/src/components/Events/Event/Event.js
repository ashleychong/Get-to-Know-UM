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
  const openEvent = () => history.push(`/gtkum/event/${event._id}`);

  return (
    <Card className={classes.card}>
      <ButtonBase className={classes.cardAction} onClick={openEvent}>
        <CardMedia
          className={classes.media}
          image={event.img}
          title={event.title}
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {moment(event.startDate).format("ddd DD/MM/YYYY h:mma")}
          </Typography>
        </div>
        <Typography className={classes.title} variant="h6">
          {event.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {event.venue}
          </Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default Event;
