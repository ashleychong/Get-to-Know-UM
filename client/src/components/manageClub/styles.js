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
  newButton: {
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
  newButtonDiv: {
    align: "right",
  },
}));
