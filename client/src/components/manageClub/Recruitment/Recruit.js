import React from "react";
import { TextField, Paper } from "@material-ui/core";
import useStyles from "./style";

const Recruit = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <TextField
        label=" Start Date"
        type="datetime-local"
        variant="outlined"
        required
        // value={}
        // onChange={}
      />
      <TextField
        label=" End Date"
        type="datetime-local"
        variant="outlined"
        required
        // value={}
        // onChange={}
      />
      <TextField
        variant="outlined"
        label="Link"
        fullWidth
        required
        // value={}
        // onChange={}
      />
    </Paper>
  );
};

export default Recruit;
