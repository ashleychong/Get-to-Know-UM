import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      margin: "4vh 5vh",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 1rem",
    },
  },
  createButtonRow: {
    marginBottom: "3rem",
    display: "flex",
    justifyContent: "flex-end",
  },
}));
