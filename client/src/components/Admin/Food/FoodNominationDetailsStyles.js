import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down("sm")]: {
      margin: "2.5rem 0",
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "2.5rem 0",
    },
  },
  root: {
    [theme.breakpoints.up("sm")]: {
      margin: "7vh 5vw",
    },
  },
  content: {
    [theme.breakpoints.down("sm")]: {
      margin: "3rem 0",
    },
  },
  indicatorText: {
    color: "rgba(80, 72, 229, 1)",
  },
  card: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 1rem",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0 3rem",
      padding: "20px 30px",
    },
  },
  divider: {
    marginTop: "0.5rem",
    marginBottom: "0.8rem",
  },
  detailsImgCtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsImg: {
    maxHeight: "300px",
    maxWidth: "100%",
  },
  btn: {
    marginRight: "10px",
  },
}));
