import React from "react";
import { Rating } from "@material-ui/lab";
import {
  Box,
  Typography,
  FormHelperText,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  instructions: {
    display: "flex",
    alignItems: "center",
  },
  tooltip: {
    fontSize: "1rem",
  },
}));

const RatingInput = ({
  name,
  questionText,
  value,
  onChange,
  error,
  tooltipText,
}) => {
  const classes = useStyles();

  return (
    <>
      {tooltipText ? (
        <div className={classes.instructions}>
          <Typography>
            {questionText}
            &nbsp;
            <>
              <Tooltip
                title={<Typography variant="body2">{tooltipText}</Typography>}
                className={classes.tooltip}
              >
                <IconButton size="small">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </>
          </Typography>
        </div>
      ) : (
        <Typography>{questionText}</Typography>
      )}
      <Rating name={name} value={value} onChange={onChange} />
      <Box mb={1}>
        {error && (
          <FormHelperText style={{ color: "#d32f2f", fontSize: "0.8rem" }}>
            {error}
          </FormHelperText>
        )}
      </Box>
    </>
  );
};

export default RatingInput;
