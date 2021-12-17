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

    flex: 1,
  },
  imageSection: {
    width: "20%",
    height: "10%",
  },
  about: {
    textAlign: "justify",
    margin: "0 0 8px",
    width: "200",
    whiteSpace: "pre-line",
  },
  title: {
    fontWeight: "600",
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
  },
}));
