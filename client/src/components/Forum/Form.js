import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

import Custom from "../Custom/Custom";
import { createTopic, updateTopic, getTopicTags } from './../../actions/topics';


const initialValues = {
  title: "",
  message: "",
  tags: [],
};

const Form = ({ currentId, setCurrentId, setOpenPopup }) => {
  const topic = useSelector((state) => (currentId ? state.topics.topics.find((topic) => topic._id === currentId) : null));
  const { tags } = useSelector((state) => state.topics);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();

   useEffect(() => {
     dispatch(getTopicTags());
   }, [dispatch]);

   useEffect(() => {
     if (topic) {
       setValues(topic);
     }
   }, [topic]);

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

  const { values, setValues, errors, setErrors, handleInputChange, handleAutocompleteInputEditChange, resetForm } =
    Custom.useForm(initialValues, true, validate);
  
  const clear = () => {
    // console.log("Close pop up");
    setOpenPopup(false);
    setCurrentId(0);
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("submit topic form");
    // console.log(values);
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
          Please sign in to start a new topic.
        </Typography>
    );
  }

  return (
    <Custom.Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Custom.Input
            name="title"
            label="Topic Title"
            value={values.title}
            onChange={handleInputChange}
            error={errors.title}
            required
          />
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <Custom.AutocompleteInput
            value={values.tags}
            onChange={handleAutocompleteInputEditChange}
            options={tags}
            label="Add tags"
          />
        </Grid>
        <div style={{ paddingTop: "20px" }}>
          <Custom.Button type="submit" text="Submit" />
          <Custom.Button text="Reset" color="default" onClick={resetForm} />
        </div>
      </Grid>
    </Custom.Form>
  );
};

export default Form;