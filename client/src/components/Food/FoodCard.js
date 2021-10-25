import React, { useState } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
} from "@material-ui/core/";
import { useDispatch } from "react-redux";

import { voteFood } from "../../actions/food";
import useStyles from "./foodCardStyles";

export default function FoodCard(props) {
  const { food, index } = props;
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const tabletAndUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [votes, setVotes] = useState(food.votes);
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?._id;

  const VoteCount = () => {
    if (votes <= 1) {
      return (
          <Typography variant="h5" color="textPrimary">
            {`${votes.length} vote`}
          </Typography>
        );
      }
    else {
      return (
        <Typography variant="h5" color="textPrimary">
          {`${votes.length} votes`}
        </Typography>
      );
    }
  };

  const VoteButton = () => {
    return votes.find((vote) => vote === userId) ? (
      <Button
        variant="outlined"
        color="primary"
      >
        VOTED
      </Button>
    ) : (
      <Button
        variant="contained"
        color="primary"
        onClick={vote}
        >
          VOTE
        </Button>
    );
  };

  const vote = async () => {
    dispatch(voteFood(food._id));
    console.log("Vote");
    setVotes([...food.votes, userId]);
  };

  return tabletAndUp ? (
    <Grid className={classes.grid} container spacing={3}>
      <Grid item xs={12} md={7}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image="https://source.unsplash.com/random"
            title={food.foodName}
          />
          <div className={classes.ranking}>
            <Typography component="h6">{index}</Typography>
          </div>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {food.foodName}
              </Typography>
              <VoteCount />
            </CardContent>
            <div className={classes.desc}>
              <Typography variant="body1" color="textSecondary">
                {food.description}
              </Typography>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item>
        {user?.result?.name && (
          <VoteButton />
        )}
      </Grid>
    </Grid>
  ) : (
    <div className={classes.cardContainer}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={food.foodName}
          height="140"
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {food.foodName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {food.description}
          </Typography>
        </CardContent>
        <CardActions>
          <div className={classes.cardActionsContainer}>
            <VoteCount />
            <Grid item>
              {user?.result?.name && (
                <VoteButton />
              )}
            </Grid>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
