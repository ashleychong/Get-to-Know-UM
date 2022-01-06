import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  grid: {
    alignItems: "center",
  },
  card: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      position: "relative",
      margin: "20px 140px",
      height: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      position: "relative",
      margin: "20px",
      height: "fit-content",
    },
  },
  box: {
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
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
    padding: "0 16px 16px 16px",
  },
  titleStyle: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333996",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333996",
    },
  },
}));
