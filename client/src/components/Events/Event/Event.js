import React, { useCallback, useEffect } from "react";
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
import { addFav } from "../../../actions/events";

const Event = ({ event, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const openEvent = () => history.push(`/event/${event._id}`);
  const user = JSON.parse(localStorage.getItem("profile"));
  // const [refresh, setRefresh] = useState(false);

  const setFav = () => {
    dispatch(addFav(event._id));
    if (window.location.href.includes("fav")) {
      window.location.reload();
    }
  };

  const Fav = () => {
    if (event.fav.length > 0) {
      return event.fav.find((favEvent) => favEvent === user?.result?._id) ? (
        <FavoriteIcon style={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon />
      );
    }
    return <FavoriteBorderIcon />;
  };

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
            #{event.tags}
          </Typography>
          <Typography variant="subtitle2" className={classes.details}>
            {moment(event.startDate).format("ddd DD/MM")} -
            {moment(event.endDate).format("ddd DD/MM/YY")}
          </Typography>
          <div className={classes.titleSpace}>
            <Typography variant="h6" className={classes.title}>
              {event.title}
            </Typography>
          </div>
          <Typography className={classes.details} variant="subtitle2">
            {event.venue}
          </Typography>
        </CardContent>
      </ButtonBase>
      <Button className={classes.btn} disabled={!user?.result} onClick={setFav}>
        {user?.result?.name && <Fav />}
      </Button>
    </Card>
  );
};

export default Event;
