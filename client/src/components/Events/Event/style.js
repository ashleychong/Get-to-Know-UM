import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  border: {
    border: "solid",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    margin: "0 20px",
  },
  grid: {
    display: "flex",
  },
  details: {
    fontWeight: "450",
  },
  tags: {},
  title: {
    color: "#0097a7",
    fontSize: "22px",
    fontWeight: "bold",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
});
