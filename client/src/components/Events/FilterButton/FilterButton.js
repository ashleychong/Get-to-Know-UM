import React, { useState, useEffect } from "react";
import { Button, TextField, Box, Typography } from "@material-ui/core";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
import { useDispatch, useSelector } from "react-redux";
import { getEventsByDateRange } from "../../../actions/events";
import ClearIcon from "@material-ui/icons/Clear";

const initialValues = {
  from: "",
  to: "",
};

const FilterButton = () => {
  const { event, events, isLoading } = useSelector((state) => state.events);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [date, setDate] = useState({
    from: "",
    to: "",
  });

  const dateString = date.from.toString() + "~" + date.to.toString();
  const handleSubmit = async (e) => {
    e.preventDefault();

    history.push(`/event/range?date=${dateString}&page=1`);
  };
  const clear = () => {
    setDate(initialValues);
    history.push(`/event`);
  };
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
          onClick={() => {
            history.push(`/event/month?page=1`);
          }}
        >
          This Month
        </Button>
      </div>
      <Typography style={{ textAlign: "center", marginTop: "20px" }}>
        Filter events by date range:{" "}
      </Typography>
      <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            className={classes.from}
            variant="outlined"
            name="from"
            label="From"
            value={date.from}
            type="date"
            onChange={(e) => setDate({ ...date, from: e.target.value })}
            required
            inputProps={{
              min: new Date().toISOString().slice(0, 10),
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            error={date.to && date.to < date.from ? true : false}
            helperText={
              date.to && date.to < date.from
                ? "Date must greater than start date."
                : ""
            }
            style={{ marginRight: "20px" }}
            variant="outlined"
            name="to"
            label="To"
            value={date.to}
            type="date"
            onChange={(e) => setDate({ ...date, to: e.target.value })}
            required
            inputProps={{
              min: date.from,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div>
            <Button
              type="submit"
              style={{
                backgroundColor: "#3f51b5",
                color: "white",
                margin: "10px 0",
                textTransform: "none",
              }}
              variant="contained"
            >
              Filter
            </Button>
            <Button
              onClick={clear}
              variant="outlined"
              style={{
                color: "",
                margin: "10px 0 10px 10px",
                textTransform: "none",
              }}
            >
              Clear Filter
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FilterButton;
