import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    margin: "0 auto",
  },
  pageContent: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginBottom: theme.spacing(5),
      padding: theme.spacing(3),
    },
  },
  titleHeader: {
    padding: theme.spacing(1.2),
    display: "flex",
  },
  titleHeaderRoot: {
    backgroundColor: "#00172d",
    display: "flex",
    alignItems: "center",
    borderRadius: "3px",
    height: "6vh",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
      padding: theme.spacing(0.5),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginTop: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  titleText: {
    color: "white",
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  message: {
    textAlign: "justify",
  },
}));