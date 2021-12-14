import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: "4vh 2vh",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "4vh 7vh",
    },
  },
  firstRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "2em 0.7em",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "2em 1.5em",
    },
  },
}));
