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
    display: "flex",
    paddingBottom: "0.4rem",
    alignItems: "flex-end",
  },
  reviewDate: {
    paddingLeft: "10px",
    fontWeight: "400",
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
