import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "6px",
    right: "6px",
  },
  fab: {
    color: "white",
    backgroundColor: "black",
    opacity: "0.7",
    "&:hover": {
      backgroundColor: "black",
      opacity: "0.8",
    },
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
}));