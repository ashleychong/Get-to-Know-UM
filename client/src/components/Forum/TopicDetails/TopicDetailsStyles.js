import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  pageContent: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
  },
  titleHeader: {
    padding: theme.spacing(1.2),
    display: "flex",
  },
  titleHeaderRoot: {
    backgroundColor: "#00172d",
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    marginTop: theme.spacing(5),
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    borderRadius: "3px",
    height: "6vh",
  },
  titleText: {
    color: "white",
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
}));