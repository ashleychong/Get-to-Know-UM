import { deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    textDecoration: "none",
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    height: "53px",
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    paddingRight: theme.spacing(5),
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // width: "250px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "black",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    textDecoration: "none",
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
  },
}));
