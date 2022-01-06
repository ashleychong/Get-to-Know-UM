import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "16px",
  },
  searchInput: {
    width: "75%",
    marginTop: "24px",
  },
  status1: {
    backgroundColor: "#ab47bc",
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 2,
    fontWeight: 600,
    justifyContent: "center",
    letterSpacing: 0.5,
    alignItems: "center",
    borderRadius: 12,
    letterSpacing: 0.5,
  },
  status2: {
    backgroundColor: "#00e676",
    color: "white",
    textTransform: "uppercase",

    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 2,
    fontWeight: 600,
    justifyContent: "center",
    letterSpacing: 0.5,
    alignItems: "center",
    borderRadius: 12,
    letterSpacing: 0.5,
  },
}));
