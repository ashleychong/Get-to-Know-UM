import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Custom from "../../Custom/Custom";
import {
  createCourseReview,
  updateCourseReview,
} from "../../../actions/courseReviews";

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
  semester: "",
  year: "",
  overallRating: 0,
  deliveryRating: 0,
  difficultyRating: 0,
  enjoymentRating: 0,
  title: "",
  description: "",
};

const ReviewForm = ({
  courseId,
  currentReviewId,
  setCurrentReviewId,
  setOpenPopup,
}) => {
  const review = useSelector((state) =>
    currentReviewId
      ? state.courses.reviews[courseId].find(
          (review) => review._id === currentReviewId
        )
      : null
  );

  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("title" in fieldValues)
      temp.title = fieldValues.title ? "" : "This field is required.";
    if ("description" in fieldValues)
      temp.description = fieldValues.description
        ? ""
        : "This field is required.";
    if ("semester" in fieldValues)
      temp.semester =
        fieldValues.semester.length !== 0 ? "" : "Select semester";
    if ("year" in fieldValues)
      temp.year =
        fieldValues.year.length !== 0 ? "" : "Select year";
    if ("overallRating" in fieldValues)
      temp.overallRating = fieldValues.overallRating !== 0
          ? ""
        : "Please choose a rating between 1 and 5.";
    if ("deliveryRating" in fieldValues)
      temp.deliveryRating =
        fieldValues.deliveryRating !== 0
          ? ""
          : "Please choose a rating between 1 and 5.";
    if ("difficultyRating" in fieldValues)
      temp.difficultyRating =
        fieldValues.difficultyRating !== 0
          ? ""
          : "Please choose a rating between 1 and 5.";
    if ("enjoymentRating" in fieldValues)
      temp.enjoymentRating =
        fieldValues.enjoymentRating !== 0
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
        createCourseReview(courseId, {
          ...values,
          username: user?.result?.name,
          courseId,
        })
      );
    } else {
      dispatch(
        updateCourseReview(courseId, currentReviewId, {
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
      <Typography gutterBottom>This course was taken in</Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Custom.DropDown
            name="semester"
            label="Semester"
            value={values.semester}
            onChange={handleInputChange}
            options={[
              { id: "1", title: "Semester 1" },
              { id: "2", title: "Semester 2" },
              { id: "3", title: "Special Semester" },
            ]}
            error={errors.semester}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Custom.DropDown
            name="year"
            label="Year"
            value={values.year}
            onChange={handleInputChange}
            options={[
              { id: "1", title: "2019" },
              { id: "2", title: "2020" },
              { id: "3", title: "2021" },
            ]}
            error={errors.year}
          />
        </Grid>
      </Grid>
      <Custom.RatingInput
        name="deliveryRating"
        questionText="How well was the content delivered?"
        value={values.deliveryRating}
        onChange={handleRatingInputChange}
        error={errors.deliveryRating}
      />
      <Custom.RatingInput
        name="difficultyRating"
        questionText="How was the difficulty of this course?"
        value={values.difficultyRating}
        onChange={handleRatingInputChange}
        error={errors.difficultyRating}
      />
      <Custom.RatingInput
        name="enjoymentRating"
        questionText="How did you enjoy this course?"
        value={values.enjoymentRating}
        onChange={handleRatingInputChange}
        error={errors.enjoymentRating}
      />
      <Custom.RatingInput
        name="overallRating"
        questionText="In overall, how would you rate this course?"
        value={values.overallRating}
        onChange={handleRatingInputChange}
        error={errors.overallRating}
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
          rows={5}
          maxRows={15}
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
