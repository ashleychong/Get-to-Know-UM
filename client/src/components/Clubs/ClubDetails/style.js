import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    [theme.breakpoints.up("sm")]: {
      height: "150px",
      width: "100%",
    },
    height: "150px",
    width: "50%",
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
    [theme.breakpoints.up("sm")]: {
      textAlign: "justify",
      width: "200",
      fontSize: "16px",
      whiteSpace: "pre-line",
    },
    textAlign: "justify",
    fontSize: "16px",
    whiteSpace: "pre-line",

    wordBreak: "break-word",
  },
  details2: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "justify",
      width: "200",
      fontSize: "16px",
      whiteSpace: "pre-line",
    },
    textAlign: "justify",
    fontSize: "16px",
    whiteSpace: "pre-line",
    width: "50%",

    wordBreak: "break-word",
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      fontWeight: "600",
      fontSize: "34px",
    },
    fontWeight: "600",
    fontSize: "25px",
    textAlign: "center",
  },
  text: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    width: "50%",
    display: "inline-block",
    wordBreak: "break-word",
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
  review: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
    },
    display: "flex",
    flexDirection: "column",
  },
}));
