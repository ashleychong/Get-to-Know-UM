import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CssBaseline,
  Grid,
  Typography,
  Card,
  Divider,
  Box,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./CafeDetailsStyles";
import Reviews from "./Reviews";
import ReviewPopup from "./ReviewPopup";
import { getCafe } from "../../../actions/cafe";
import { getCafeReviews } from "../../../actions/cafeReviews";

const CafeDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { cafeId } = useParams();
  const { cafe, isLoading } = useSelector((state) => state.cafes);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentReviewId, setCurrentReviewId] = useState(0);

  useEffect(() => {
    dispatch(getCafe(cafeId));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCafeReviews(cafeId));
  }, [cafe]);

  const editInPopup = (review) => {
    setCurrentReviewId(review._id);
    setOpenPopup(true);
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Card className={classes.detailsCard}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className={classes.detailsImgCtn}>
                <img
                  className={classes.detailsImg}
                  src={cafe?.image || "https://source.unsplash.com/random"}
                  alt="cafe"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                {cafe?.title}
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                className={classes.cafeInfo}
                mb={2}
              >
                <Box>
                  <Rating
                    value={cafe?.avgRating || 0}
                    precision={0.1}
                    readOnly
                    size="large"
                  />
                </Box>
                <Box className="avgRating" ml={1}>
                  {cafe?.avgRating?.toFixed(1)}
                </Box>
              </Box>
              <Divider />
              <Box mt={2}>
                <Typography paragraph>{cafe?.description}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
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
          <Reviews editInPopup={editInPopup} cafeId={cafeId} />
          <ReviewPopup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            cafeId={cafeId}
            currentReviewId={currentReviewId}
            setCurrentReviewId={setCurrentReviewId}
          />
        </Card>
      </div>
    </>
  );
};

export default CafeDetails;
