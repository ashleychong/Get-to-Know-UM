import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    textDecoration: "none",
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    paddingRight: theme.spacing(5),
    backgroundColor: "#008394",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "250px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "black",
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
  },
  button: {
    backgroundColor: "#37CFEF",
    color: "#FFFFFF",
  },
}));
