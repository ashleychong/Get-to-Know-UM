import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "30px",
      margin: "auto",
      width: "900px",
      minHeight: "100%",
      overflow: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
      margin: "auto",
      minHeight: "100%",
      overflow: "auto",
    },
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
    [theme.breakpoints.up("sm")]: {
      width: "300px",
    },
    width: "200px",
  },
  formControl2: {
    width: "100px",
  },
  list: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    display: "flex",
    flexDirection: "column",
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
    margin: "20px 0 10px 0",
  },
  card: {
    [theme.breakpoints.up("sm")]: {
      border: "2px dashed grey",
      width: "500px",
      margin: "auto",
      marginTop: "16px",
    },
    border: "2px dashed grey",

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
    [theme.breakpoints.up("sm")]: {
      color: "#27899E",
      fontWeight: "400",
      marginLeft: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      color: "#27899E",
      fontWeight: "400",
      marginTop: "30px",
    },
  },
  card2: {
    [theme.breakpoints.up("sm")]: {
      border: "2px dashed grey",
      width: "550px",
      margin: "auto",
      marginTop: "16px",
      textAlign: "center",
    },
    border: "2px dashed grey",
    margin: "auto",
    marginTop: "16px",
    textAlign: "center",
  },
}));
