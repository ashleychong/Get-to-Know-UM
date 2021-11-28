import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import useStyles from "./style";
import Custom from "../Custom/Custom";

const initialValues = {
  curGPA: "",
  targetGPA: "",
  curCdt: "",
  addCdt: "",
};

const PlanCal = () => {
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const [planGPA, setPlan] = useState(0.0);
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("curGPA" in fieldValues) {
      temp.curGPA = fieldValues.curGPA ? "" : "This field is required.";
      temp.curGPA = fieldValues.curGPA.match(/^[-+]?[0-9]+\.[0-9]+$/)
        ? ""
        : "Please fill in decimal number only.";
      temp.curGPA = fieldValues.curGPA < 4.0 ? "" : "Please input valid GPA.";
    }
    if ("targetGPA" in fieldValues) {
      temp.targetGPA = fieldValues.targetGPA ? "" : "This field is required.";
      temp.targetGPA = fieldValues.targetGPA.match(/^[-+]?[0-9]+\.[0-9]+$/)
        ? ""
        : "Please fill in decimal number only.";
    }
    if ("curCdt" in fieldValues)
      temp.curCdt = fieldValues.curCdt ? "" : "This field is required.";
    if ("addCdt" in fieldValues)
      temp.addCdt = fieldValues.addCdt ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    Custom.useForm(initialValues, true, validate);

  const clear = () => {
    setValues(initialValues);
    setClick(false);
  };

  const calculate = (e) => {
    setClick(true);
    let totalCdt = parseFloat(values.curCdt) + parseFloat(values.addCdt);
    let target = parseFloat(values.targetGPA);
    let current = parseFloat(values.curGPA);
    let plan =
      (target * totalCdt - current * parseFloat(values.curCdt)) /
      parseFloat(values.addCdt);
    setPlan(plan.toFixed(2));
  };

  return (
    <>
      <Typography className={classes.header}>
        Use this calculator to determine the minimum GPA required in future
        courses to raise GPA to a desired level or maintain the GPA above a
        certain level.
      </Typography>
      <Custom.Form className={classes.cal}>
        <div className={classes.text}>
          <Typography className={classes.title}>Current GPA</Typography>
          <Custom.Input
            required
            name="curGPA"
            value={values.curGPA}
            onChange={handleInputChange}
            error={errors.curGPA}
          />
        </div>
        <div className={classes.text}>
          <Typography className={classes.title}>Target GPA</Typography>
          <Custom.Input
            required
            name="targetGPA"
            value={values.targetGPA}
            onChange={handleInputChange}
            error={errors.targetGPA}
          />
        </div>
        <div className={classes.text}>
          <Typography className={classes.title}>Current Credit</Typography>
          <Custom.Input
            required
            name="curCdt"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={values.curCdt}
            onChange={handleInputChange}
            error={errors.curCdt}
          />
        </div>
        <div className={classes.text}>
          <Typography className={classes.title}>Additional Credit</Typography>
          <Custom.Input
            required
            name="addCdt"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={values.addCdt}
            onChange={handleInputChange}
            error={errors.addCdt}
          />
        </div>
        <div className={classes.btnGroup}>
          <Button
            style={{ marginRight: "20px" }}
            variant="contained"
            color="primary"
            size="medium"
            onClick={calculate}
          >
            Calculate
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="medium"
            onClick={clear}
          >
            Clear
          </Button>
        </div>
      </Custom.Form>
      {click && (
        <Card variant="outlined" className={classes.card2}>
          <CardContent className={classes.content}>
            <Typography variant="h6" className={classes.wording}>
              Minimum GPA required to raise/maintain GPA is
            </Typography>
            <Typography variant="h5" className={classes.gpa2}>
              {planGPA}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};
export default PlanCal;
