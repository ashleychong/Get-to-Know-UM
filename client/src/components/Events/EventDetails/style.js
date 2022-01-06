import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
  },
  card: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    flex: 1,
  },
  recommendSection: {
    borderRadius: "20px",
    flex: 1,
  },
  imageSection: {
    [theme.breakpoints.up("sm")]: {
      width: "20%",
      height: "10%",
    },
    width: "50%",
    height: "10%",
  },
  about: {
    textAlign: "justify",
    margin: "0 0 8px",
    width: "200",
    whiteSpace: "pre-line",
  },
  info: {
    fontWeight: "500",
  },
  desc: {
    textAlign: "justify",
    padding: "15px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: "50px",
      fontWeight: "600",
      fontSize: "34px",
    },
    marginLeft: "10px",
    fontWeight: "600",
    fontSize: "20px",
  },
  paper: {
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "20px",
      margin: "0 10vw",
    },
  },
}));
