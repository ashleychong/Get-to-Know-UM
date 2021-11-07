import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  grid: {
    alignItems: "center",
  },
  card: {
    display: "flex",
    position: "relative",
    margin: "0 140px",
    height: "200px",
  },
  box: {
    width: "fit-content",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
  },
  cover: {
    width: "200px",
  },
  desc: {
    padding: theme.spacing(2),
  },
}));
