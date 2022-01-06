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
  userInfo: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
      marginLeft: "5px",
    },
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
    },
  },
  userAvatar: {
    [theme.breakpoints.down("sm")]: {
      height: "42px",
      width: "42px",
      marginRight: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "72px",
      width: "72px",
      marginBottom: "1rem",
    },
  },
  ratingBox: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      paddingBottom: "0.4rem",
      padding: "8px",
    },
    display: "flex",
    paddingBottom: "0.4rem",
  },
  reviewDate: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5px",
    },
    paddingLeft: "10px",
    fontWeight: "400",
  },
  reviewDesc: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
      padding: "8px",
    },
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
