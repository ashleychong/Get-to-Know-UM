import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  title: {
    fontWeight: "500",
    margin: "50px 80px",
  },
  card1: {
    display: "flex",
    flexDirection: "column",
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
    fontWeight: "400",
    fontSize: "30px",
  },
}));