import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  pageContent: {
    [theme.breakpoints.up("sm")]: {
      margin: "4vh 5vh",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 1rem",
    },
  },
  searchInput: {
    width: "75%",
  },
  createButton: {
    // position: "absolute",
    // right: "10px",
    // minWidth: 0,
    // margin: theme.spacing(0.2),
    // backgroundColor: theme.palette.primary.light,
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
  createButtonDiv: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(5),
  },
  pagination: {
    justifyContent: "center",
    display: "flex",
    marginTop: "10vh",
    marginBottom: "8vh",
  },
}));
