import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cardGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  card: {
    display: "flex",
    "& .MuiPaper-root": {
      alignItems: "stretch",
    },
    flexDirection: "column",
    justifyContent: "space-between",
    height: "auto",
  },
  cardDetails: {
    flex: 1,
    height: "auto",
  },
  cardMedia: {
    // height: 0,
    paddingTop: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  right: {
    marginTop: theme.spacing(1),
    display: "flex",
    // marginLeft: "auto",
    justifyContent: "flex-end",
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));