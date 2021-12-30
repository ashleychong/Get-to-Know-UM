import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  pagination: {
    justifyContent: "center",
    display: "flex",
    margin: "10px 0",
  },
  fav: { color: "black" },
  btn: {
    position: "absolute",
    backgroundColor: "#c5cae9",
    right: "0",
    marginTop: "30px",
    marginRight: "20px",
    borderRadius: "20px",
  },
  word: {
    textTransform: "none",
    color: "black",
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
