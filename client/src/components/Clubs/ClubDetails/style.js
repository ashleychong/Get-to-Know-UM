import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: "150px",
    width: "100%",
  },
  card: {
    width: "300",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
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

    wordBreak: "break-word",
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      fontWeight: "600",
      fontSize: "34px",
      marginTop: "5px",
    },
    fontWeight: "600",
    fontSize: "25px",
    textAlign: "center",
    marginTop: "5px",
  },
  text: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    // width: "59%",
    display: "inline-block",
    wordBreak: "break-word",
  },
  info: {
    fontWeight: "500",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "15px",
      width: "50%",
    },
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
    [theme.breakpoints.down("sm")]: {
      fontWeight: "bold",
      fontSize: "20px",
      padding: "0 10px",
    },
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
    [theme.breakpoints.down("sm")]: {
      padding: "16px",
      position: "absolute",
      margin: "20px",
    },
  },
  dialogTitle: {
    paddingRight: "0px",
  },
  reviewBtn: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
      padding: "20px",
    },
    padding: "20px",
    marginBottom: "10px",
  },
  review: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
    },
    display: "flex",
    flexDirection: "column",
  },
  reviewsCard: {
    // [theme.breakpoints.down("sm")]: { width: "50%" },
  },
  tab: {
    //   [theme.breakpoints.down("sm")]: { width: "59%" },
  },
  divider: {
    // [theme.breakpoints.down("sm")]: { width: "59%" },
  },
  detailsAbout: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "justify",
      width: "200",
      fontSize: "16px",
      whiteSpace: "pre-line",
    },
    textAlign: "justify",
    fontSize: "16px",
    whiteSpace: "pre-line",
    width: "100%",
    wordBreak: "break-word",
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
  grid: {
    [theme.breakpoints.up("sm")]: {
      margin: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "600px",
    },
  },
}));
