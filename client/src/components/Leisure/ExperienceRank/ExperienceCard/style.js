import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  grid: {
    margin: "auto",
    marginBottom: "20px",
  },
  card: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      position: "relative",
      margin: "0 250px 0 40px",
      height: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      position: "relative",
      margin: "10px",
      height: "fit-content",
    },
  },
  box: {
    [theme.breakpoints.up("sm")]: {
      width: "700px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
  },
  cover: {
    [theme.breakpoints.up("sm")]: {
      width: "250px",
    },
  },
  desc: {
    padding: "16px",
    textAlign: "justify",
  },
  btn: {
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      right: "0px",
    },
  },
  ranking: {
    color: "white",
    backgroundColor: "#3949ab",
    fontWeight: "bold",
    fontSize: "22px",
    margin: "auto",
    width: "50px",
    height: "50px",
    [theme.breakpoints.up("sm")]: {
      marginRight: "3px",
    },
  },
  position: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.up("sm")]: {
      margin: "20px 50px 20px 150px ",
    },
  },
  expTitle: {
    [theme.breakpoints.up("sm")]: {
      fontWeight: "bold",
      fontSize: "24px",
      color: "#333996",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "bold",
      fontSize: "22px",
      color: "#333996",
    },
  },
}));
