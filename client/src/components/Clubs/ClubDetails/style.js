import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: "150px",
    width: "100%",
  },
  card: {
    display: "flex",
    width: "300",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
  },
  imageSection: {
    justifyContent: "center",
    paddingBottom: "20px",
  },
  details: {
    textAlign: "justify",
    width: "200",
    fontSize: "16px",
    whiteSpace: "pre-line",
  },
  title: {
    fontWeight: "600",
  },
  info: {
    fontWeight: "500",
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
  submitButton: {
    backgroundColor: "#333996",
  },
  contact: {
    paddingTop: "12px",
  },
  email: {
    paddingTop: "12px",
    display: "flex",
    flexDirection: "row",
  },
  clubInfo: {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
  },
  avgRating: {
    fontWeight: "bold",
    fontSize: "22px",
    padding: "0 20px",
  },

  blockTitle: {
    display: "flex",
    marginBottom: "1rem",
  },
  desc: {
    textAlign: "justify",
    padding: "15px",
  },
  dialogWrapper: {
    padding: "16px",
    position: "absolute",
    margin: "auto",
  },
  dialogTitle: {
    paddingRight: "0px",
  },
  reviewBtn: {
    marginLeft: "auto",
    padding: "20px",
  },
}));
