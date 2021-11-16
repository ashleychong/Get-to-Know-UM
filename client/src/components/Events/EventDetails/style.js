import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
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
    width: "35%",
  },
  about: {
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
}));
