import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, FormHelperText, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Custom from "../../Custom/Custom";
import {
  createCafeReview,
  updateCafeReview,
} from "../../../actions/cafeReviews";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  fileInput: {
    width: "97%",
    margin: "10px 8px",
  },
}));

const initialValues = {
  title: "",
  description: "",
  rating: 0,
};

const ReviewForm = ({
  cafeId,
  currentReviewId,
  setCurrentReviewId,
  setOpenPopup,
}) => {
  const review = useSelector((state) =>
    currentReviewId
      ? state.cafes.reviews[cafeId].find(
          (review) => review._id === currentReviewId
        )
      : null
  );

  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("title" in fieldValues)
      temp.title = fieldValues.title ? "" : "This field is required.";
    if ("description" in fieldValues)
      temp.description = fieldValues.description
        ? ""
        : "This field is required.";
    if ("rating" in fieldValues)
      temp.rating =
        fieldValues.rating !== 0
          ? ""
          : "Please choose a rating between 1 and 5.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, handleRatingInputChange, resetForm } =
    Custom.useForm(initialValues, true, validate);

  useEffect(() => {
    if (review) {
      setValues(review);
    }
  }, [review]);

  const clear = () => {
    setOpenPopup(false);
    setCurrentReviewId(0);
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      console.log("Incomplete form");
      console.log(values);
      return;
    }

    if (!currentReviewId) {
      dispatch(
        createCafeReview(cafeId, {
          ...values,
          username: user?.result?.name,
          cafeId,
        })
      );
    } else {
      dispatch(
        updateCafeReview(cafeId, currentReviewId, {
          ...values,
        })
      );
    }
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Typography variant="h6" align="center">
        Please sign in to add a review.
      </Typography>
    );
  }

  return (
    <Custom.Form onSubmit={handleSubmit}>
      <Custom.RatingInput
        name="rating"
        questionText="How would you rate the cafe?"
        value={values.rating}
        onChange={handleRatingInputChange}
        error={errors.rating}
      />
      <Grid container>
        <Custom.Input
          name="title"
          label="Review Title"
          value={values.title}
          onChange={handleInputChange}
          error={errors.title}
          required
        />
        <Custom.Input
          name="description"
          label="Description"
          value={values.description}
          onChange={handleInputChange}
          error={errors.description}
          multiline
          rows={3}
          maxRows={10}
          required
        />
        <div>
          <Custom.Button type="submit" text="Submit" />
          <Custom.Button text="Reset" color="default" onClick={resetForm} />
        </div>
      </Grid>
    </Custom.Form>
  );
};

export default ReviewForm;
