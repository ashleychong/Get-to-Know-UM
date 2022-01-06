import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";

import Custom from "../Custom/Custom";
import { createFoodNomination } from "./../../actions/foodNominations";

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
  foodName: "",
  image: "",
  description: "",
};

const NominateFoodForm = ({
  setOpenPopup,
}) => {

  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("foodName" in fieldValues)
      temp.foodName = fieldValues.foodName ? "" : "This field is required.";
    if ("description" in fieldValues)
      temp.description = fieldValues.description
        ? ""
        : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    Custom.useForm(initialValues, true, validate);


  const clear = () => {
    // setOpenPopup(false);
    setSubmitted(true);
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createFoodNomination({ ...values }));
    // console.log(values);
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Typography variant="h6" align="center">
        Please sign in to nominate a food.
      </Typography>
    );
  }

  return submitted ? (
    <Typography variant="h6" align="center">
      Your nomination has been submitted!
    </Typography>
  ) : (
    <Custom.Form onSubmit={handleSubmit}>
      <Grid container>
        <Custom.Input
          name="foodName"
          label="Food Name"
          value={values.foodName}
          onChange={handleInputChange}
          error={errors.foodName}
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

export default NominateFoodForm;
