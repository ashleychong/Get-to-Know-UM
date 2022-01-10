import React, { useState } from "react";
import {
  useTheme,
  Typography,
  Box,
  IconButton,
  Divider,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Rating } from "@material-ui/lab";
import { useDispatch } from "react-redux";
import moment from "moment";

import useStyles from "./ReviewStyles";
import { deleteCourseReview } from "../../../actions/courseReviews";
import Custom from "../../Custom/Custom";

const Review = ({ editInPopup, courseId, review }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const user = JSON.parse(localStorage.getItem("profile"));

  const confirmRemove = () => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    dispatch(deleteCourseReview(courseId, review._id));
  };

  return (
    <>
      <div className={classes.reviewRoot}>
        <div>
          <div className={classes.reviewInfo}>
            <Typography variant="subtitle1" className="text">
              Anonymous
            </Typography>
            <Typography variant="subtitle1" className="text">
              {/* Semester 2, 2020 */}
              {`${review?.semester}, ${review?.year}`}
            </Typography>
          </div>
          <Box
            display="flex"
            alignItems="center"
            className={classes.ratingBox}
            mt={1}
          >
            <Box className="overallText" mr={1}>
              Overall Rating
            </Box>
            <Box>
              <Rating value={review?.overallRating} readOnly />
            </Box>
            <Box className="overallRating" ml={1}>
              {`${review?.overallRating}/5`}
            </Box>
          </Box>
          <Box className={classes.ratingSummary} py={2} px={3}>
            <div className={classes.ratingItem}>
              <Typography variant="h5" className="ratingScore">
                {review?.deliveryRating}
                <span className="categoryScore">/5</span>
              </Typography>
              <Typography className="ratingCategory">Delivery</Typography>
            </div>
            <Divider orientation="vertical" variant="middle" flexItem />
            <div className={classes.ratingItem}>
              <Typography variant="h5" className="ratingScore">
                {review?.difficultyRating}
                <span className="categoryScore">/5</span>
              </Typography>
              <Typography className="ratingCategory">Difficulty</Typography>
            </div>
            <Divider orientation="vertical" variant="middle" flexItem />
            <div className={classes.ratingItem}>
              <Typography variant="h5" className="ratingScore">
                {review?.enjoymentRating}
                <span className="categoryScore">/5</span>
              </Typography>
              <Typography className="ratingCategory">Enjoyment</Typography>
            </div>
          </Box>
          <Typography variant="h6" gutterBottom className={classes.title}>
            {review?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.reviewDesc}
            gutterBottom
          >
            {review?.description}
          </Typography>
          <Box mt={2} className={classes.reviewDate}>
            <Typography variant="caption">
              {`Posted on ${moment(review?.createdAt).format("LL")}`}
            </Typography>
          </Box>
        </div>
        {user?.result?._id === review?.userId && (
          <div>
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
          </div>
        )}
      </div>
      <Custom.ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default Review;
