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
    if ("curGPA" in fieldValues)
      temp.curGPA = fieldValues.curGPA ? "" : "This field is required.";
    if ("targetGPA" in fieldValues)
      temp.targetGPA = fieldValues.targetGPA ? "" : "This field is required.";
    // if ("targetGPA" in fieldValues)
    //   temp.targetGPA = fieldValues.targetGPA > 4 ? "Pls input GPA <4.00" : "";
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
    setErrors({});
  };
  console.log(errors);

  const calculate = (e) => {
    validate();
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
          <Typography className={classes.title2}>Cumulative GPA</Typography>
          <Custom.Input
            required
            name="curGPA"
            type="number"
            inputProps={{
              min: 0.0,
              maxLength: 4.0,
              step: "0.01",
            }}
            value={values.curGPA}
            onChange={handleInputChange}
            error={values.curGPA > 4 ? "Pls input GPA <= 4.00" : errors.curGPA}
            helperText="*Your current Cumulative GPA"
          />
        </div>
        <div className={classes.text}>
          <Typography className={classes.title2}>Desired GPA</Typography>
          <Custom.Input
            required
            name="targetGPA"
            type="number"
            inputProps={{
              min: 0.0,
              maxLength: 4.0,
              step: "0.01",
            }}
            value={values.targetGPA}
            onChange={handleInputChange}
            error={
              values.targetGPA > 4 ? "Pls input GPA <= 4.00" : errors.targetGPA
            }
            helperText="*GPA that you wish to achieve."
          />
        </div>
        <div className={classes.text}>
          <Typography className={classes.title2}>Credits earned:</Typography>
          <Custom.Input
            required
            name="curCdt"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={values.curCdt}
            onChange={handleInputChange}
            error={errors.curCdt}
            helperText="*Total credit hours that you have."
          />
        </div>
        <div className={classes.text}>
          <Typography className={classes.title2}>Planned Credit</Typography>
          <Custom.Input
            required
            name="addCdt"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={values.addCdt}
            onChange={handleInputChange}
            error={errors.addCdt}
            helperText="*Total credit hours of this semester."
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
      {click &&
        values.curGPA != "" &&
        values.curGPA <= 4 &&
        values.curCdt != "" &&
        values.targetGPA != "" &&
        values.targetGPA <= 4 &&
        values.addCdt != "" && (
          <Card variant="outlined" className={classes.card2}>
            <CardContent className={classes.content}>
              <Typography variant="h6" className={classes.wording}>
                {planGPA > 4 ? "" : "Minimum GPA required in this semester is"}
              </Typography>
              <Typography variant="h5" className={classes.gpa2}>
                {planGPA > 4
                  ? "GPA > 4.00. Try to lower your target."
                  : planGPA}
              </Typography>
            </CardContent>
          </Card>
        )}
    </>
  );
};
export default PlanCal;
