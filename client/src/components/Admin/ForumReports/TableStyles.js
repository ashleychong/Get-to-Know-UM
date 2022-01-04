import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "16px",
  },
  searchInput: {
    width: "75%",
    marginTop: "24px",
  },
  reportedContent: {
    textAlign: "justify",
  },
  ignoreButton: {
    textTransform: "none",
    // "&.MuiButton-outlinedSecondary": {
    //   border: "1px #fd5602 solid",
    // },
    // backgroundColor: "#fd5602",
    // color: "white",
  },
  removeButton: {
    textTransform: "none",
    // backgroundColor: "#d93728",
    // color: "white",
  },
  link: {
    "&:link": {
      color: "blue",
    },
    "&:visited": {
      color: "blue",
    },
  },
}));
