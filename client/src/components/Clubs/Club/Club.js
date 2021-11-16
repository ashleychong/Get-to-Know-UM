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

const Club = ({ club, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const openClub = () => history.push(`club/${club._id}`);

  return (
    <Card className={classes.card}>
      <ButtonBase className={classes.cardAction} onClick={openClub}>
        <CardMedia
          className={classes.media}
          image={club.img}
          title={club.title}
        />
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            {club.title}
          </Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default Club;
