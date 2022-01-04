
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";

import Custom from "../../Custom/Custom";
import { createCourse, updateCourse } from "../../../actions/courses";

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
  courseCode: "",
  description: "",
  faculty: "",
  image: "",
};

const CourseForm = ({ currentCourseId, setCurrentCourseId, setOpenPopup }) => {
  const course = useSelector((state) =>
    currentCourseId
      ? state.courses.courses.find((course) => course._id === currentCourseId)
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
    if ("courseCode" in fieldValues)
      temp.courseCode = fieldValues.courseCode ? "" : "This field is required.";
    if ("description" in fieldValues)
      temp.description = fieldValues.description
        ? ""
        : "This field is required.";
    if ("faculty" in fieldValues)
        temp.faculty = fieldValues.faculty ? "" : "This field is required.";
    // if ("message" in fieldValues)
    //   temp.message = fieldValues.message ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    Custom.useForm(initialValues, true, validate);

  useEffect(() => {
    if (course) {
      setValues(course);
    }
  }, [course]);

  const clear = () => {
    setOpenPopup(false);
    setCurrentCourseId(0);
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentCourseId) {
      dispatch(createCourse({ ...values }));
    } else {
      dispatch(updateCourse(currentCourseId, { ...values }));
    }
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Typography variant="h6" align="center">
        Please sign in to create a new elective course.
      </Typography>
    );
  }

  return (
    <Custom.Form onSubmit={handleSubmit}>
      <Grid container>
        <Custom.Input
          name="title"
          label="Course Title"
          value={values.title}
          onChange={handleInputChange}
          error={errors.title}
          required
        />
        <Custom.Input
          name="courseCode"
          label="Course Code"
          value={values.courseCode}
          onChange={handleInputChange}
          error={errors.courseCode}
          required
        />
        <Custom.Input
          name="faculty"
          label="Faculty"
          value={values.faculty}
          onChange={handleInputChange}
          error={errors.faculty}
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
          rowsMax={10}
          required
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setValues({ ...values, image: base64 })}
          />
        </div>
        <div>
          <Custom.Button type="submit" text="Submit" />
          <Custom.Button text="Reset" color="default" onClick={resetForm} />
        </div>
      </Grid>
    </Custom.Form>
  );
};

export default CourseForm;