import { deepPurple } from "@material-ui/core/colors";
import { makeStyles, alpha } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  dropdownMenu: {
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 230,
      color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : "#272E39",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        fontWeight: 600,
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
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
    [theme.breakpoints.up("sm")]: {
      height: "53px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "42px",
    },
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
