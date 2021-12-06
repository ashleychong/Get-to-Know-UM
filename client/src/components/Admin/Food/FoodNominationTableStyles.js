import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  MuiTableHead: {
    // backgroundColor: "#F3F4F6",
    ".MuiTableCell-root": {
      color: "#374151",
    },
    borderBottom: "none",
    "& .MuiTableCell-root": {
      borderBottom: "none",
      fontSize: "0.9rem",
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: 0.5,
      textTransform: "uppercase",
    },
  },
}));