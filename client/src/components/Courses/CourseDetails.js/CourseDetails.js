import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  CssBaseline,
  Grid,
  Typography,
  Card,
  Divider,
  Box,
  Button,
  Avatar,
  CircularProgress,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./CourseDetailsStyles";
import ReviewPopup from "./ReviewPopup";
import Reviews from "./Reviews";
import { getCourse } from "../../../actions/courses";
import { getCourseReviews } from "../../../actions/courseReviews";

const CourseDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const history = useHistory();
  const { course, isLoading } = useSelector((state) => state.courses);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentReviewId, setCurrentReviewId] = useState(0);

  useEffect(() => {
    dispatch(getCourse(courseId, history));
    dispatch(getCourseReviews(courseId));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getCourseReviews(courseId));
  // }, [course]);

  const editInPopup = (review) => {
    setCurrentReviewId(review._id);
    setOpenPopup(true);
  };

  return isLoading ? (
    <Box ml={5} mt={5}>
      <CircularProgress />
    </Box>
  ) : (
    <>
      <CssBaseline />
      <div className={classes.header}>
        <div className={classes.headerContent}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} lg={3}>
              <Avatar
                variant="square"
                className={classes.courseAvatar}
                src={course?.image || "https://source.unsplash.com/random"}
              />
            </Grid>
            <Grid item xs={12} sm={8} lg={9}>
              <Typography variant="h3" className={classes?.courseTitle}>
                {`${course?.courseCode} - ${course?.title}`}
              </Typography>
              <Typography variant="h6" className={classes.faculty}>
                {course?.faculty}
              </Typography>
              <Box my={2}>
                <Divider />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.ratingInfo}
                mb={2}
              >
                <Box className="overallText" mr={1}>
                  Overall Rating
                </Box>
                <Box>
                  <Rating
                    value={course?.avgOverallRating || 0}
                    precision={0.1}
                    readOnly
                    size="large"
                  />
                </Box>
                <Box className="avgRating" ml={1}>
                  {course?.avgOverallRating || "N/A"}
                </Box>
              </Box>
              <Box className={classes.ratingSummary} py={4} px={6}>
                <div className={classes.ratingItem}>
                  <Typography variant="h4" className="ratingScore">
                    {course?.avgDeliveryRating?.toFixed(1) || "N/A"}
                  </Typography>
                  <Typography className="ratingCategory">Delivery</Typography>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div className={classes.ratingItem}>
                  <Typography variant="h4" className="ratingScore">
                    {course?.avgDifficultyRating?.toFixed(1) || "N/A"}
                  </Typography>
                  <Typography className="ratingCategory">Difficulty</Typography>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div className={classes.ratingItem}>
                  <Typography variant="h4" className="ratingScore">
                    {course?.avgEnjoymentRating?.toFixed(1) || "N/A"}
                  </Typography>
                  <Typography className="ratingCategory">Enjoyment</Typography>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h3" className={classes.overview}>
            <MenuBookOutlinedIcon />
            Course Overview
          </Typography>
          <Box my={2}>
            <Divider />
          </Box>
          <Typography paragraph className={classes.paragraph} variant="body1">
            {course?.description}
          </Typography>
        </div>
      </div>
      <Grid container>
        <Grid item xs={12} sm={9} md={8} className={classes.reviewsContainer}>
          <Card className={classes.reviewsCard}>
            <div className={classes.blockTitle}>
              <Typography className={classes.titleText} variant="h4">
                Reviews
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => {
                  setOpenPopup(true);
                }}
              >
                Write a review
              </Button>
            </div>
            {/* <Review /> */}
            <Reviews editInPopup={editInPopup} courseId={courseId} />
            <ReviewPopup
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              courseId={courseId}
              currentReviewId={currentReviewId}
              setCurrentReviewId={setCurrentReviewId}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CourseDetails;
