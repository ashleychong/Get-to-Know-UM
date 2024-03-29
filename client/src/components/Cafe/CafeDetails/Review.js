import React, { useState } from "react";
import {
  useTheme,
  useMediaQuery,
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
import { deleteCafeReview } from "../../../actions/cafeReviews";
import Custom from "../../Custom/Custom";

const Review = ({ editInPopup, cafeId, review }) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const author = review?.userData[0];

  const confirmRemove = () => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    dispatch(deleteCafeReview(cafeId, review._id));
  };

  return (
    <>
      <Grid container className={classes.reviewRoot}>
        <Grid item xs={12} md={2}>
          <Box className={classes.userInfo}>
            <Avatar className={classes.userAvatar} src={author?.image}>
              {author?.name?.charAt(0)}
            </Avatar>
            <Typography variant="subtitle1">{author?.name}</Typography>
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
                  color="primary"
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
                  color="secondary"
                  className={classes.iconButton}
                  onClick={() => {
                    setConfirmDialog({
                      isOpen: true,
                      title: "Are you sure to delete this review?",
                      subTitle: "You can't undo this operation",
                      onConfirm: () => {
                        confirmRemove();
                      },
                    });
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Custom.ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default Review;
