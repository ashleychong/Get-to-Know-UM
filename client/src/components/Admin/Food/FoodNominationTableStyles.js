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
  paper: {
    marginTop: "16px",
  },
  searchInput: {
    width: "75%",
    marginTop: "24px",
  },
  chip: {
    alignItems: "center",
    borderRadius: 12,
    color: "white",
    cursor: "default",
    display: "inline-flex",
    flexGrow: 0,
    flexShrink: 0,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 2,
    fontWeight: 600,
    justifyContent: "center",
    letterSpacing: 0.5,
    minWidth: 20,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  pending: {
    backgroundColor: "#FFB020",
    color: "white",
  },
  declined: {
    backgroundColor: "#D14343",
    color: "white",
  },
  approved: {
    backgroundColor: "#14B8A6",
    color: "white",
  },
}));