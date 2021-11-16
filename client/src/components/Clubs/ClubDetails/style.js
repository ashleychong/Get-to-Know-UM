import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: "100%",
    width: "100%",
  },
  card: {
    display: "flex",
    width: "300",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
    height: "568px",
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
    marginTop: "30px",
  },
  imageSection: {
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    width: "530px",
    height: "320px",
  },
  details: {
    textAlign: "justify",
    margin: "0 0 8px",
    width: "200",
  },
  title: {
    color: "#27899E",
    fontWeight: "600",
  },
  info: {
    fontWeight: "500",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "70px",
  },
  submitButton: {
    textTransform: "none",
    backgroundColor: "#27899E",
  },
}));
