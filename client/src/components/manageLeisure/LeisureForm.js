import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";
import Custom from "../Custom/Custom";
import { createLeisure, updateLeisure } from "../../actions/leisure";
import Select from "../Custom/Select";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  fileInput: {
    width: "97%",
    margin: "10px 8px",
  },
  select: {
    display: "flex",
    flexDirection: "column",
  },
}));

const initialValues = {
  title: "",
  details: "",
  category: "",
};

const getCategory = [
  { id: "1", title: "inUM" },
  { id: "2", title: "nearUM" },
];

const LeisureForm = ({ currentId, setCurrentId, setOpenPopup }) => {
  const leisure = useSelector((state) =>
    currentId
      ? state.leisures.find((leisure) => leisure._id === currentId)
      : null
  );
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const classes = useStyles();
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("title" in fieldValues)
      temp.title = fieldValues.title ? "" : "This field is required.";
    if ("details" in fieldValues)
      temp.details = fieldValues.details ? "" : "This field is required.";
    if ("category" in fieldValues)
      temp.category = fieldValues.category ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    Custom.useForm(initialValues, true, validate);

  useEffect(() => {
    if (leisure) setValues(leisure);
  }, [leisure]);

  const clear = () => {
    setOpenPopup(false);
    setCurrentId(null);
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentId) {
      dispatch(createLeisure({ ...values }));
    } else {
      dispatch(updateLeisure(currentId, { ...values }));
    }
    clear();
  };

  return (
    <>
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
            name="details"
            label="Details"
            value={values.details}
            onChange={handleInputChange}
            error={errors.details}
            multiline
            maxRows={6}
            required
          />
          <Select
            name="category"
            label="Category"
            value={values.category}
            onChange={handleInputChange}
            options={getCategory}
            error={errors.category}
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
    </>
  );
};

export default LeisureForm;
