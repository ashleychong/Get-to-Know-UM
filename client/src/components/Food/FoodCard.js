import React, { useState } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Button, Typography, Grid, Avatar, Box } from "@material-ui/core/";
import { useDispatch } from "react-redux";

import { voteFoodNomination } from "../../actions/foodNominations";
import SignInPopup from "./SignInPopup";

import Custom from "../Custom/Custom";
import useStyles from "./FoodCardStyles";

export default function FoodCard(props) {
  const { food, index } = props;
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const tabletAndUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [votes, setVotes] = useState(food.votes);
  const [openPopup, setOpenPopup] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?._id;
  const hasVoted = food?.votes?.find((id) => id === userId);

  const handleVote = async () => {
    if (!user?.result?.name) {
      setOpenPopup(true);
    } else {
      if (hasVoted) {
        setVotes(food.votes.filter((id) => id !== userId));
        dispatch(voteFoodNomination(food._id));
        // console.log("Unvote");
      } else {
        dispatch(voteFoodNomination(food._id));
        // console.log("Vote");
        setVotes([...food.votes, userId]);
      }
    }
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={3} className={classes.ranking}>
        {/* <div className={classes.rankingAvatarDiv}> */}
        <span className={classes.ranking}>{index}</span>
        <Avatar
          src={food?.image || "https://source.unsplash.com/random"}
          alt={food?.foodName}
          className={classes.avatar}
        />
        {/* </div> */}
      </Grid>
      <Grid item xs={12} sm={7}>
        <Box
          // sx={{
          //   alignItems: "center",
          //   display: "flex",
          // }}
          className={classes.contentBox}
        >
          <Box>
            <Box mb={1}>
              <Typography variant="h5" gutterBottom>
                {food?.foodName}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ fontSize: "1rem", textAlign: "justify" }}
              >
                {food?.description}
              </Typography>
            </Box>
            <Typography className={classes.votes}>
              {food?.votes?.length > 1
                ? `${food?.votes.length} votes`
                : `${food?.votes.length} vote`}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
        <div className={classes.actions}>
          <Custom.Button
            variant={hasVoted ? "outlined" : "contained"}
            size="medium"
            color="primary"
            onClick={handleVote}
            text={hasVoted ? "VOTED" : "VOTE"}
          />
          <SignInPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
        </div>
      </Grid>
    </Grid>
  );
}
