import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

const drawerWidth = 280;

export default makeStyles((theme) => ({
  adminInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    color: "#FFFFFF",
    padding: "20px 0",
    fontWeight: 500,
  },
  drawer: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  username: {
    color: "#FFFFFF",
    textAlign: "center",
    textDecoration: "none",
    padding: "20px 0",
    fontSize: 20,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#111827",
  },
  list: {
    color: "#D1D5DB",
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    textDecoration: "none",
    fontSize: "35px",
    [theme.breakpoints.down("sm")]: {
      height: "70px",
      width: "70px",
    },
    [theme.breakpoints.up("sm")]: {
      width: 100,
      height: 100,
    },
  },
  userDetails: {
    padding: "0 72px",
  },
  icon: {
    size: "20px",
    color: "#FFFFFF",
  },
  active: {
    color: "#10B981",
    fontWeight: 600,
  },
  normal: {
    "&:hover": {
      color: "#D1D5DB",
      backgroundColor: "rgba(255,255,255, 0.08)",
    },
    fontWeight: 600,
  },
  logoutDiv: {
    padding: "24px 16px 48px",
  },
  logoutBtn: {
    backgroundColor: "white",
    color: theme.palette.secondary.main,
  },
}));
