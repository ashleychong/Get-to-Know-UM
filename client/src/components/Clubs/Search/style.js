import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    [theme.breakpoints.up("sm")]: {
      width: "550px",
    },

    width: "300px",
  },
}));
