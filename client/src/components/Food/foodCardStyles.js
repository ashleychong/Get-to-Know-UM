import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  grid: {
    alignItems: "center",
  },
  card: {
    display: "flex",
    position: "relative",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
  },
  content: {
    display: "flex",
    flex: "1 0 auto",
    justifyContent: "space-between",
  },
  cover: {
    width: "200px",
  },
  ranking: {
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "red",
    color: "white",
    padding: "0.1em 0.2em",
    zIndex: "5",
  },
  desc: {
    padding: theme.spacing(2),
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  cardContainer: {
    marginTop: "1.5em",
    marginBottom: "1.5em",
  },
  cardActionsContainer: {
    display: "flex",
    flex: "1 0 auto",
    justifyContent: "space-between",
  },
}));