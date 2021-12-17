import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";

import Custom from "../../Custom/Custom";
import { updateFoodNomination } from "../../../actions/foodNominations";

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
  currentFoodNominationId,
  setCurrentFoodNominationId,
}) => {
  const foodNomination = useSelector((state) =>
    currentFoodNominationId
      ? state.foodNominations.foodNominations.find(
          (foodNomination) => foodNomination._id === currentFoodNominationId
        )
      : null
  );
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

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
    setOpenPopup(false);
    setCurrentFoodNominationId(0);
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateFoodNomination(currentFoodNominationId, { ...values }));
    console.log(values);
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Typography variant="h6" align="center">
        Please sign in to edit the food.
      </Typography>
    );
  }

  return (
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
