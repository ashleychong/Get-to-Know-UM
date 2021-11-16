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
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const RecommendEvent = ({ event, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.cardAction}>
        <CardMedia
          className={classes.media}
          image={event.img}
          title={event.title}
        />
        <CardContent>
          <Typography
            className={classes.tags}
            color="textSecondary"
            variant="body2"
          >
            {event.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography variant="subtitle2" className={classes.details}>
            {moment(event.startDate).format("ddd DD/MM/YYYY h:mma")}
          </Typography>
          <div className={classes.titleSection}>
            <Typography variant="h6" className={classes.title}>
              {event.title}
            </Typography>
          </div>
          <div className={classes.detailsSection}>
            <Typography className={classes.details} variant="subtitle2">
              {event.venue}
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default RecommendEvent;
