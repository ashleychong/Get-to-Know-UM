import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  grid: {
    alignItems: "center",
  },
  card: {
    display: "flex",
    position: "relative",
    margin: "0 120px 0 40px",
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
    color: "#3949ab",
    fontWeight: "bold",
    margin: "auto",
  },
  position: {
    display: "flex",
    flexDirection: "row",
    left: "auto",
    right: "auto",
    marginLeft: "120px",
  },
}));
