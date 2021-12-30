import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Grid,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";
import Custom from "../Custom/Custom";
import { updateExp } from "../../actions/experience";
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
  description: "",
  img: "",
  name: "",
  status: "",
};

const ExpForm = ({ currentId, setCurrentId, setOpenPopup }) => {
  const exp = useSelector((state) =>
    currentId ? state.exps.find((exp) => exp._id === currentId) : null
  );
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
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
    if (exp) setValues(exp);
  }, [exp]);

  const clear = () => {
    setOpenPopup(false);
    setCurrentId(null);
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateExp(currentId, { ...values }));
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
            name="description"
            label="Description"
            value={values.description}
            onChange={handleInputChange}
            error={errors.description}
            multiline
            minRows={6}
            required
          />
          <Custom.Input
            name="name"
            label="Creator"
            value={values.name}
            onChange={handleInputChange}
            disabled
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setValues({ ...values, img: base64 })}
            />
          </div>
          <div className={classes.approval}>
            <FormLabel>Approval Status</FormLabel>
            <RadioGroup
              name="status"
              value={values.status}
              onChange={handleInputChange}
              color="primary"
              defaultValue="pending"
            >
              <FormControlLabel
                value="approve"
                control={<Radio />}
                label="Approve"
              />
              <FormControlLabel
                value="disapprove"
                control={<Radio />}
                label="Disapprove"
              />
              <FormControlLabel
                value="pending"
                control={<Radio />}
                label="Pending"
                disabled
              />
            </RadioGroup>
            <div>
              <Custom.Button type="submit" text="Submit" />
              <Custom.Button text="Reset" color="default" onClick={resetForm} />
            </div>
          </div>
        </Grid>
      </Custom.Form>
    </>
  );
};

export default ExpForm;
