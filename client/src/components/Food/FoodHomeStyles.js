import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: "4vh 2vh",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "4vh 8vw",
    },
  },
  firstRow: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "2em 0.7em",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "center",
      margin: "2em 1.5em",
      justifyContent: "space-between",
    },
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
