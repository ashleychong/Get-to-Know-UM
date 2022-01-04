import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  FormHelperText,
} from "@material-ui/core/";
import useStyles from "./style";
import { getCourse } from "../../actions/gpa";

const CourseForm = ({
  course,
  grade,
  credit,
  handleCourseChange,
  handleGradeChange,
  handleCreditChange,
  handleSubmit,
  edit,
  value,
  setValue,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  const umCourses = useSelector((state) => state.umCourses);

  const UMgrades = [
    { letter: "A+", point: "4.0" },
    { letter: "A", point: "4.0" },
    { letter: "A-", point: "3.7" },
    { letter: "B+", point: "3.3" },
    { letter: "B", point: "3.0" },
    { letter: "B-", point: "2.7" },
    { letter: "C+", point: "2.3" },
    { letter: "C", point: "2.0" },
    { letter: "C-", point: "1.7" },
    { letter: "D+", point: "1.3" },
    { letter: "D", point: "1.0" },
    { letter: "F", point: "0.0" },
  ];

  return (
    <>
      <div className={classes.list}>
        <div className={classes.course}>
          <FormControl className={classes.formControl}>
            <InputLabel>Course</InputLabel>
            <Select
              id="course"
              value={course}
              label="Course"
              onChange={handleCourseChange}
            >
              {umCourses.map((umCourse) => (
                <MenuItem key={umCourse.name} value={umCourse.name}>
                  {umCourse.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={classes.credit}>
          <TextField
            disabled
            label="Credits"
            onChange={handleCreditChange}
            value={credit}
          />
        </div>
        <div className={classes.grade}>
          <FormControl className={classes.formControl2}>
            <InputLabel>Grade</InputLabel>
            <Select
              id="grade"
              value={grade}
              label="Grade"
              onChange={handleGradeChange}
            >
              {UMgrades.map((UMgrade) => (
                <MenuItem key={UMgrade.letter} value={UMgrade.point}>
                  {UMgrade.letter}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      {!value && (
        <FormHelperText style={{ textAlign: "center", color: "red" }}>
          {course == "" && grade == ""
            ? "Please select course and grade"
            : course == ""
            ? "Please select course "
            : grade == ""
            ? "Please select grade"
            : ""}
        </FormHelperText>
      )}
      <Button
        className={classes.button}
        colour="#212121"
        variant="outlined"
        size="medium"
        onClick={handleSubmit}
      >
        {edit ? "Edit Course" : "Add Course"}
      </Button>
    </>
  );
};

export default CourseForm;
