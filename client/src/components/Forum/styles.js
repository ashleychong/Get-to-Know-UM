import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  pageContent: {
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1.5),
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));


