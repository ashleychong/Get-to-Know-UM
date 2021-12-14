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
}));

export default useStyles;