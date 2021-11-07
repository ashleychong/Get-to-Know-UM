import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  grid: {
    alignItems: "center",
  },
  card: {
    display: "flex",
    position: "relative",
    margin: "0 140px",
    height: "200px",
  },
  box: {
    width: "fit-content",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
  },
  cover: {
    width: "300px",
  },
  desc: {
    padding: "16px",
    textAlign: "justify",
  },
  btn: {
    position: "absolute",
    right: "8px",
  },
  ranking: {
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "red",
    color: "white",
    padding: "0.3em 0.4em",
    zIndex: "5",
  },
}));
