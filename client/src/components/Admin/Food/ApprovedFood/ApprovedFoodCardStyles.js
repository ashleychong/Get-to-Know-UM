import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    padding: "1rem 2rem",
  },
  ranking: {
    // textAlign: "center",
    fontWeight: 700,
    fontSize: "2.7rem",
    color: "#b8c0cc",
    display: "flex",
    flexWrap: "nowrap",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0.8rem",
    },
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
    },
  },
  avatar: {
    marginLeft: "1.7rem",
    [theme.breakpoints.down("sm")]: {
      height: 60,
      width: 60,
    },
    [theme.breakpoints.up("sm")]: {
      height: 80,
      width: 80,
    },
  },
  votes: {
    color: "#00a1d6",
    fontWeight: 600,
    fontSize: "1.3rem",
  },
  root: {
    display: "flex",
    position: "relative",
    margin: "1.5rem",
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
    alignItems: "flex-start",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "0.1rem",
  },
  cover: {
    width: "18%",
  },
  rank: {
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
}));
