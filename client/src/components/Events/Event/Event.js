import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  ButtonBase,
  Button,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { AddFav } from "../../../actions/clubs";

const Event = ({ event, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const openEvent = () => history.push(`event/${event._id}`);
  const user = JSON.parse(localStorage.getItem("profile"));

  // const Fav = () => {
  //   if (exp.likes.length > 0) {
  //     return exp.likes.find(
  //       (like) => like === (user?.result?.googleId || user?.result?._id)
  //     ) ? (
  //       <>
  //         <ThumbUpAltIcon fontSize="small" />
  //         &nbsp;{exp.likes.length}{" "}
  //       </>
  //     ) : (
  //       <>
  //         <ThumbUpAltOutlined fontSize="small" />
  //         &nbsp;{exp.likes.length}{" "}
  //       </>
  //     );
  //   }

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
            variant="body2"
          >
            {event.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography variant="subtitle2" className={classes.details}>
            {moment(event.startDate).format("ddd DD/MM/YYYY h:mma")}
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {event.title}
          </Typography>
          <Typography className={classes.details} variant="subtitle2">
            {event.venue}
          </Typography>
        </CardContent>
      </ButtonBase>
      <Button
        className={classes.btn}
        disabled={!user?.result}
        // onClick={() => dispatch(AddFav(event._id))}
      >
        <FavoriteBorderIcon />
      </Button>
    </Card>
  );
};

export default Event;
