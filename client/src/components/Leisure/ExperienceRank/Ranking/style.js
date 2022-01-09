import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      fontWeight: "bold",
      fontSize: "26px",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "bold",
      fontSize: "24px",
      margin: "1em",
    },
  },

  root: {
    [theme.breakpoints.up("sm")]: {
      margin: "4vh 7vh",
    },
  },

  submitButton: {
    [theme.breakpoints.up("sm")]: {
      float: "right",
      right: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0 20px 200px",
    },
  },
  form: {
    margin: 8,
  },
  paper: {
    padding: "16px",
  },
  dialogWrapper: {
    padding: "16px",
    position: "absolute",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
      margin: "20px",
    },
  },
  dialogTitle: {
    paddingRight: "0px",
  },
  space: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "50px",
    },
    [theme.breakpoints.down("sm")]: {},
  },
}));
