import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(3),
      padding: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      margin: "24px 10vw",
      padding: theme.spacing(3),
    },
  },
  pagination: {
    justifyContent: "center",
    display: "flex",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
}));
