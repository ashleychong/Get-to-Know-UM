import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  paper: {
    marginTop: "20px",
    margin: "auto",
    width: "800px",
    minHeight: "500px",
  },
  course: {
    margin: "10px 20px ",
  },
  grade: {
    margin: "10px 20px",
  },
  credit: {
    margin: "10px 20px",
    width: "60px",
  },
  formControl: {
    width: "300px",
  },
  formControl2: {
    width: "100px",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    marginBottom: "20px",
    margin: "auto",
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "10px 0 10px 0",
  },
}));
