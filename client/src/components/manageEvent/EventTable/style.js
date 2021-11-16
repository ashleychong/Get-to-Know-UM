import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "16px",
  },
  searchInput: {
    width: "75%",
    marginTop: "24px",
  },
  statusExpired: {
    backgroundColor: "#ab47bc",
    color: "white",
  },
  statusUpcoming: {
    backgroundColor: "#00e676",
    color: "white",
  },
}));
