import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Paper, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";

import Custom from "../Custom/Custom";
import { createClub, updateClub } from "../../actions/clubs";

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
  about: "",
  event: "",
  contact: "",
  website: "",
  insta: "",
  email: "",
  fb: "",
  utube: "",
  linked: "",
  img: "",
  clublink: "",
};

const ClubForm = ({ currentId, setCurrentId, setOpenPopup }) => {
  const club = useSelector((state) =>
    currentId ? state.clubs.clubs.find((club) => club._id === currentId) : null
  );
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("title" in fieldValues)
      temp.title = fieldValues.title ? "" : "This field is required.";
    if ("about" in fieldValues)
      temp.about = fieldValues.about ? "" : "This field is required.";
    if ("event" in fieldValues)
      temp.event = fieldValues.event ? "" : "This field is required.";
    if ("contact" in fieldValues) {
      temp.contact =
        fieldValues.contact.length < 9
          ? "Minimum 9 numbers required."
          : (temp.contact =
              fieldValues.contact.length > 12
                ? "Please enter valid phone number with maximum 11 digits."
                : "");
    }
    if ("email" in fieldValues)
      temp.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        fieldValues.email
      )
        ? ""
        : "Email is not valid.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    Custom.useForm(initialValues, true, validate);

  useEffect(() => {
    if (club) setValues(club);
  }, [club]);

  const clear = () => {
    setOpenPopup(false);
    setCurrentId(null);
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentId) {
      dispatch(createClub({ ...values }));
    } else {
      dispatch(updateClub(currentId, { ...values }));
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
          name="about"
          label="About"
          value={values.about}
          onChange={handleInputChange}
          error={errors.about}
          multiline
          minRows={6}
          maxRows={10}
          required
        />
        <Custom.Input
          name="event"
          label="Event"
          value={values.event}
          multiline
          minRows={4}
          maxRows={10}
          onChange={handleInputChange}
          error={errors.event}
          helperText="e.g. Conference, Workshop, Show"
          required
        />
        <Custom.Input
          name="contact"
          label="Contact"
          value={values.contact}
          onChange={handleInputChange}
          error={errors.contact}
          type="number"
          helperText="e.g. 012XXXXXXX / 05XXXXXXX / 1300XXXXXX"
          required
        />
        <Custom.Input
          name="website"
          label="Website Link"
          value={values.website}
          onChange={handleInputChange}
          error={errors.website}
        />
        <Custom.Input
          name="insta"
          label="Instagram"
          value={values.insta}
          onChange={handleInputChange}
          error={errors.insta}
        />
        <Custom.Input
          name="email"
          label="Email"
          value={values.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <Custom.Input
          name="fb"
          label="Facebook"
          value={values.fb}
          onChange={handleInputChange}
          error={errors.fb}
        />
        <Custom.Input
          name="utube"
          label="Youtube Link"
          value={values.utube}
          onChange={handleInputChange}
          error={errors.utube}
        />
        <Custom.Input
          name="linkedin"
          label="LinkedIn"
          value={values.linkedin}
          onChange={handleInputChange}
          error={errors.linkedin}
        />
        <Custom.Input
          name="clublink"
          label="Registration Form Link"
          value={values.clublink}
          onChange={handleInputChange}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setValues({ ...values, img: base64 })}
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

export default ClubForm;
