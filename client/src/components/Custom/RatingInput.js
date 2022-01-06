import React, { useState } from "react";
import { Rating } from "@material-ui/lab";
import {
  Box,
  Typography,
  FormHelperText,
  Tooltip,
  ClickAwayListener,
  IconButton,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  instructions: {
    display: "flex",
    alignItems: "flex-start",
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
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {tooltipText ? (
        <div className={classes.instructions}>
          <Typography>
            {questionText}
            &nbsp;
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div style={{ display: "inline-block" }}>                
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={<Typography variant="body2">{tooltipText}</Typography>}
                  className={classes.tooltip}
                >
                  <IconButton size="small" onClick={handleTooltipOpen}>
                    <HelpIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </Typography>
        </div>
      ) : (
        <Typography>{questionText}</Typography>
      )}
      <Rating name={name} value={value} onChange={onChange} />
      <Box mb={1}>
        {error && (
          <FormHelperText style={{ color: "#f44336", fontSize: "0.8rem" }}>
            {error}
          </FormHelperText>
        )}
      </Box>
    </>
  );
};

export default RatingInput;
