import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  title: {
    fontWeight: "bold",
    fontSize: "26px",
  },
  root: {
    margin: "20px 30px",
  },
  submitButton: {
    float: "right",
    justifyContent: "flex-end",
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
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));
