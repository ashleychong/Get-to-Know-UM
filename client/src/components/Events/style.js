import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  pagination: {
    justifyContent: "center",
    display: "flex",
    margin: "10px 0",
  },
  fav: { color: "white" },
  btn: {
    position: "absolute",
    right: "0",
    marginTop: "30px",
    marginRight: "20px",
  },
  word: {
    textTransform: "none",
    color: "white",
  },
}));
