import { makeStyles } from "@material-ui/core";

const lightColor = "rgba(255, 255, 255, 0.7)";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      margin: "4vh 5vh",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 1rem",
    },
  },
  pageContent: {
    // margin: theme.spacing(3),
    // padding: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      padding: "40px",
    },
  },
  header: {
    padding: "0 24px",
  },
  tabBar: {
    marginTop: "24px",
  },
  tabButton: {
    padding: "0",
    marginRight: "24px",
    minWidth: "auto",
  },
  tabContent: {
    [theme.breakpoints.up("sm")]: {
      padding: "40px",
    },
  },
  tabPanel: {
    "& .MuiBox-root": {
      padding: "0",
    },
  },
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
}));
