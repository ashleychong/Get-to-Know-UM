import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  paper: {
    marginTop: "30px",
    margin: "auto",
    width: "900px",
    minHeight: "100%",
    overflow: "auto",
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
  card: {
    border: "2px dashed grey",
    width: "500px",
    margin: "auto",
    marginTop: "16px",
  },
  content: {
    paddingBottom: "16px",
    display: "flex",
    justifyContent: "center",
  },

  gpa: {
    color: "#27899E",
    fontWeight: "400",
  },
  bottom: {
    marginBottom: "30px",
  },
  header: { margin: "16px", fontSize: "26", fontWeight: "bold" },
  text: {
    textAlign: "center",
  },
  title: {
    fontWeight: "300",
    fontSize: "18px",
    padding: "20px 0",
    display: "inline-block",
    textAlign: "right",
    width: "150px",
    marginBottom: "10px",
    marginRight: "20px",
  },
  title2: {
    fontWeight: "300",
    fontSize: "16px",
    padding: "20px 0",
    display: "inline-block",
    textAlign: "right",
    width: "150px",
    marginBottom: "10px",
    marginRight: "20px",
  },
  wording: {
    display: "flex",
    flexDirection: "row",
  },
  gpa2: {
    color: "#27899E",
    fontWeight: "400",
    marginLeft: "10px",
  },
  card2: {
    border: "2px dashed grey",
    width: "550px",
    margin: "auto",
    marginTop: "16px",
    textAlign: "center",
  },
}));
