import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: "4vh 2vh",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "4vh 8vw",
    },
  },
  firstRow: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2.5em",
      marginRight: "0.7em",
      // margin: "3em 0.7em",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "2.5em",
    },
  },
  searchRow: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  tagSearch: {
    [theme.breakpoints.down("md")]: {
      marginTop: "15px",
      marginBottom: "15px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "15px",
    },
  },
  searchButton: {
    [theme.breakpoints.down("md")]: {
      margin: "10px 0",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "15px",
    },
  },
  topicsContainer: {
    // top left/right bottom
    margin: "2em auto 3em",
  },
  topicsContent: {
    [theme.breakpoints.down("sm")]: {
      // margin: theme.spacing(1.5),
      padding: "20px 8px",
    },
    [theme.breakpoints.up("sm")]: {
      // margin: "4vh 8vw",
      // margin: theme.spacing(5),
      padding: theme.spacing(3),
    },

    // [theme.breakpoints.down("sm")]: {
    //   margin: theme.spacing(3),
    //   padding: theme.spacing(3),
    // },
    // [theme.breakpoints.up("sm")]: {
    //   margin: "24px 10vw",
    //   padding: theme.spacing(3),
    // },
    //Food Home
    // [theme.breakpoints.down("sm")]: {
    //   margin: "4vh 2vh",
    // },
    // [theme.breakpoints.up("sm")]: {
    //   margin: "4vh 8vw",
    // },
  },
  pagination: {
    justifyContent: "flex-end",
    display: "flex",
    marginTop: "1.5rem",
  },
}));


