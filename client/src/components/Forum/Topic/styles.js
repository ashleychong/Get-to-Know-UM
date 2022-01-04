import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  topicTitle: {
    "& .MuiTypography-h6": {
      textDecoration: "none",
      fontWeight: 600,
      "&:hover": {
        // color: "#808080",
        color: theme.palette.primary.main,
      },
    },
    "& .MuiTypography-subtitle1": {
      opacity: "0.7",
    },
  },
  right: {
    marginLeft: "auto",
  },
}));

export default useStyles;
