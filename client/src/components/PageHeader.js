import React from "react";
import { Paper, Card, Typography, makeStyles, IconButton, useMediaQuery, } from "@material-ui/core";
import { Menu as MenuIcon} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  pageHeader: {
    padding: theme.spacing(1.2),
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const { downSm, handleDrawerToggle, title, children } = props;

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        {downSm && (
          <IconButton
            style={{ padding: "8px" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        )}
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </div>
        <div>{children}</div>
      </div>
    </Paper>
  );
}
