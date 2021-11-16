import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./style";
import { useHistory } from "react-router-dom";

const FilterButton = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div className={classes.button}>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          size="medium"
          onClick={() => history.push(`/event?page=1`)}
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
        >
          This Month
        </Button>
      </div>
    </>
  );
};

export default FilterButton;
