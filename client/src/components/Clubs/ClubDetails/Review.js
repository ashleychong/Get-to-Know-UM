import React, { useState } from "react";
import {
  useTheme,
  Avatar,
  Typography,
  Grid,
  Box,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Rating } from "@material-ui/lab";
import { useDispatch } from "react-redux";
import moment from "moment";
import useStyles from "./ReviewStyles";
import { deleteClubReview } from "../../../actions/clubReviews";

const Review = ({ editInPopup, clubId, review }) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <>
      <Grid container className={classes.reviewRoot}>
        <Grid item xs={12} md={2}>
          <Box className={classes.userInfo}>
            <Avatar
              className={classes.userAvatar}
              src={user?.result?.image || "https://source.unsplash.com/random"}
            ></Avatar>
            <Typography variant="subtitle1">{review?.username}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={10}>
          <Grid item xs={12} md={11}>
            <Box className={classes.ratingBox}>
              <Rating value={review?.rating} readOnly />
              <Typography variant="subtitle2" className={classes.reviewDate}>
                {`${moment(review?.createdAt).format("lll")}`}
              </Typography>
            </Box>
            <Typography variant="h6">{review?.title}</Typography>
            <Typography variant="subtitle1" className={classes.reviewDesc}>
              {review?.description}
            </Typography>
          </Grid>
          {user?.result?._id === review?.userId && (
            <Grid item xs={12}>
              <Box className={classes.actions}>
                <IconButton
                  aria-label="edit"
                  className={classes.iconButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    editInPopup(review);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  className={classes.iconButton}
                  onClick={() => dispatch(deleteClubReview(clubId, review._id))}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Review;
