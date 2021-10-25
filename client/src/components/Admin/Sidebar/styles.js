import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles((theme) => ({
  header: {
    color: "#FFFFFF",
    padding: "30px 45px",
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
    padding: "15px 0 30px",
    fontSize: 20,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#008394",
  },

  list: {
    color: "#FFFFFF",
  },
  profile: {
    width: 100,
    height: 100,
  },
  userDetails: {
    padding: "0 72px",
  },
  icon: {
    color: "#FFFFFF",
  },
  active: {
    background: "#2CB5D2",
  },
  logoutDiv: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "2rem",
  },
  logoutBtn: {
    backgroundColor: "white",
    color: theme.palette.secondary.main,
  },
}));
