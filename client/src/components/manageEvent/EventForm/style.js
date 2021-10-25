import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
  },
  font: {
    fontWeight: 600,
    color: "#008394",
    margin: "20px 0",
  },
  filebase: {
    margin: 8,
  },
  button: {
    display: "flex",
    marginTop: 8,
    justifyContent: "center",
  },
  submitButton: {
    marginRight: 12,
  },
}));
