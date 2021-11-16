import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    "& tbody tr:hover": {
      backgroundColor: "#b0bec5",
      cursor: "pointer",
    },
  },
  paper: {
    marginTop: "25px",
  },
  row: {
    backgroundColor: "#eceff1",
    textTransform: "uppercase",
  },
}));
