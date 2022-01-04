import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: theme.palette.secondary.light,
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
  approval: {
    backgroundColor: "#e6f4fe",
    margin: "0 9px",
    "& .MuiButton-label": {
      color: "#108cff",
      letterSpacing: "0.02rem",
    },
  },
  decline: {
    backgroundColor: theme.palette.secondary.light,
    margin: "0 9px",
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
      letterSpacing: "0.02rem",
    },
  },
  closeSidebar: {
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    margin: "0",
    "& .MuiButton-label": {
      color: "#9CA3AF",
      letterSpacing: "0.02rem",
    },
  },
}));

const ActionButton = (props) => {
    const { color, children, onClick } = props;
    const classes = useStyles();

    return (
        <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
            {children}
        </Button>
    );
};

export default ActionButton;
