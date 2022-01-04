import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  grid: {
    margin: "auto",
    marginBottom: "20px",
  },
  card: {
    display: "flex",
    position: "relative",
    margin: "0 250px 0 40px",
    height: "250px",
  },
  box: {
    width: "700px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
  },
  cover: {
    width: "250px",
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
    color: "#3949ab",
    fontWeight: "bold",
    margin: "auto",
  },
  position: {
    display: "flex",
    flexDirection: "row",
    left: "auto",
    right: "auto",
  },
}));
