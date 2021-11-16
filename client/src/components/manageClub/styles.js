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
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
  newButtonDiv: {
    align: "right",
  },
}));
