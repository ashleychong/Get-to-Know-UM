import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  pagination: {
    justifyContent: "center",
    display: "flex",
    margin: "10px 0",
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      margin: "24px 10vw",
    },
  },
}));
