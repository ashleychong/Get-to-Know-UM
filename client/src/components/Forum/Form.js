import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Custom from "../Custom/Custom";
import { createTopic, updateTopic } from './../../actions/topics';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const initialValues = {
  title: "",
  message: "",
};

const Form = ({ currentId, setCurrentId, setOpenPopup }) => {
  const topic = useSelector((state) => (currentId ? state.topics.topics.find((topic) => topic._id === currentId) : null));
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("title" in fieldValues)
      temp.title = fieldValues.title ? "" : "This field is required.";
    if ("message" in fieldValues)
      temp.message = fieldValues.message ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    Custom.useForm(initialValues, true, validate);
  
  const clear = () => {
    // console.log("Close pop up");
    setOpenPopup(false);
    setCurrentId(0);
    setValues(initialValues);
  };

  useEffect(() => {
    if (topic) {
      setValues(topic);
    }
  }, [topic]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createTopic({ ...values, username: user?.result?.name }, history));
    }
    else {
      dispatch(updateTopic(currentId, { ...values }));
    }
    clear();
  };


  if (!user?.result?.name) {
    return (
        <Typography variant="h6" align="center">
          Please sign in to create a new topic.
        </Typography>
    );
  }

  return (
    <Custom.Form onSubmit={handleSubmit}>
      <Grid container>
        <Custom.Input
          name="title"
          label="Topic Title"
          value={values.title}
          onChange={handleInputChange}
          error={errors.title}
          required
        />
        <Custom.Input
          label="Message"
          name="message"
          value={values.message}
          onChange={handleInputChange}
          error={errors.message}
          multiline
          rows={3}
          rowsMax={10}
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

export default Form;
