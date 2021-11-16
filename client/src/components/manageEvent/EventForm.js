import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Paper, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";

import Custom from "../Custom/Custom";
import { createEvent, updateEvent } from "../../actions/events";

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
  tags: "",
  about: "",
  startDate: "",
  endDate: "",
  venue: "",
  contact: "",
  img: "",
};

const EventForm = ({ currentId, setCurrentId, setOpenPopup }) => {
  const event = useSelector((state) =>
    currentId
      ? state.events.events.find((event) => event._id === currentId)
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
    if ("tags" in fieldValues)
      temp.courseCode = fieldValues.courseCode ? "" : "This field is required.";
    if ("about" in fieldValues)
      temp.description = fieldValues.description
        ? ""
        : "This field is required.";
    // if ("message" in fieldValues)
    //     temp.message = fieldValues.message ? "" : "This field is required.";
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
    if (event) setValues(event);
  }, [event]);

  const clear = () => {
    setOpenPopup(false);
    setCurrentId(null);
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentId) {
      dispatch(createEvent({ ...values }));
    } else {
      dispatch(updateEvent(currentId, { ...values }));
    }
    clear();
  };

  return (
    <Custom.Form onSubmit={handleSubmit}>
      <Grid container>
        <Custom.Input
          name="title"
          label="Title"
          value={values.title}
          onChange={handleInputChange}
          error={errors.title}
          required
        />
        <Custom.Input
          name="tags"
          label="Tags"
          value={values.tags}
          onChange={handleInputChange}
          error={errors.courseCode}
          required
        />
        <Custom.Input
          name="about"
          label="About"
          value={values.about}
          onChange={handleInputChange}
          error={errors.description}
          multiline
          minRows={5}
          maxRows={10}
          required
        />
        <Custom.Input
          name="startDate"
          label="Start Date"
          value={values.startDate}
          type="datetime-local"
          onChange={handleInputChange}
          error={errors.description}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Custom.Input
          name="endDate"
          label="End Date"
          value={values.endDate}
          type="datetime-local"
          onChange={handleInputChange}
          error={errors.description}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Custom.Input
          name="venue"
          label="Venue"
          value={values.venue}
          onChange={handleInputChange}
          error={errors.description}
          multiline
          required
        />
        <Custom.Input
          name="contact"
          label="Contact"
          value={values.contact}
          onChange={handleInputChange}
          error={errors.description}
          multiline
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

export default EventForm;
