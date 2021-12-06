import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  reviewRoot: {
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "1.5rem 1rem",
    },
  },
  reviewInfo: {
    // paddingLeft: "0.4rem",
    display: "flex",
    justifyContent: "space-between",
    "& .text": {
      fontWeight: "600",
    },
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
    },
  },
  ratingBox: {
    alignItems: "center",
    lineHeight: "1",
    "& .overallText": {
      fontWeight: "bold",
      fontSize: "1rem",
    },
    "& .overallRating": {
      fontWeight: "bold",
      fontSize: "0.95rem",
      color: "rgba(126,128,134,1)",
      letterSpacing: "0.1rem",
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
    "& .categoryScore": {
      color: "rgba(196,191,253,1)",
      fontWeight: "500",
      fontSize: "0.875rem",
      letterSpacing: "0.1rem",
    },
    "& .ratingCategory": {
      color: "rgba(76,77,80,1)",
      fontSize: "0.8rem",
      fontWeight: "500",
    },
  },
  title: {
    fontWeight: "500",
  },
  reviewDate: {
    display: "flex",
    // justifyContent: "flex-end",
  },
  reviewDesc: {
    lineHeight: "1.5",
  },
  actions: {
    marginTop: "0.6rem",
    display: "flex",
    justifyContent: "flex-end",
  },
  iconButton: {
    padding: "8px",
  },
}));
