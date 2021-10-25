import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  topicTitle: {
    "& .MuiTypography-h6": {
      textDecoration: "none",
    },
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
  right: {
    marginLeft: "auto",
  },
}));

export default useStyles;
