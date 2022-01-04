import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    [theme.breakpoints.up("sm")]: {
      fontWeight: "bold",
      margin: "30px 80px",
    },
    fontWeight: "bold",
    margin: "30px 50px",
  },
  card1: {
    display: "flex",
    flexDirection: "row",
    borderRadius: "10px",
    width: "60%",
    margin: "auto",
  },
  card2: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    width: "80%",
    margin: "auto",
  },
  buttonBase: {
    padding: "50px",
  },
  root: {
    margin: "4vh 7vh",
  },
  firstRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2em 1.5em",
  },
  word: {
    [theme.breakpoints.up("sm")]: {
      fontWeight: "bold",
      fontSize: "26px",
    },
    fontWeight: "bold",
    fontSize: "20px",
  },
  imagelist: {
    padding: "20px",
  },
}));
