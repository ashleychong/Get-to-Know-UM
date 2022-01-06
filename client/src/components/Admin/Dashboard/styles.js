import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  box: {
    [theme.breakpoints.up("sm")]: {
      width: "1000px",
      margin: "auto",
      paddingTop: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      paddingTop: "20px",
    },
  },
}));
