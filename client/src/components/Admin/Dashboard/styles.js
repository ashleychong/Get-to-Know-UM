import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  box: {
    [theme.breakpoints.up("sm")]: {
      margin: "10vh 5vw",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 1rem",
    },
  },
}));
