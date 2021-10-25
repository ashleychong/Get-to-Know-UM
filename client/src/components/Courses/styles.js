import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    // position: "absolute",
    // right: "10px",
    // minWidth: 0,
    // margin: theme.spacing(0.2),
    // backgroundColor: theme.palette.primary.light,
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
  newButtonDiv: {
    align: "right",
  },
}));
