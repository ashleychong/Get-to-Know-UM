import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2em 1.5em 0 1.5em",
    [theme.breakpoints.up("sm")]: {
      fontWeight: "bold",
      fontSize: "26px",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "bold",
      fontSize: "24px",
    },
  },
  root: {
    margin: "20px 30px",
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
}));
