import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";

import Custom from "../../Custom/Custom";
import { createCafe, updateCafe } from "../../../actions/cafe";

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
  description: "",
  image: "",
};

const CafeForm = ({ currentCafeId, setCurrentCafeId, setOpenPopup }) => {
  const cafe = useSelector((state) =>
    currentCafeId
      ? state.cafes.cafes.find((cafe) => cafe._id === currentCafeId)
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

  useEffect(() => {
    if (cafe) {
      setValues(cafe);
    }
  }, [cafe]);

  const clear = () => {
    setOpenPopup(false);
    setCurrentCafeId(0);
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentCafeId) {
      dispatch(createCafe({ ...values }));
    } else {
      dispatch(updateCafe(currentCafeId, { ...values }));
    }
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Typography variant="h6" align="center">
        Please sign in to add a new cafe.
      </Typography>
    );
  }

  return (
    <Custom.Form onSubmit={handleSubmit}>
      <Grid container>
        <Custom.Input
          name="title"
          label="Cafe Title"
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

export default CafeForm;
