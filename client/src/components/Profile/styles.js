import { deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    maxWidth: "50%",
    alignItems: "center",
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
  table: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  avatar: {
    // width: "100%",
    // maxWidth: "100px",
    // height: "auto",
    // maxHeight: "100px",
    width: "100px",
    height: "100px",
    fontSize: "35px",
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    textDecoration: "none",
  },
}));
