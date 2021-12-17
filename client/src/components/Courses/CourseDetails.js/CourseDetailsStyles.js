import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    backgroundColor: "#fff",
    width: "100%",
    margin: "0 auto 2rem",
    paddingTop: "3rem",
  },
  headerContent: {
    padding: "0 1.5rem 2rem",
    maxWidth: "1320px",
    width: "100%",
    margin: "auto",
  },
  courseAvatar: {
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "100px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "170px",
      height: "170px",
    },
    [theme.breakpoints.up("md")]: {
      width: "240px",
      height: "240px",
    },
  },
  courseTitle: {
    fontWeight: 600,
    fontSize: "2rem",
    lineHeight: "2.3rem",
  },
  faculty: {
    marginTop: "0.5rem",
    fontWeight: 500,
    fontSize: "0.9rem",
    lineHeight: "1.25rem",
    color: "rgba(165,166,170,1)",
  },
  ratingInfo: {
    alignItems: "center",
    lineHeight: "1",
    "& .overallText": {
      fontWeight: "bold",
      fontSize: "1.3rem",
    },
    "& .avgRating": {
      fontWeight: "bold",
      fontSize: "1.3rem",
      letterSpacing: "0.1rem",
      // color: "rgba(126,128,134,1)",
    },
  },
  ratingSummary: {
    display: "flex",
    textAlign: "center",
  },
  ratingItem: {
    flex: 1,
    "& .ratingScore": {
      color: "rgba(107,94,250,1)",
      fontWeight: "500",
      letterSpacing: "0.1rem",
    },
    "& .ratingCategory": {
      color: "rgba(76,77,80,1)",
      fontSize: "0.8rem",
      fontWeight: "500",
    },
  },
  overview: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    color: "rgba(76,77,80,1)",
    fontWeight: "500",
    fontSize: "1.25rem",
    marginTop: "2rem",
    "& .MuiSvgIcon-root": {
      marginRight: "10px",
    },
  },
  paragraph: {
    color: "rgba(95,96,101,1)",
  },
  root: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "4vh",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "4vh 7vh",
    },
  },
  reviewsContainer: {
    margin: "0 auto 5vh",
  },
  reviewsCard: {
    padding: "1.5rem",
  },
  blockTitle: {
    display: "flex",
    marginBottom: "1rem",
  },
  titleText: {
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));
