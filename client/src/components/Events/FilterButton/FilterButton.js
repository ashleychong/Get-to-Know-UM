import React, { useState } from "react";
import { Button, TextField, Box } from "@material-ui/core";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DateRangePicker from "@material-ui/lab/DateRangePicker";
import addWeeks from "date-fns/addWeeks";

function getWeeksAfter(date, amount) {
  return date ? addWeeks(date, amount) : undefined;
}

const FilterButton = (page) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = useState([null, null]);

  return (
    <>
      <div className={classes.button}>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          size="medium"
          onClick={() => history.push(`/event`)}
        >
          All
        </Button>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          size="medium"
        >
          This Week
        </Button>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          size="medium"
          onClick={() => {
            history.push(`/event/month?page=1`);
          }}
        >
          This Month
        </Button>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            disablePast
            value={value}
            maxDate={getWeeksAfter(value[0], 4)}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default FilterButton;
