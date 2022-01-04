import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  postLayout: {
    display: "flex",
  },
  textSection: {
    borderRadius: "20px",
    marginLeft: "10px",
    marginRight: "10px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  postMessage: {
    textAlign: "justify",
  },
  avatarSection: {
    marginRight: "20px",
    // [theme.breakpoints.down("sm")]: {
    //   marginLeft: 0,
    // },
  },
  leftAvatar: {
    [theme.breakpoints.down("sm")]: {
      height: 50,
      width: 50,
    },
    [theme.breakpoints.up("sm")]: {
      height: 70,
      width: 70,
    },
    margin: "auto",
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  right: {
    marginLeft: "auto",
  },

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
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      alignItems: "center",
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
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  ratingBox: {
    display: "flex",
    paddingBottom: "0.4rem",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      marginTop: "16px",
      marginBottom: "4px",
    },
  },
  reviewDate: {
    paddingLeft: "10px",
    fontWeight: "400",
  },
  reviewDesc: {
    lineHeight: "1.5",
    marginTop: "10px",
    marginBottom: "10px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "16px",
    },
  },
  actions: {
    marginTop: "0.6rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    padding: "8px",
  },
}));

export default useStyles;