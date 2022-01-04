import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  submitButton: {
    textTransform: "none",
    backgroundColor: "#3f51b5",
    margin: "0 20px",
  },
  form: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
      margin: "auto",
    },

    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
  to: {},
  from: {
    [theme.breakpoints.up("sm")]: {
      marginRight: "40px",
    },
    marginRight: "20px",
    marginBottom: "10px",
  },
}));
