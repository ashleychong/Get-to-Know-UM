import React, { useEffect, useState } from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useStyles from "./style";
import { getGpa } from "../../actions/gpa";
import { useDispatch, useSelector } from "react-redux";

const Calc = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [grade, setGrade] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGpa());
  }, [dispatch]);

  const addCourse = () => {};
  const calculate = () => {};
  const clear = () => {};

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography className={classes.text1}>GPA Calculator</Typography>
        <div className={classes.input}>
          <Autocomplete
            id="course"
            options={data}
            renderInput={(params) => (
              <TextField {...params} label="Course" variant="outlined" />
            )}
          />
          <TextField label="Credit" variant="outlined" />
          <TextField
            select
            id="grade"
            value={grade}
            label="Grade"
            //onChange={}
            variant="outlined"
            autoWidth
          />
        </div>
        <Button
          // className={}
          color="#212121"
          size="medium"
          onClick={addCourse}
        >
          Add Course
        </Button>
        <Button
          // className={}
          variant="contained"
          color="primary"
          size="medium"
          onClick={calculate}
        >
          Calculate
        </Button>
        <Button
          // className={}
          variant="outlined"
          color="secondary"
          size="medium"
          onClick={clear}
        >
          Clear
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.text2}>
          GPA Planning Calculator
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Calc;
